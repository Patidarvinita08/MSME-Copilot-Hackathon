import { useState } from "react";
import {
  Receipt,
  Building2,
  User,
  CalendarDays,
  Hash,
  Package,
  Calculator,
  CheckCircle2,
} from "lucide-react";

import { createInvoice } from "../services/api";

function Invoice() {
  const [formData, setFormData] = useState({
    business_name: "",
    customer_name: "",
    invoice_number: "INV-001",
    invoice_date: new Date().toISOString().split("T")[0],
    item: "",
    quantity: 1,
    price: "",
    gst_rate: 18,
  });

  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setInvoice(null);

    try {
      const data = await createInvoice({
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        gst_rate: Number(formData.gst_rate),
      });

      setInvoice(data.invoice);
    } catch (err) {
      console.error("Invoice API error:", err);
      setError("Unable to generate invoice. Please check the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">
          BUSINESS DOCUMENTS
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Invoice Generator
        </h1>

        <p className="text-slate-500 mt-2">
          Create professional invoices with automatic GST and total
          calculation.
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <p className="text-sm text-red-600">
            {error}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* FORM */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Invoice Details
              </h2>

              <p className="text-sm text-slate-500">
                Enter the information for your invoice.
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* BUSINESS DETAILS */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Business & Customer
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Business Name
                  </label>

                  <div className="relative mt-2">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      placeholder="Your business name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Customer Name
                  </label>

                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleChange}
                      placeholder="Customer name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* INVOICE DETAILS */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Invoice Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Invoice Number
                  </label>

                  <div className="relative mt-2">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      name="invoice_number"
                      value={formData.invoice_number}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Invoice Date
                  </label>

                  <div className="relative mt-2">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      type="date"
                      name="invoice_date"
                      value={formData.invoice_date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ITEM */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Product / Service
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-slate-700">
                    Item Description
                  </label>

                  <div className="relative mt-2">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      name="item"
                      value={formData.item}
                      onChange={handleChange}
                      placeholder="e.g. Website Development"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="1"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Price (₹)
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                    className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    GST (%)
                  </label>

                  <select
                    name="gst_rate"
                    value={formData.gst_rate}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              <Calculator className="w-5 h-5" />

              {loading ? "Generating Invoice..." : "Generate Invoice"}
            </button>

          </form>
        </div>

        {/* PREVIEW */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 h-fit">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Preview
              </p>

              <h2 className="text-lg font-semibold mt-1">
                Invoice Summary
              </h2>
            </div>

            <Receipt className="w-5 h-5 text-blue-400" />

          </div>

          {!invoice ? (
            <div className="mt-8 py-10 text-center">

              <Receipt className="w-10 h-10 text-slate-600 mx-auto" />

              <p className="text-sm text-slate-400 mt-4">
                Fill in the invoice details and generate your invoice.
              </p>

            </div>
          ) : (
            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="w-5 h-5" />

                <span className="text-sm font-medium">
                  Invoice generated successfully
                </span>
              </div>

              <div className="border-t border-slate-700 pt-5 space-y-4">

                <div>
                  <p className="text-xs text-slate-400">
                    Invoice Number
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {invoice.invoice_number}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Business
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {invoice.business_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Customer
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {invoice.customer_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Item
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {invoice.item}
                  </p>
                </div>

              </div>

              <div className="border-t border-slate-700 pt-5 space-y-3">

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    Subtotal
                  </span>

                  <span>
                    ₹{invoice.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    GST ({invoice.gst_rate}%)
                  </span>

                  <span>
                    ₹{invoice.gst_amount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-700">
                  <span className="font-semibold">
                    Total
                  </span>

                  <span className="text-xl font-bold text-blue-400">
                    ₹{invoice.total.toFixed(2)}
                  </span>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Invoice;