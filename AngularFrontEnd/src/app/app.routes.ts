import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario';

export const routes: Routes = [
  { path: 'listarUsuarios', component: ListarUsuariosComponent },
  { path: 'buscarUsuario', component: BuscarUsuarioComponent },
  { path: 'insertarUsuario', component: InsertarUsuarioComponent },
  { path: 'actualizarUsuario/:id', component: ActualizarUsuarioComponent },
  { path: '', redirectTo: 'listarUsuarios', pathMatch: 'full' }
];
