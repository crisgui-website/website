import { landlineTelephoneRegex, phoneRegex } from "@/utils/regex";
import * as z from "zod";

export const schemaContact = z.object({
  name: z.string({
    message: "Nome é obrigatório",
  }),
  email: z
    .string({
      message: "E-mail é obrigatório",
    })
    .email("E-mail inválido"),
  phone: z
    .string({
      message: "Telefone é obrigatório",
    })
    .refine(
      (value) => {
        if (value) {
          if (value.length < 14) {
            return landlineTelephoneRegex.test(value);
          }
          return phoneRegex.test(value);
        }
        return false;
      },
      {
        message: "Informe um telefone válido",
      }
    ),
  message: z.string().optional(),
});

export const schemaBudget = z.object({
  name: z.string({
    message: "Nome é obrigatório",
  }),
  email: z
    .string({
      message: "E-mail é obrigatório",
    })
    .email("E-mail inválido"),
  phone: z
    .string({
      message: "Telefone é obrigatório",
    })
    .refine(
      (value) => {
        if (value) {
          if (value.length < 14) {
            return landlineTelephoneRegex.test(value);
          }
          return phoneRegex.test(value);
        }
        return false;
      },
      {
        message: "Informe um telefone válido",
      }
    ),
  product: z.enum(
    [
      "ROLETES",
      "TAMBORES",
      "SUPORTES",
    ],
    {
      message: "Produto é obrigatório",
    }
  ),
  term: z
    .number({ message: "Prazo é obrigatório" })
    .int("Prazo deve ser um número inteiro")
    .positive("Prazo deve ser um número positivo")
    .multipleOf(5, "O prazo deve ser de 5 em 5 dias"),
  city_state: z.string({
    message: "Cidade/Estado é obrigatório",
  }),
  message: z.string().optional(),
});

export const combinedSchema = z.union([schemaContact, schemaBudget]);
