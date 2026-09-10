"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Wheat,
} from "lucide-react";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const CUSTOMER_PHONE = "+91 94230 76699";
const CUSTOMER_PHONE_LINK = "tel:+919423076699";

const enquiryTypes = [
  "Bulk Purchase",
  "Wholesale Requirement",
  "Distributor Enquiry",
  "Retailer Enquiry",
  "Institutional Requirement",
  "Product Enquiry",
  "Packaging Enquiry",
  "Other Business Enquiry",
];

const products = [
  "Toor Dal",
  "Moong Dal",
  "Urad Dal",
  "Chana Dal",
  "Masoor Dal",
  "Raw Toor",
  "Cattle Feed",
  "Other / Multiple Products",
];

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      company: formData.get("company"),
      enquiry: formData.get("enquiry"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");

      form.reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6ee] text-[#173b1b]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          BUSINESS ENQUIRY
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#173f1b] pt-28 pb-16 md:pt-32 md:pb-20">

        {/* Background decorative circles */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d2b450]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#d2b450]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#d2b450]/10"
        />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

          <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div className="text-white">

              {/* Eyebrow */}

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#d4b451]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#dfc263]">
                  Business Enquiry
                </span>

              </div>

              {/* Heading */}

              <h1 className="mt-5 font-serif text-[37px] font-bold leading-[1.08] sm:text-[45px] lg:text-[48px]">

                Tell us what your

                <span className="block text-[#dfc263]">
                  business needs.
                </span>

              </h1>

              {/* Description */}

              <p className="mt-5 max-w-[480px] text-[12px] leading-6 text-white/60 sm:text-[13px]">

                Whether you are sourcing dal for wholesale distribution,
                retail, institutional use or regular business supply, share
                your requirement and our team will get in touch with you.

              </p>

              {/* =====================================================
                  BENEFITS
              ===================================================== */}

              <div className="mt-9 space-y-6">

                {/* Bulk Procurement */}

                <div className="flex gap-4">

                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">

                    <Factory
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <h2 className="text-sm font-semibold text-white">
                      Bulk Procurement
                    </h2>

                    <p className="mt-1 max-w-[430px] text-[11px] leading-5 text-white/50">
                      Share your required product and approximate quantity
                      for bulk purchasing discussions.
                    </p>

                  </div>

                </div>

                {/* Product & Packaging */}

                <div className="flex gap-4">

                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">

                    <Wheat
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <h2 className="text-sm font-semibold text-white">
                      Product &amp; Packaging
                    </h2>

                    <p className="mt-1 max-w-[430px] text-[11px] leading-5 text-white/50">
                      Enquire about dal varieties, product requirements and
                      packaging options suitable for your business.
                    </p>

                  </div>

                </div>

                {/* Distribution */}

                <div className="flex gap-4">

                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">

                    <Truck
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <h2 className="text-sm font-semibold text-white">
                      Distribution &amp; Wholesale
                    </h2>

                    <p className="mt-1 max-w-[430px] text-[11px] leading-5 text-white/50">
                      Connect with us for wholesale, distribution and regular
                      supply requirements.
                    </p>

                  </div>

                </div>

                {/* Quality */}

                <div className="flex gap-4">

                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">

                    <ShieldCheck
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <h2 className="text-sm font-semibold text-white">
                      Quality-Focused Supply
                    </h2>

                    <p className="mt-1 max-w-[430px] text-[11px] leading-5 text-white/50">
                      We focus on careful sourcing, processing and quality
                      checks throughout our product journey.
                    </p>

                  </div>

                </div>

              </div>

              {/* =====================================================
                  PHONE
              ===================================================== */}

              <a
                href={CUSTOMER_PHONE_LINK}
                className="
                  mt-9
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#d4b451]/40
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#d4b451]
                  hover:bg-[#d4b451]
                  hover:text-[#173f1b]
                "
              >

                <Phone
                  size={15}
                  strokeWidth={1.6}
                />

                <span>
                  {CUSTOMER_PHONE}
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                />

              </a>

            </div>

            {/* =====================================================
                B2B FORM
            ===================================================== */}

            <div className="rounded-[22px] bg-[#fdfcf7] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-9">

              {/* Form Header */}

              <div className="mb-7">

                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08c2c]">
                  B2B Requirement Form
                </p>

                <h2 className="mt-2 font-serif text-[28px] font-bold text-[#173b1b] sm:text-[30px]">
                  Share Your Requirement
                </h2>

                <p className="mt-2 max-w-[650px] text-[11px] leading-5 text-[#6a6d66]">
                  Provide a few details about your business requirement so
                  our team can understand how we can assist you.
                </p>

              </div>

              {/* =====================================================
                  SUCCESS MESSAGE
              ===================================================== */}

              {status === "success" && (
                <div className="mb-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">

                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-green-700"
                  />

                  <div>

                    <p className="text-[12px] font-bold text-green-800">
                      Business enquiry sent successfully.
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-green-700">
                      Thank you for contacting Maharashtra Dal Industries.
                      Our team will review your requirement and get back to
                      you.
                    </p>

                  </div>

                </div>
              )}

              {/* =====================================================
                  ERROR MESSAGE
              ===================================================== */}

              {status === "error" && (
                <div className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">

                  <MessageCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-red-700"
                  />

                  <div>

                    <p className="text-[12px] font-bold text-red-800">
                      Unable to send your enquiry.
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-red-700">
                      Please try again or contact our customer-care team
                      directly at {CUSTOMER_PHONE}.
                    </p>

                  </div>

                </div>
              )}

              {/* =====================================================
                  FORM
              ===================================================== */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* ===================================================
                    NAME + PHONE
                =================================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Contact Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="Your name"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                </div>

                {/* ===================================================
                    COMPANY + EMAIL
                =================================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Company / Business
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      placeholder="Company or business name"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Business Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                </div>

                {/* ===================================================
                    ENQUIRY + PRODUCT
                =================================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="enquiry"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Enquiry Type *
                    </label>

                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      defaultValue=""
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    >

                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      {enquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                        >
                          {type}
                        </option>
                      ))}

                    </select>

                  </div>

                  <div>

                    <label
                      htmlFor="product"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Product *
                    </label>

                    <select
                      id="product"
                      name="product"
                      required
                      defaultValue=""
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    >

                      <option value="" disabled>
                        Select product
                      </option>

                      {products.map((product) => (
                        <option
                          key={product}
                          value={product}
                        >
                          {product}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>

                {/* ===================================================
                    QUANTITY + LOCATION
                =================================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="quantity"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Approx. Quantity
                    </label>

                    <input
                      id="quantity"
                      type="text"
                      name="quantity"
                      placeholder="e.g. 5 MT / 10 MT / 500 kg"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="location"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Delivery / Business Location
                    </label>

                    <input
                      id="location"
                      type="text"
                      name="location"
                      placeholder="City / State"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ddd9ca]
                        bg-white
                        px-4
                        text-[12px]
                        text-[#173b1b]
                        outline-none
                        transition
                        placeholder:text-[#a2a59f]
                        focus:border-[#285f2b]
                        focus:ring-2
                        focus:ring-[#285f2b]/10
                      "
                    />

                  </div>

                </div>

                {/* ===================================================
                    REQUIREMENT DETAILS
                =================================================== */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                  >
                    Requirement Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell us about your requirement, preferred product, quantity, packaging or any other business details..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#ddd9ca]
                      bg-white
                      px-4
                      py-3.5
                      text-[12px]
                      leading-5
                      text-[#173b1b]
                      outline-none
                      transition
                      placeholder:text-[#a2a59f]
                      focus:border-[#285f2b]
                      focus:ring-2
                      focus:ring-[#285f2b]/10
                    "
                  />

                </div>

                {/* ===================================================
                    SUBMIT BUTTON
                =================================================== */}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-[#285c24]
                    text-[11px]
                    font-bold
                    text-white
                    shadow-[0_8px_22px_rgba(40,92,36,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#214d1f]
                    hover:shadow-[0_12px_26px_rgba(40,92,36,0.2)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:translate-y-0
                  "
                >

                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <Send
                        size={15}
                        strokeWidth={1.7}
                      />

                      Submit Business Enquiry

                      <ArrowRight
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}

                </button>

                {/* Privacy note */}

                <p className="text-center text-[9px] leading-4 text-[#8a8d87]">
                  Your information will be used only to respond to your
                  business enquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}