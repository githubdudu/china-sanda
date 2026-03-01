/* eslint-disable jsx-a11y/alt-text -- @react-pdf/renderer Image is not an HTML element and has no alt prop */
import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { InvoiceData } from "@/lib/invoice";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
    color: "#1a1a1a",
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#dc2626",
    paddingBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
  headerRight: {
    alignItems: "flex-end",
  },
  invoiceTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#dc2626",
    letterSpacing: 2,
  },
  invoiceMeta: {
    fontSize: 9,
    color: "#555",
    marginTop: 4,
  },
  // Two-column address block
  addressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addressBlock: {
    width: "48%",
  },
  addressLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  addressLine: {
    fontSize: 10,
    color: "#1a1a1a",
    marginBottom: 2,
  },
  addressName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  gstLine: {
    fontSize: 9,
    color: "#555",
    marginTop: 2,
  },
  // Divider
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    marginBottom: 16,
  },
  // Items table
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "6 8",
    borderRadius: 2,
    marginBottom: 0,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    padding: "7 8",
  },
  tableRowAlt: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    padding: "7 8",
    backgroundColor: "#fafafa",
  },
  colDescription: { flex: 4, fontSize: 10 },
  colQty: { flex: 1, fontSize: 10, textAlign: "center" },
  colUnit: { flex: 2, fontSize: 10, textAlign: "right" },
  colTotal: { flex: 2, fontSize: 10, textAlign: "right" },
  colDescriptionHeader: { flex: 4, fontSize: 9, fontFamily: "Helvetica-Bold", color: "#fff" },
  colQtyHeader: { flex: 1, fontSize: 9, fontFamily: "Helvetica-Bold", color: "#fff", textAlign: "center" },
  colUnitHeader: { flex: 2, fontSize: 9, fontFamily: "Helvetica-Bold", color: "#fff", textAlign: "right" },
  colTotalHeader: { flex: 2, fontSize: 9, fontFamily: "Helvetica-Bold", color: "#fff", textAlign: "right" },
  // Totals
  totalsContainer: {
    marginTop: 12,
    alignItems: "flex-end",
  },
  totalsTable: {
    width: 220,
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  totalsFinalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderTopWidth: 2,
    borderTopColor: "#1a1a1a",
    marginTop: 2,
  },
  totalsLabel: { fontSize: 10, color: "#555" },
  totalsValue: { fontSize: 10, textAlign: "right" },
  totalsFinalLabel: { fontSize: 11, fontFamily: "Helvetica-Bold" },
  totalsFinalValue: { fontSize: 11, fontFamily: "Helvetica-Bold", textAlign: "right" },
  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: "#888",
  },
  paymentNote: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#fef9ec",
    borderLeftWidth: 3,
    borderLeftColor: "#f59e0b",
    borderRadius: 2,
  },
  paymentNoteText: {
    fontSize: 9,
    color: "#555",
  },
  paymentNoteTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
    marginBottom: 3,
  },
});

const fmt = (n: number) => `NZD ${n.toFixed(2)}`;

interface InvoicePDFProps {
  data: InvoiceData;
  logoSrc?: string;
}

export const InvoicePDF = ({ data, logoSrc }: InvoicePDFProps) => (
  <Document
    title={`Tax Invoice ${data.invoiceNumber}`}
    author={data.supplierName}
    subject="NZ Tax Invoice"
  >
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          {logoSrc ? (
            <Image style={styles.logo} src={logoSrc} />
          ) : null}
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.invoiceTitle}>TAX INVOICE</Text>
          <Text style={styles.invoiceMeta}>
            Invoice #:
            {data.invoiceNumber}
          </Text>
          <Text style={styles.invoiceMeta}>
            Date:
            {data.date}
          </Text>
          {data.dueDate ? (
            <Text style={styles.invoiceMeta}>
              Due:
              {data.dueDate}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Supplier & Customer */}
      <View style={styles.addressRow}>
        <View style={styles.addressBlock}>
          <Text style={styles.addressLabel}>From</Text>
          <Text style={styles.addressName}>{data.supplierName}</Text>
          <Text style={styles.addressLine}>{data.supplierAddress}</Text>
          <Text style={styles.addressLine}>{data.supplierPhone}</Text>
          <Text style={styles.addressLine}>{data.supplierEmail}</Text>
          <Text style={styles.gstLine}>
            GST No:
            {data.supplierGST}
          </Text>
        </View>
        <View style={styles.addressBlock}>
          <Text style={styles.addressLabel}>Bill To</Text>
          <Text style={styles.addressName}>{data.customerName}</Text>
          {data.customerAddress ? (
            <Text style={styles.addressLine}>{data.customerAddress}</Text>
          ) : null}
          {data.customerEmail ? (
            <Text style={styles.addressLine}>{data.customerEmail}</Text>
          ) : null}
        </View>
      </View>

      <View style={styles.divider} />

      {/* Line items table */}
      <View style={styles.tableHeader}>
        <Text style={styles.colDescriptionHeader}>Description</Text>
        <Text style={styles.colQtyHeader}>Qty</Text>
        <Text style={styles.colUnitHeader}>Unit Price (excl. GST)</Text>
        <Text style={styles.colTotalHeader}>Line Total (excl. GST)</Text>
      </View>

      {data.items.map((item, idx) => (
        <View key={idx} style={idx % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
          <Text style={styles.colDescription}>{item.description}</Text>
          <Text style={styles.colQty}>{item.quantity}</Text>
          <Text style={styles.colUnit}>{fmt(item.unitPrice)}</Text>
          <Text style={styles.colTotal}>{fmt(item.quantity * item.unitPrice)}</Text>
        </View>
      ))}

      {/* Totals */}
      <View style={styles.totalsContainer}>
        <View style={styles.totalsTable}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Subtotal (excl. GST)</Text>
            <Text style={styles.totalsValue}>{fmt(data.subtotal)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>GST 15%</Text>
            <Text style={styles.totalsValue}>{fmt(data.gstAmount)}</Text>
          </View>
          <View style={styles.totalsFinalRow}>
            <Text style={styles.totalsFinalLabel}>Total (incl. GST)</Text>
            <Text style={styles.totalsFinalValue}>{fmt(data.total)}</Text>
          </View>
        </View>
      </View>

      {/* Payment note */}
      <View style={styles.paymentNote}>
        <Text style={styles.paymentNoteTitle}>Payment Instructions</Text>
        <Text style={styles.paymentNoteText}>
          Please make payment to China Sanda Club within 7 days of invoice date.
          Reference your invoice number when making payment.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          {data.supplierName}
          {" "}
          · GST No:
          {" "}
          {data.supplierGST}
        </Text>
        <Text style={styles.footerText}>{data.supplierAddress}</Text>
        <Text style={styles.footerText}>{data.invoiceNumber}</Text>
      </View>
    </Page>
  </Document>
);
