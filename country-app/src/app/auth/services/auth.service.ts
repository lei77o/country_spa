import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { rxResource } from '@angular/core/rxjs-interop';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);

  private http = inject(HttpClient);

  checkAuthStatusResource = rxResource({
    loader:() => this.checkAuthStatus()
  });

  authStatus = computed<AuthStatus>(()=>{
      if(this._authStatus()== 'checking') return 'checking';
      if(this._user() && this._token()) return 'authenticated';
      return 'not-authenticated';
  });

  user = computed<User | null>(() => this._user());
  token = computed<string | null>(() => this._token());

  login(email: string, password: string): Observable<boolean> {
    this._authStatus.set('checking');
    return this.http.post<{ user: User, accessToken: string }>('/api/login', { email, password }).pipe(
      map((response) => this.handleAuthSuccess(response)),
      catchError((error) => {
        this.handleAuthError(error);
        return of(false);
      })
    );
  }

  logout(): void {
    this._authStatus.set('not-authenticated');
    this._user.set(null);
    this._token.set(null);
    localStorage.removeItem('token');
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      this._authStatus.set('not-authenticated');
      this._user.set(null);
      this._token.set(null);
      return of(false);
    }

    return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap((response) => {
        this.handleAuthSuccess(response);
      }),
      map(() => true),
      catchError((error) => {
        this.handleAuthError(error);
        return of(false);
      })
    );
  }

  private handleAuthSuccess({accessToken, user}: AuthResponse) {
    this._user.set(user);
    this._token.set(accessToken);
    this._authStatus.set('authenticated');
    localStorage.setItem('token', accessToken);
    return true;
  }

  private handleAuthError(error: any) {
    this.logout();
    return of(false);
  }
}
