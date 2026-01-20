import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario';

@Component({
  selector: 'app-actualizar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-usuario.html'
})
export class ActualizarUsuarioComponent implements OnInit {

  id!: number;

  nombre = '';
  cedula = '';
  telefono = '';
  direccion = '';
  correo = '';

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const u = await this.usuarioService.buscarPorId(this.id);

    this.nombre = u.nombreusuario;
    this.cedula = u.cedulausuario;
    this.telefono = u.telefonousuario;
    this.direccion = u.direccionusuario;
    this.correo = u.correousuario;


    this.cd.detectChanges();
  }

  async actualizarUsuario() {
    await this.usuarioService.actualizarUsuario(this.id, {
      nombreusuario: this.nombre,
      cedulausuario: this.cedula,
      telefonousuario: this.telefono,
      direccionusuario: this.direccion,
      correousuario: this.correo
    });

    alert('Usuario actualizado correctamente');

    
    this.router.navigate(['/listarUsuarios']);
  }
}
