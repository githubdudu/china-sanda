"use client";

import { useState } from "react";

const INPUT_CLASS = "w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData  = new FormData(e.currentTarget);
    formData.append("access_key", "e4d9af6f-6e08-4454-bb28-3ce9e1d0c180");
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const { success } = await res.json();
      setStatus(success ? "sent" : "error");
      if (success) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="py-8 text-center">
        Thanks! We&apos;ll get back to you within 48 hours.<br />
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="subject" value="New enquiry from China Sanda Club website" />
      {/* Honeypot: hidden from humans, bots fill it and the submission is dropped */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" required maxLength={80} className={INPUT_CLASS} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" required className={INPUT_CLASS} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" className={INPUT_CLASS} />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium mb-2">
          {`I'm interested in / 我对以下感兴趣 *`}
        </label>
        <select id="interest" name="interest" required defaultValue="general" className={INPUT_CLASS}>
          <option value="general">General Inquiry / 一般咨询</option>
          <option value="beginner">Beginner Classes / 初级课程</option>
          <option value="advanced">Advanced Training / 高级训练</option>
          <option value="youth">Youth Programs / 青少年课程</option>
          <option value="private">Private Training / 私教</option>
          <option value="trial">Trial Class / 试听课</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message / 留言 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending… / 发送中…" : "Send Message / 发送消息"}
      </button>

      {status === "error" && (
        <p className="text-error text-sm text-center">
          Something went wrong. Please email us at chinasandaclub@gmail.com
        </p>
      )}
    </form>
  );
};
