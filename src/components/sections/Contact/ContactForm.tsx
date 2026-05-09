"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors duration-200";

const errorClass = "mt-1 text-xs text-red-400";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <input
          {...register("name")}
          placeholder="Your Name"
          className={inputClass}
          disabled={status === "sending"}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className={inputClass}
          disabled={status === "sending"}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Your Message"
          rows={5}
          className={`${inputClass} resize-none`}
          disabled={status === "sending"}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ background: "var(--gradient-brand)" }}
      >
        {status === "sending" ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          <CheckCircle className="w-4 h-4 shrink-0" />
          Message sent! I&apos;ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try emailing me directly.
        </div>
      )}
    </form>
  );
}
