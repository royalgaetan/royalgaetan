"use client";

import { handleContactForm } from "@/actions/contact_form";
import { contactFormSchema } from "@/utils/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LuLoader2 } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { revalidatePath } from "next/cache";

const ContactForm = () => {
  const [isLoading, setTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (formData: any) => {
    setTransition(async () => {
      try {
        // Init EmailJS
        emailjs.init({
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY,
        });

        var templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_message: formData.message,
        };

        // Then Send email message to my account
        await emailjs.send(
          "gmail_provider",
          "template_default1",
          templateParams
        );

        form.clearErrors();
        form.reset();
        toast({
          description:
            "Your message has been sent. You will have my answer by then :)",
        });
      } catch (err) {
        console.log("Failed to send message: " + err);
        toast({
          variant: "destructive",
          description: "Oops! An error has occurred. Try later!",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 mb-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="customInput"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email"
                    className="customInput"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    className="customInput"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading && <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Submitting..." : "Submit message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
