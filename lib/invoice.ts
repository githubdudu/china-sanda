export const GST_RATE = 0.15;

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number; // NZD, excluding GST
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string; // ISO "YYYY-MM-DD"
  dueDate?: string;
  // Supplier (pre-filled from address data)
  supplierName: string;
  supplierAddress: string;
  supplierGST: string;
  supplierEmail: string;
  supplierPhone: string;
  // Customer
  customerName: string;
  customerEmail?: string;
  customerAddress?: string;
  // Items
  items: InvoiceItem[];
  // Calculated totals
  subtotal: number;
  gstAmount: number;
  total: number;
}

export const calculateTotals = (items: InvoiceItem[]) => {
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
  const gstAmount = subtotal * GST_RATE;
  return { subtotal, gstAmount, total: subtotal + gstAmount };
};

export const NZD_PLANS = [
  { label: "Basic Monthly", price: 120 },
  { label: "Premium Monthly", price: 220 },
  { label: "Annual Membership", price: 2200 },
  { label: "Private Training (10-pack)", price: 1100 },
];
