import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private baseUrl = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Promise<any[]> {
    return firstValueFrom(this.http.get<any[]>(this.baseUrl));
  }

  buscarPorCedula(cedula: string): Promise<any[]> {
    return firstValueFrom(
      this.http.get<any[]>(`${this.baseUrl}/buscar/${cedula}`)
    );
  }

  buscarPorId(id: number): Promise<any> {
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/${id}`)
    );
  }

  insertarUsuario(data: any): Promise<any> {
    return firstValueFrom(
      this.http.post(this.baseUrl, data)
    );
  }

  actualizarUsuario(id: number, data: any): Promise<any> {
    return firstValueFrom(
      this.http.put(`${this.baseUrl}/actualizar/${id}`, data)
    );
  }
}
