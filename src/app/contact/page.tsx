"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  Wheat,
} from "lucide-react";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      enquiry: formData.get("enquiry"),
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
        top: document.body.scrollHeight / 2,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6ee] text-[#173b1b]">
      <Navbar />

      {/* =========================================================
          PAGE INTRO
      ========================================================= */}

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-36">
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

        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4b65c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[780px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b8963e]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b8963e]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                  Get In Touch
                </span>
              </div>

              <span className="h-px w-10 bg-[#b8963e]" />
            </div>

            <h1 className="font-serif text-[46px] font-bold leading-[1.05] tracking-[-0.035em] text-[#173b1b] sm:text-[58px] lg:text-[68px]">
              Let&apos;s Talk About
              <span className="block text-[#285c24]">
                Quality Rice
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
              Whether you are looking for our rice products, bulk supplies,
              distribution opportunities or business information, our team is
              ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}
            <a
              href="tel:+912385252063"
              className="group rounded-[18px] border border-[#e3dfd1] bg-white p-6 shadow-[0_8px_28px_rgba(35,55,30,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3c18b] hover:shadow-[0_15px_35px_rgba(35,55,30,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24] transition-colors group-hover:bg-[#285c24] group-hover:text-white">
                <Phone size={19} strokeWidth={1.5} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                Call Us
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Customer Care
              </h3>

              <p className="mt-1 text-[11px] text-[#686d66]">
                02385 - 252063
              </p>
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Udgir%2C%20Maharashtra%20413517"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[18px] border border-[#e3dfd1] bg-white p-6 shadow-[0_8px_28px_rgba(35,55,30,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3c18b] hover:shadow-[0_15px_35px_rgba(35,55,30,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24] transition-colors group-hover:bg-[#285c24] group-hover:text-white">
                <MapPin size={19} strokeWidth={1.5} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                Visit Us
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Our Location
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#686d66]">
                Udgir, Maharashtra
                <br />
                413517, India
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@mahadalricemill.com"
              className="group rounded-[18px] border border-[#e3dfd1] bg-white p-6 shadow-[0_8px_28px_rgba(35,55,30,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3c18b] hover:shadow-[0_15px_35px_rgba(35,55,30,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24] transition-colors group-hover:bg-[#285c24] group-hover:text-white">
                <Mail size={19} strokeWidth={1.5} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                Write To Us
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Email Enquiries
              </h3>

              <p className="mt-1 text-[11px] text-[#686d66]">
                Send us your requirement
              </p>
            </a>

            {/* Hours */}
            <div className="group rounded-[18px] border border-[#e3dfd1] bg-white p-6 shadow-[0_8px_28px_rgba(35,55,30,0.045)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24]">
                <Clock3 size={19} strokeWidth={1.5} />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                Working Hours
              </p>

              <h3 className="mt-1 font-serif text-[19px] font-bold text-[#173b1b]">
                Business Hours
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#686d66]">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#173f1b] py-16 md:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d2b450]/15" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#d2b450]/10" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* LEFT */}
            <div className="flex flex-col justify-center text-white">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d4b451]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#dfc263]">
                  Connect With Us
                </span>
              </div>

              <h2 className="mt-5 font-serif text-[37px] font-bold leading-[1.08] sm:text-[45px]">
                We&apos;re here to
                <span className="block text-[#dfc263]">
                  help you.
                </span>
              </h2>

              <p className="mt-5 max-w-[480px] text-[12px] leading-6 text-white/60 sm:text-[13px]">
                Share your requirement with us and our team will get back to
                you regarding products, bulk orders, distribution and other
                business enquiries.
              </p>

              <div className="mt-9 space-y-6">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <Factory size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Rice Processing & Supply
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Quality-focused processing and dependable supply for
                      different customer requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <Wheat size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Product Enquiries
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Get information about our rice varieties, packaging and
                      availability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4b451]/30 text-[#dfc263]">
                    <MessageCircle size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Business Enquiries
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/50">
                      Contact us for bulk orders, distribution and partnership
                      opportunities.
                    </p>
                  </div>
                </div>

              </div>

              <a
                href="tel:+912385252063"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl border border-[#d4b451]/40 px-5 py-3 text-[11px] font-semibold transition-all hover:bg-[#d4b451] hover:text-[#173f1b]"
              >
                <Phone size={15} />
                Call Customer Care
                <ArrowRight size={15} />
              </a>
            </div>

            {/* FORM */}
            <div className="rounded-[22px] bg-[#fdfcf7] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-9">

              <div className="mb-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08c2c]">
                  Send An Enquiry
                </p>

                <h3 className="mt-2 font-serif text-[28px] font-bold text-[#173b1b]">
                  How can we help?
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#6a6d66]">
                  Fill in the details below and our team will get back to you.
                </p>
              </div>

              {/* SUCCESS */}
              {status === "success" && (
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
                      Thank you for contacting Mahadal. Our team will get back
                      to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-[11px] text-red-700">
                  <p className="font-bold">
                    Unable to send your enquiry.
                  </p>

                  <p className="mt-1">
                    Please try again or contact us directly by phone.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      minLength={2}
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
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
                      placeholder="Enter phone number"
                      className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                    />
                  </div>

                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  />
                </div>

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
                    defaultValue=""
                    required
                    className="h-12 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="Product Enquiry">
                      Product Enquiry
                    </option>

                    <option value="Bulk Order">
                      Bulk Order
                    </option>

                    <option value="Distribution">
                      Distribution
                    </option>

                    <option value="Business Partnership">
                      Business Partnership
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[11px] font-semibold text-[#243d26]"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-xl border border-[#ddd9ca] bg-white px-4 py-3 text-[12px] text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#285c24] px-6 py-3.5 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(40,92,36,0.15)] transition-all hover:bg-[#1b4a17] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-center text-[9px] leading-4 text-[#8a8d85]">
                  Your information is used only to respond to your enquiry.
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="bg-[#f8f6ee] py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[22px] border border-[#dedacd] bg-white lg:grid-cols-[0.8fr_1.2fr]">

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3e9] text-[#285c24]">
                <MapPin size={21} />
              </div>

              <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08c2c]">
                Find Us
              </p>

              <h2 className="mt-2 font-serif text-[30px] font-bold text-[#173b1b] sm:text-[35px]">
                Our Location
              </h2>

              <p className="mt-4 max-w-md text-[12px] leading-6 text-[#686c64]">
                Mahadal is based in Udgir, Maharashtra. Get in touch with our
                team for business enquiries, directions and further
                information.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#285c24]"
                />

                <p className="text-[12px] font-medium leading-5 text-[#394238]">
                  Udgir,
                  <br />
                  Maharashtra - 413517,
                  <br />
                  India
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Udgir%2C%20Maharashtra%20413517"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#285c24] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#1b4a17]"
              >
                Get Directions
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="relative min-h-[330px] bg-[#e9e6d9]">
              <iframe
                title="Mahadal Rice Mill Location"
                src="https://www.google.com/maps?q=Udgir,Maharashtra,India&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}