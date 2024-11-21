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
  console.log({ mailData })

  try {
    await resend.emails.send({
      from: `${type === "contact" ? "contato" : "orcamento"}@resend.dev`,
      to: "crisguiwebsite@gmail.com",
      subject:
        type === "contact"
          ? "Nova solicitação de contato"
          : "Nova solicitação de orçamento",
      react:
        type === "contact"
          ? EmailContactTemplate(mailData)
          : EmailBudgetTemplate(mailData),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // Optionally, you can add error handling logic here
    // For example, retrying the email send or logging the error
  }
}
