import { z } from 'zod';

export const esquemaUsuario = z.object({
  nombre: z.string().min(1),        // nombre obligatorio (string, mínimo 1 caracter)
  edad: z.number().int().positive() // edad debe ser un número entero positivo
});
