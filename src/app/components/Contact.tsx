"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONFIG } from "../configuration";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.email({
    message: "Por favor, insira um email válido.",
  }),
  subject: z.string().min(5, {
    message: "O assunto deve ter pelo menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 php-email-form"
        data-aos="fade"
        data-aos-delay={100}
      >
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Email</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplo@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assunto</FormLabel>
              <FormControl>
                <Input placeholder="Assunto da mensagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem aqui..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit">Enviar Mensagem</Button>
        </div>
      </form>
    </Form>
  );
}

export function Contact() {
  const infoItems = [
    {
      icon: "bi-telephone",
      title: "Ligue Para Nós",
      content: CONFIG.phoneNumber,
    },
    {
      icon: "bi-envelope",
      title: "Envie-nos um Email",
      content: CONFIG.contactEmail,
    },
    {
      icon: "bi-clock",
      title: "Horário de Funcionamento:",
      content: "Seg-Sáb: 11h - 23h",
    },
  ];

  const InfoItem = ({
    icon,
    title,
    content,
    delay,
  }: {
    icon: string;
    title: string;
    content: string;
    delay: number;
  }) => (
    <div className="info-item flex" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`${icon} flex-shrink-0`} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="contact section">
      <div
        className="container mx-auto sm:px-4 section-title"
        data-aos="fade-up"
      >
        <h2>Contato</h2>
        <p>
          Entre em contato com o GPMecatrônica para saber mais sobre nossos
          projetos e como colaborar conosco.
        </p>
      </div>
      <div
        className="container mx-auto sm:px-4"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="flex flex-wrap gx-lg-0 gy-4">
          <div className="lg:w-1/3 pr-4 pl-4">
            <div className="info-container flex flex-col items-center">
              {infoItems.map((item, index) => (
                <InfoItem
                  key={item.title}
                  icon={`bi ${item.icon}`}
                  title={item.title}
                  content={item.content}
                  delay={(index + 1) * 100}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 pr-4 pl-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
