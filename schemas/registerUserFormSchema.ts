import * as z from "zod";
import { validateCpf } from "../utils/validateCpf";

export const registerUserFormSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres").max(50),
  cpf: z.string().refine((cpf) => validateCpf(cpf), "CPF inválido"),
  birthday: z.string(),
});
