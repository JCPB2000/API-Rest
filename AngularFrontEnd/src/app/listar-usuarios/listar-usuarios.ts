import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-usuarios.html'
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.usuarios = await this.usuarioService.listarUsuarios();
    console.log('Usuarios cargados:', this.usuarios);
    this.cdr.detectChanges();
  }

 
  diasDesde(fecha: string): string {
    if (!fecha) return '';

    const hoy = new Date();
    const f = new Date(fecha);

    const diff = hoy.getTime() - f.getTime();
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (dias === 0) return 'Hoy';
    if (dias === 1) return 'Hace 1 día';
    return `Hace ${dias} días`;
  }
}
