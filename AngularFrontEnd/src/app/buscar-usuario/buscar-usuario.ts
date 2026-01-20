import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario';

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-usuario.html'
})
export class BuscarUsuarioComponent {

  cedula = '';

  nombre = '';
  cedulausuario = '';
  telefono = '';
  direccion = '';
  correo = '';

  constructor(private usuarioService: UsuarioService) {}

  async buscarUsuario() {
    try {
      const data: any[] = await this.usuarioService.buscarPorCedula(this.cedula);
      if (data.length > 0) {
        const u = data[0];
        this.nombre = u.nombreusuario;
        this.cedulausuario = u.cedulausuario;
        this.telefono = u.telefonousuario;
        this.direccion = u.direccionusuario;
        this.correo = u.correousuario;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
