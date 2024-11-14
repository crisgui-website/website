import { EmailBudgetTemplate, EmailContactTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendMailProps {
  mailData: {
    name: string;
    email: string;
    phone: string;
    message?: string;
    product?: string;
    term?: number;
    city_state?: string;
  };
  type: "contact" | "budget";
}

export async function sendMail({
  mailData,
  type,
}: SendMailProps) {
  await resend.emails.send({
    from: `${type === "contact" ? "contato" : "orcamento"}@resend.dev`,
    to: "vendas@crisgui.com.br",
    subject:
      type === "contact"
        ? "Nova solicitação de contato"
        : "Nova solicitação de orçamento",
    react:
      type === "contact"
        ? EmailContactTemplate(mailData)
        : EmailBudgetTemplate(mailData),
  });
}
