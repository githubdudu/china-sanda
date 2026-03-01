import fs from "fs";
import path from "path";

import { renderToBuffer } from "@react-pdf/renderer";
import * as ReactPDF from "@react-pdf/renderer";
import type React from "react";

import { InvoicePDF } from "@/components/InvoicePDF";
import type { InvoiceData } from "@/lib/invoice";

export async function POST(request: Request) {
  const data: InvoiceData = await request.json();

  // Load logo as base64 data URI for reliable rendering across environments
  let logoSrc: string | undefined;
  try {
    const logoPath = path.join(process.cwd(), "public", "logo.jpeg");
    const logoBuffer = fs.readFileSync(logoPath);
    logoSrc = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;
  }
  catch {
    // Logo not found — render without it
  }

  // InvoicePDF renders a <Document> internally; cast to satisfy renderToBuffer's type
  const element = (
    <InvoicePDF data={data} logoSrc={logoSrc} />
  ) as unknown as React.ReactElement<ReactPDF.DocumentProps>;

  const buffer = await renderToBuffer(element);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="invoice-${data.invoiceNumber}.pdf"`,
    },
  });
}
