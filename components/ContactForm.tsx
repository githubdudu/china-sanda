"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const INPUT_CLASS =
  "w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary";

function Select() {
  const params = useSearchParams();
  const interest = params.get("interest");
  return (
    <select
      id="interest"
      name="interest"
      required
      defaultValue={interest || "general"}
      className={INPUT_CLASS}
    >
      <option value="trial">Trial Class</option>
      <option value="youth">Youth Programs</option>
      <option value="private">Private Training</option>
      <option value="general">General Inquiry</option>
      <option value="beginner">Beginner Classes</option>
      <option value="advanced">Advanced Training</option>
    </select>
  );
}

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "e4d9af6f-6e08-4454-bb28-3ce9e1d0c180");
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const response = await res.json();
      const { success } = response;
      setStatus(success ? "sent" : "error");
      if (success) form.reset();
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col space-y-6 min-h-5/12">
        <p className="py-8 text-center display text-2xl">Message Sent!</p>
        <p className="py-4 text-center">
          Thanks! We&apos;ll get back to you within 48 hours.
          <br />
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="hidden"
        name="subject"
        value="New enquiry from China Sanda Club website"
      />
      {/* Honeypot: hidden from humans, bots fill it and the submission is dropped */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="interest" className="block text-sm font-medium mb-2">
          {`I'm interested in *`}
        </label>
        <Suspense>
          <Select />
        </Suspense>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={80}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" className={INPUT_CLASS} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 p-3"
      >
        {status === "sending" ? "Sending…" : "Send the message"}
      </button>

      {status === "error" && (
        <p className="text-error text-sm text-center">
          Something went wrong. Please email us at chinasandaclub@gmail.com
        </p>
      )}
    </form>
  );
};
