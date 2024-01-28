import * as z from "zod";
import { isCpfValid } from "../utils/isCpfValid";

export const registerUserFormSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres").max(50),
  cpf: z.string().refine((cpf) => isCpfValid(cpf), "CPF inválido"),
  birthday: z.string(),
});
