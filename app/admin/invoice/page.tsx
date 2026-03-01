"use client";

import { useState } from "react";

import { defaultAddressData } from "@/data/address";
import { calculateTotals, NZD_PLANS } from "@/lib/invoice";
import type { InvoiceData, InvoiceItem } from "@/lib/invoice";

const today = new Date().toISOString().slice(0, 10);

const SUPPLIER_NAME = "China Sanda Club";
const SUPPLIER_ADDRESS = [
  `${defaultAddressData.streetNumber} ${defaultAddressData.streetName}`,
  defaultAddressData.suburb,
  defaultAddressData.city,
  defaultAddressData.postcode,
  defaultAddressData.country,
]
  .filter(Boolean)
  .join(", ");
const SUPPLIER_GST = process.env.NEXT_PUBLIC_GST_NUMBER ?? "GST-NUMBER-NOT-SET";
const SUPPLIER_EMAIL = defaultAddressData.email ?? "";
const SUPPLIER_PHONE = defaultAddressData.phone ?? "";

const defaultItem = (): InvoiceItem => ({ description: "", quantity: 1, unitPrice: 0 });

const fmt = (n: number) => `$${n.toFixed(2)}`;

export default function AdminInvoicePage() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(
    `INV-${new Date().getFullYear()}-001`,
  );
  const [date, setDate] = useState(today);
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([defaultItem()]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { subtotal, gstAmount, total } = calculateTotals(items);

  const updateItem = (idx: number, field: keyof InvoiceItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addItem = () => setItems((prev) => [...prev, defaultItem()]);

  const removeItem = (idx: number) =>
    setItems((prev) => prev.filter((_, i) => i !== idx));

  const applyPlan = (idx: number, planLabel: string) => {
    const plan = NZD_PLANS.find((p) => p.label === planLabel);
    if (!plan) return;
    setItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, description: plan.label, unitPrice: plan.price } : item,
      ),
    );
  };

  const handleGenerate = async () => {
    if (!customerName.trim()) {
      setError("Customer name is required.");
      return;
    }
    if (items.some((item) => !item.description.trim())) {
      setError("All line items must have a description.");
      return;
    }

    setError(null);
    setLoading(true);

    const payload: InvoiceData = {
      invoiceNumber,
      date,
      dueDate: dueDate || undefined,
      supplierName: SUPPLIER_NAME,
      supplierAddress: SUPPLIER_ADDRESS,
      supplierGST: SUPPLIER_GST,
      supplierEmail: SUPPLIER_EMAIL,
      supplierPhone: SUPPLIER_PHONE,
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim() || undefined,
      customerAddress: customerAddress.trim() || undefined,
      items,
      subtotal,
      gstAmount,
      total,
    };

    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${invoiceNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    }
    catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate invoice.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-1">Generate Tax Invoice</h1>
        <p className="text-sm text-foreground/60 mb-8">NZD · GST 15% · Admin only</p>

        {/* Customer */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
            Customer
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Customer name *"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Customer email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Customer address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </section>

        {/* Invoice meta */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
            Invoice Details
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <label className="text-xs text-foreground/60 mb-1 block">Invoice #</label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-foreground/60 mb-1 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-foreground/60 mb-1 block">Due date (optional)</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* Line items */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">
            Line Items
          </h2>

          <div className="space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="border border-foreground/10 rounded p-3 bg-foreground/5">
                {/* Quick-fill from plans */}
                <div className="mb-2">
                  <select
                    defaultValue=""
                    onChange={(e) => applyPlan(idx, e.target.value)}
                    className="text-xs border border-foreground/20 rounded px-2 py-1 bg-background text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Quick-fill from plan…</option>
                    {NZD_PLANS.map((p) => (
                      <option key={p.label} value={p.label}>
                        {p.label}
                        {" "}
                        — $
                        {p.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Description *"
                    value={item.description}
                    onChange={(e) => updateItem(idx, "description", e.target.value)}
                    className="col-span-6 border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="number"
                    min={1}
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) => updateItem(idx, "quantity", Math.max(1, parseInt(e.target.value) || 1))}
                    className="col-span-2 border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary text-center"
                  />
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    placeholder="Unit price (excl. GST)"
                    value={item.unitPrice}
                    onChange={(e) => updateItem(idx, "unitPrice", parseFloat(e.target.value) || 0)}
                    className="col-span-3 border border-foreground/20 rounded px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    disabled={items.length === 1}
                    className="col-span-1 text-red-500 hover:text-red-700 disabled:opacity-20 text-lg font-bold"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>

                <div className="text-right text-xs text-foreground/60 mt-1">
                  Line total (excl. GST):
                  {" "}
                  {fmt(item.quantity * item.unitPrice)}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addItem}
            className="mt-3 text-sm btn-secondary px-4 py-2 rounded"
          >
            + Add line item
          </button>
        </section>

        {/* Live totals */}
        <section className="mb-8 p-4 border border-foreground/10 rounded bg-foreground/5">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-foreground/60">Subtotal (excl. GST)</span>
            <span>{fmt(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-foreground/60">GST 15%</span>
            <span>{fmt(gstAmount)}</span>
          </div>
          <div className="flex justify-between text-base font-bold border-t border-foreground/20 pt-2 mt-2">
            <span>Total (incl. GST)</span>
            <span>{fmt(total)}</span>
          </div>
        </section>

        {/* Supplier info (read-only) */}
        <section className="mb-8 p-4 border border-foreground/10 rounded text-xs text-foreground/50">
          <p className="font-semibold mb-1 text-foreground/70">Supplier (pre-filled)</p>
          <p>{SUPPLIER_NAME}</p>
          <p>{SUPPLIER_ADDRESS}</p>
          <p>
            GST No:
            {SUPPLIER_GST}
          </p>
          <p>
            {SUPPLIER_EMAIL}
            {" "}
            ·
            {" "}
            {SUPPLIER_PHONE}
          </p>
        </section>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading}
          className="w-full btn-primary py-3 rounded text-base font-semibold disabled:opacity-50"
        >
          {loading ? "Generating PDF…" : "Generate Invoice PDF"}
        </button>
      </div>
    </main>
  );
}
