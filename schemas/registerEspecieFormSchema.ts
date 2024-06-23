import * as z from "zod";

export const registerEspecieFormSchema = z.object({
  nomeComum: z
    .string()
    .min(3, "O nome comum precisa ter pelo menos 3 caracteres")
    .max(50),
  nomeCientifico: z
    .string()
    .min(3, "O nome científico precisa ter pelo menos 3 caracteres")
    .max(50),
  valor: z.string().min(1, "O valor precisa ser especificado"),
  classeTaxonomicaId: z
    .string()
    .min(1, "A Classe Taxonômica precisa ser especificada"),
});
