import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from "@/lib/mail";
import { IFormBudget } from '@/components/form/types';

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      product,
      city_state,
      term,
      message = ""
    }: IFormBudget = await request.json();

    await sendMail({
      mailData: { name, email, phone, product, city_state, term, message },
      type: "budget",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}