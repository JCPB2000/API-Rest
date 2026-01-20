import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario';

@Component({
  selector: 'app-insertar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insertar-usuario.html'
})
export class InsertarUsuarioComponent {

  nombre = '';
  cedula = '';
  telefono = '';
  direccion = '';
  correo = '';

  constructor(private usuarioService: UsuarioService) {}

  async guardar() {
    try {
      console.log('Click en Guardar');

      const data = {
        nombreusuario: this.nombre,
        cedulausuario: this.cedula,
        telefonousuario: this.telefono,
        direccionusuario: this.direccion,
        correousuario: this.correo
      };

      const response = await this.usuarioService.insertarUsuario(data);

      console.log('Respuesta del backend:', response);

      alert('Usuario insertado correctamente');

      
      this.nombre = '';
      this.cedula = '';
      this.telefono = '';
      this.direccion = '';
      this.correo = '';

    } catch (error) {
      console.error('Error al insertar usuario:', error);
      alert('Error al insertar usuario');
    }
  }
}
