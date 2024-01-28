import * as z from "zod";
import { isCpfValid } from "../utils/isCpfValid";

export const findClientByCpfSchema = z.object({
  cpf: z.string().refine((cpf) => isCpfValid(cpf), "CPF inválido"),
});
