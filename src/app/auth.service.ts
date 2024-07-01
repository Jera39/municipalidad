import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://tu_api/login'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  authenticate(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { usuario, contraseña })
      .pipe(
        catchError(error => {
          throw 'Error en la autenticación: ' + error;
        })
      );
  }

  register(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { usuario, contraseña })
      .pipe(
        catchError(error => {
          throw 'Error al registrar usuario: ' + error;
        })
      );
  }
}
