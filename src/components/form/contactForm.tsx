"use client";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";

import FormSVG from "../../assets/form.svg";

import { schemaContact } from "./schema";

import { toast } from 'sonner';

import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
import { Input } from "@/components/ui/input";
import { InputsWrapper } from "./components/InputsWrapper";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import masks from "@/utils/inputMask";
import { env } from "@/utils/env";

export function ContactForm() {

  const form = useForm<z.infer<typeof schemaContact>>({
    resolver: zodResolver(schemaContact),
  })

  const handleSubmit = async (data: z.infer<typeof schemaContact>) => {
    const { name, company, email, phone, message } = data;
    try {
      const loadingToast = toast.loading('Enviando mensagem...');

      const response = await fetch(
        env.lambdaUrl || '',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mailData: { name, company, email, phone, message },
            type: 'contact',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      toast.dismiss(loadingToast);
      toast.success('Mensagem enviada com sucesso!');
      form.reset({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.dismiss();
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="max-w-screen-xl m-auto w-full sm:my-10 grid sm:grid-cols-2 sm:gap-6">
      <div className="bg-blue-50 sm:rounded-2xl px-6 sm:px-14 py-6 sm:py-11 flex flex-col space-y-6">
        <h4 className="is-h4 text-gray-900 font-normal">Entre em contato</h4>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
            <InputsWrapper>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-y-1 mb-4 w-full">
                    <FormLabel className=' text-gray-900 font-medium'>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-gray-0 border-[1px] border-gray-10 text-gray-900 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0" />
                    </FormControl>
                    <FormMessage className="mt-1 text-sm text-orange-700" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-y-1 mb-4 w-full">
                    <FormLabel className=" text-gray-900 font-medium">
                      Empresa
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Empresa X"
                        {...field}
                        className="bg-gray-0 border-[1px] border-gray-10 text-gray-900 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-sm text-orange-700" />
                  </FormItem>
                )}
              />


            </InputsWrapper>

            <InputsWrapper>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-y-1 mb-4 w-full">
                    <FormLabel className='text-gray-900 font-medium'>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="johndoe@email.com" {...field} className="bg-gray-0 border-[1px] border-gray-10 text-gray-900 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0" />
                    </FormControl>
                    <FormMessage className="mt-1 text-sm text-orange-700" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-y-1 mb-4 w-full">
                    <FormLabel className=" text-gray-900 font-medium">
                      Telefone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(XX) XXXXX-XXXX"
                        {...field}
                        className="bg-gray-0 border-[1px] border-gray-10 text-gray-900 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                        onChange={(e) => {
                          const value =
                            masks["phoneAndLandlineTelephone"].maskEvent(e);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-sm text-orange-700" />
                  </FormItem>
                )}
              />
            </InputsWrapper>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start space-y-1 mb-4 w-full">
                  <FormLabel className='text-gray-900 font-medium'>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-40 bg-gray-0 border-[1px] border-gray-10 text-gray-900 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                      placeholder='Digite uma mensagem explicando o seu pedido...'
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-sm text-orange-700" />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                className="w-full h-16 rounded-2xl bg-orange-500 text-gray-0 mt-8"
                type="submit"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <Image src={FormSVG} alt="Foto do trabalho da CRISGUI" className="hidden sm:block" />
    </div>
  );
}
