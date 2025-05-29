import { atom } from 'nanostores';

// Creamos un estado global llamado contador, empieza en 0
export const contador = atom(0);

// Función para incrementar el valor
export function incrementar() {
  contador.set(contador.get() + 1);
}
