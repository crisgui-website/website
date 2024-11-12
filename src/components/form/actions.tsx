"use server";
import { sendMail } from "@/lib/mail";
import { IFormBudget, IFormContact } from "./types";

export async function sendContact({
  name,
  email,
  phone,
  message = "",
}: IFormContact) {
  await sendMail({
    mailData: { name, email, phone, message },
    type: "contact",
  });
}

export async function sendBudget({
  name,
  email,
  phone,
  product,
  city_state,
  term,
  message = "",
}: IFormBudget) {
  await sendMail({
    mailData: { name, email, phone, product, city_state, term, message },
    type: "budget",
  });
}
