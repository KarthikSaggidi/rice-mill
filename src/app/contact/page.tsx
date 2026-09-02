"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Factory,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Wheat,
  X,
} from "lucide-react";

import { FormEvent, useState, useEffect } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

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
  const [modalStatus, setModalStatus] = useState<FormStatus>("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledEnquiry, setPrefilledEnquiry] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleOpenModal = (enquiryType: string) => {
    setPrefilledEnquiry(enquiryType);
    setModalStatus("idle");
    setIsModalOpen(true);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    isModal = false
  ) => {
    e.preventDefault();

    const currentSetStatus = isModal ? setModalStatus : setStatus;
    currentSetStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      enquiry: formData.get("enquiry"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      company: formData.get("company"),
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

      currentSetStatus("success");
      form.reset();

      if (!isModal) {
        window.scrollTo({
          top: document.body.scrollHeight / 2,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error(error);
      currentSetStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6ee] text-[#173b1b]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          PAGE INTRO
      ========================================================= */}

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-36">
        {/* Decorative Wheat */}

        <div className="pointer-events-none absolute -left-24 top-16 opacity-[0.045]">
          <Wheat
            size={300}
            strokeWidth={0.7}
            className="-rotate-[18deg] text-[#285c24]"
          />
        </div>

        <div className="pointer-events-none absolute -right-24 bottom-0 opacity-[0.045]">
          <Wheat
            size={300}
            strokeWidth={0.7}
            className="rotate-[18deg] text-[#285c24]"
          />
        </div>

        {/* Soft background glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4b65c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[820px] text-center">
            {/* Eyebrow */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b8963e]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b8963e]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                  B2B Enquiries
                </span>
              </div>

              <span className="h-px w-10 bg-[#b8963e]" />
            </div>

            {/* Heading */}

            <h1 className="font-serif text-[43px] font-bold leading-[1.04] tracking-[-0.035em] text-[#123a18] sm:text-[54px] md:text-[62px] lg:text-[70px]">
              Let&apos;s Build a
              <span className="block text-[#285f2b]">
                Reliable Supply Partnership.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-[700px] text-[13px] leading-6 text-[#5d625b] sm:text-[14px] sm:leading-7">
              Looking for quality dal and pulses for your business? Share your
              requirement with Maharashtra Dal Industries for bulk purchasing,
              wholesale supply, distribution, retail or institutional
              requirements.
            </p>

            {/* B2B highlights */}

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#62685f]">
                <CheckCircle2
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#285c24]"
                />
                Bulk Requirements
              </div>

              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#62685f]">
                <CheckCircle2
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#285c24]"
                />
                Wholesale Supply
              </div>

              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#62685f]">
                <CheckCircle2
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#285c24]"
                />
                Distribution Enquiries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          B2B CONTACT INFORMATION
      ========================================================= */}

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* =====================================================
                BULK ORDERS (Triggers Modal)
            ===================================================== */}

            <button
              onClick={() => handleOpenModal("Bulk Purchase")}
              className="
                group
                w-full
                text-left
                rounded-[22px]
                border
                border-[#e4dfcf]
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(30,60,30,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(30,60,30,0.09)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#edf4e9]
                  text-[#225b27]
                  transition-colors
                  duration-300
                  group-hover:bg-[#285c24]
                  group-hover:text-white
                "
              >
                <Factory size={22} strokeWidth={1.6} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Bulk Supply
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Business Orders
              </h3>

              <p className="mt-2 text-[10px] leading-5 text-[#686d66]">
                Discuss your product, quantity and supply requirements with
                our team.
              </p>
            </button>

            {/* =====================================================
                DISTRIBUTORS (Triggers Modal)
            ===================================================== */}

            <button
              onClick={() => handleOpenModal("Distributor Enquiry")}
              className="
                group
                w-full
                text-left
                rounded-[22px]
                border
                border-[#e4dfcf]
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(30,60,30,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(30,60,30,0.09)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#edf4e9]
                  text-[#225b27]
                  transition-colors
                  duration-300
                  group-hover:bg-[#285c24]
                  group-hover:text-white
                "
              >
                <Truck size={22} strokeWidth={1.6} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Distribution
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Distributor Enquiries
              </h3>

              <p className="mt-2 text-[10px] leading-5 text-[#686d66]">
                Connect with us regarding distribution, wholesale and regular
                supply opportunities.
              </p>
            </button>

            {/* =====================================================
                PRODUCT (Links to /products)
            ===================================================== */}

            <Link
              href="/products"
              className="
                group
                block
                rounded-[22px]
                border
                border-[#e4dfcf]
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(30,60,30,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(30,60,30,0.09)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#edf4e9]
                  text-[#225b27]
                  transition-colors
                  duration-300
                  group-hover:bg-[#285c24]
                  group-hover:text-white
                "
              >
                <Wheat size={22} strokeWidth={1.6} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Product Support
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Dal &amp; Pulses
              </h3>

              <p className="mt-2 text-[10px] leading-5 text-[#686d66]">
                Ask about available products, processing, packaging and
                business requirements.
              </p>
            </Link>

            {/* =====================================================
                CUSTOMER CARE
            ===================================================== */}

            <div
              className="
                group
                rounded-[22px]
                border
                border-[#e4dfcf]
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(30,60,30,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(30,60,30,0.09)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#edf4e9]
                  text-[#225b27]
                  transition-colors
                  duration-300
                  group-hover:bg-[#285c24]
                  group-hover:text-white
                "
              >
                <Phone size={22} strokeWidth={1.6} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Call Us
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Customer Care
              </h3>

              <a
                href="tel:02385252063"
                className="mt-2 block text-[11px] font-semibold text-[#62665e] transition-colors hover:text-[#285c24]"
              >
                02385 - 252063
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN B2B ENQUIRY SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#173f1b] py-16 md:py-20">
        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d2b450]/15" />

        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#d2b450]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#d2b450]/10" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div className="text-white">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d4b451]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#dfc263]">
                  Business Enquiry
                </span>
              </div>

              <h2 className="mt-5 font-serif text-[37px] font-bold leading-[1.08] sm:text-[45px]">
                Tell us what your
                <span className="block text-[#dfc263]">
                  business needs.
                </span>
              </h2>

              <p className="mt-5 max-w-[480px] text-[12px] leading-6 text-white/60 sm:text-[13px]">
                Whether you are sourcing dal for wholesale distribution,
                retail, institutional use or regular business supply, share
                your requirement and our team will get in touch with you.
              </p>

              {/* =================================================
                  B2B BENEFITS
              ================================================= */}

              <div className="mt-9 space-y-6">
                {/* Bulk Procurement */}

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <Factory size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Bulk Procurement
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Share your required product and approximate quantity for
                      bulk purchasing discussions.
                    </p>
                  </div>
                </div>

                {/* Product Requirements */}

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <Wheat size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Product &amp; Packaging
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Enquire about dal varieties, product requirements and
                      packaging options suitable for your business.
                    </p>
                  </div>
                </div>

                {/* Distribution */}

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <Truck size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Distribution &amp; Wholesale
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Connect with us for wholesale, distribution and regular
                      supply requirements.
                    </p>
                  </div>
                </div>

                {/* Quality */}

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <ShieldCheck size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Quality-Focused Supply
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      We focus on careful sourcing, processing and quality
                      checks throughout our product journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call */}

              <a
                href="tel:02385252063"
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
                <Phone size={15} strokeWidth={1.6} />

                Call Customer Care

                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                />
              </a>
            </div>

            {/* =====================================================
                FORM
            ===================================================== */}

            <div className="rounded-[22px] bg-[#fdfcf7] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-9">
              {/* Form Header */}

              <div className="mb-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08c2c]">
                  B2B Requirement Form
                </p>

                <h3 className="mt-2 font-serif text-[28px] font-bold text-[#173b1b]">
                  Share Your Requirement
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#6a6d66]">
                  Provide a few details about your business requirement so our
                  team can understand how we can assist you.
                </p>
              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

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
                      Thank you for contacting Maharashtra Dal Industries. Our
                      team will review your requirement and get back to you.
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  ERROR MESSAGE
              ================================================= */}

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
                      directly at 02385-252063.
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={(e) => handleSubmit(e, false)}
                className="space-y-4"
              >
                {/* Name + Phone */}

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

                {/* Company + Email */}

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

                {/* Enquiry Type + Product */}

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

                {/* Quantity + Location */}

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

                {/* Message */}

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

                {/* Submit */}

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

      {/* =========================================================
          BUSINESS SUPPORT STRIP
      ========================================================= */}

      <section className="bg-[#f4f1e5] py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b8963e]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#285c24]">
                Business Support
              </span>

              <span className="h-px w-8 bg-[#b8963e]" />
            </div>

            <h2 className="mt-4 font-serif text-[28px] font-bold text-[#173b1b] sm:text-[34px]">
              Need to Discuss Your Requirement?
            </h2>

            <p className="mx-auto mt-3 max-w-[620px] text-[11px] leading-5 text-[#6b7068]">
              Our team is available to discuss product requirements, bulk
              quantities, wholesale enquiries, distribution and regular
              business supply.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {/* Phone */}

            <a
              href="tel:02385252063"
              className="
                group
                rounded-[18px]
                border
                border-[#ddd7c4]
                bg-white
                p-5
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#285c24]/30
                hover:shadow-[0_10px_30px_rgba(35,55,30,0.06)]
              "
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24]">
                <Phone size={17} strokeWidth={1.5} />
              </div>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#b08b30]">
                Customer Care
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#173b1b] group-hover:text-[#285c24]">
                02385 - 252063
              </p>
            </a>

            {/* Location (Links to Maps) */}

            <a
              href="https://maps.google.com/?q=Udgir,Maharashtra-413517"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                rounded-[18px]
                border
                border-[#ddd7c4]
                bg-white
                p-5
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#285c24]/30
                hover:shadow-[0_10px_30px_rgba(35,55,30,0.06)]
              "
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24]">
                <MapPin size={17} strokeWidth={1.5} />
              </div>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#b08b30]">
                Location
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#173b1b] group-hover:text-[#285c24]">
                Udgir, Maharashtra - 413517
              </p>
            </a>

            {/* Hours */}

            <div
              className="
                rounded-[18px]
                border
                border-[#ddd7c4]
                bg-white
                p-5
                text-center
              "
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24]">
                <Clock3 size={17} strokeWidth={1.5} />
              </div>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#b08b30]">
                Business Hours
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#173b1b]">
                Monday - Saturday
              </p>

              <p className="mt-0.5 text-[10px] text-[#6a6d66]">
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POPUP MODAL FORM
      ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[22px] bg-[#fdfcf7] p-6 shadow-2xl sm:p-8 lg:p-9 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-[#6a6d66] transition-colors hover:bg-[#edf4e9] hover:text-[#173b1b]"
            >
              <X size={20} strokeWidth={2} />
            </button>

            <div className="mb-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08c2c]">
                Quick Enquiry
              </p>
              <h3 className="mt-2 font-serif text-[28px] font-bold text-[#173b1b]">
                {prefilledEnquiry}
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-[#6a6d66]">
                Please provide your details below and our team will get in
                touch with you shortly.
              </p>
            </div>

            {/* Modal Success Message */}
            {modalStatus === "success" && (
              <div className="mb-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-green-700"
                />
                <div>
                  <p className="text-[12px] font-bold text-green-800">
                    Enquiry sent successfully.
                  </p>
                  <p className="mt-1 text-[10px] leading-5 text-green-700">
                    Thank you! We'll review your requirement and reach out.
                  </p>
                </div>
              </div>
            )}

            {/* Modal Error Message */}
            {modalStatus === "error" && (
              <div className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-red-700"
                />
                <div>
                  <p className="text-[12px] font-bold text-red-800">
                    Unable to send enquiry.
                  </p>
                  <p className="mt-1 text-[10px] leading-5 text-red-700">
                    Please try again or call us at 02385-252063.
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={(e) => handleSubmit(e, true)}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className="mb-1.5 block text-[11px] font-semibold text-[#243d26]">Contact Name *</label>
                  <input id="modal-name" type="text" name="name" required minLength={2} placeholder="Your name" className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition placeholder:text-[#a2a59f] focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10" />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="mb-1.5 block text-[11px] font-semibold text-[#243d26]">Phone Number *</label>
                  <input id="modal-phone" type="tel" name="phone" required placeholder="Your phone number" className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition placeholder:text-[#a2a59f] focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-company" className="mb-1.5 block text-[11px] font-semibold text-[#243d26]">Company / Business</label>
                  <input id="modal-company" type="text" name="company" placeholder="Company or business name" className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition placeholder:text-[#a2a59f] focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10" />
                </div>
                <div>
                  <label htmlFor="modal-enquiry" className="mb-1.5 block text-[11px] font-semibold text-[#243d26]">Enquiry Type *</label>
                  <select id="modal-enquiry" name="enquiry" required defaultValue={prefilledEnquiry || ""} className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10">
                    <option value="" disabled>Select enquiry type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="mb-1.5 block text-[11px] font-semibold text-[#243d26]">Requirement Details *</label>
                <textarea id="modal-message" name="message" required minLength={10} rows={4} placeholder="Tell us about your requirement..." className="w-full resize-none rounded-xl border border-[#ddd9ca] bg-white px-4 py-3.5 text-[12px] leading-5 text-[#173b1b] outline-none transition placeholder:text-[#a2a59f] focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10" />
              </div>

              <button
                type="submit"
                disabled={modalStatus === "loading"}
                className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#285c24] text-[11px] font-bold text-white shadow-[0_8px_22px_rgba(40,92,36,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#214d1f] hover:shadow-[0_12px_26px_rgba(40,92,36,0.2)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {modalStatus === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} strokeWidth={1.7} />
                    Submit Request
                    <ArrowRight size={15} strokeWidth={1.7} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}