export type Permission = "dashboard:view";
export function can(_perm: Permission) {
  return true; // stub
}
// Aquí podrías implementar un sistema de permisos más complejo
// basado en el usuario autenticado y sus roles/privilegios.