"use client"

import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "../services/api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(3).max(50, {
    message: "Digite um nome válido",
  }),
  email: z.string().min(2, {
    message: "Digite um endereço de email válido",
  }),
  password: z.string().min(8, {
    message: "Digite uma senha válida",
  }),
});

function UserRegister() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      await api.post("/users", values);
      setMessage("Usuário cadastrado com sucesso!");
      form.reset({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage("Erro ao cadastrar usuário.");
      console.error("Erro ao cadastrar usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 flex flex-col border-2 rounded-lg w-full mx-auto  bg-white shadow-md">
      <h1 className="font-black text-xl mb-4">Cadastrar Usuário</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-10 gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="lg:col-span-5 col-span-10">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do usuário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="lg:col-span-5 col-span-10">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="lg:col-span-5 col-span-10">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Digite a senha temporária do usuário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={loading}
              className="font-black hover:bg-blue-500 lg:col-span-5 col-span-10 lg:mt-8"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>

          </div>
        </form>
      </Form>
      {message && <p className="mt-5 text-sm text-center">{message}</p>}
    </div>
  );
}

export default UserRegister;
