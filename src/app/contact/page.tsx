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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#f8f6ee] text-[#173b1b]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-40 md:pb-28">
        {/* Decorative rice graphics */}
        <div className="pointer-events-none absolute -left-20 top-20 opacity-[0.08]">
          <Wheat size={260} strokeWidth={1} />
        </div>

        <div className="pointer-events-none absolute -right-20 bottom-0 rotate-180 opacity-[0.08]">
          <Wheat size={280} strokeWidth={1} />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(202,164,58,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#c5a03b]" />

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#285c2b]">
                <Wheat size={15} />
                Get In Touch
              </div>

              <span className="h-px w-12 bg-[#c5a03b]" />
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#123a18] md:text-6xl lg:text-7xl">
              Let&apos;s Talk
              <span className="block text-[#285f2b]">
                About Rice
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#5d625b] md:text-lg">
              Whether you are looking for quality rice products, bulk
              requirements, distribution opportunities, or business
              enquiries, we would be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}
            <div className="group rounded-3xl border border-[#e4dfcf] bg-white p-7 shadow-[0_12px_40px_rgba(30,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,60,30,0.11)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4e9] text-[#225b27] transition-colors group-hover:bg-[#1f5a24] group-hover:text-white">
                <Phone size={25} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Call Us
              </p>

              <h3 className="text-lg font-bold text-[#173b1b]">
                Customer Care
              </h3>

              <a
                href="tel:+912385252063"
                className="mt-2 block text-sm text-[#62665e] transition-colors hover:text-[#1f5a24]"
              >
                02385 - 252063
              </a>
            </div>

            {/* Location */}
            <div className="group rounded-3xl border border-[#e4dfcf] bg-white p-7 shadow-[0_12px_40px_rgba(30,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,60,30,0.11)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4e9] text-[#225b27] transition-colors group-hover:bg-[#1f5a24] group-hover:text-white">
                <MapPin size={25} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Visit Us
              </p>

              <h3 className="text-lg font-bold text-[#173b1b]">
                Our Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#62665e]">
                Udgir, Maharashtra
                <br />
                413517, India
              </p>
            </div>

            {/* Email */}
            <div className="group rounded-3xl border border-[#e4dfcf] bg-white p-7 shadow-[0_12px_40px_rgba(30,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,60,30,0.11)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4e9] text-[#225b27] transition-colors group-hover:bg-[#1f5a24] group-hover:text-white">
                <Mail size={25} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Write To Us
              </p>

              <h3 className="text-lg font-bold text-[#173b1b]">
                Email Enquiries
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#62665e]">
                Send us your enquiry and our team will get back to you.
              </p>
            </div>

            {/* Hours */}
            <div className="group rounded-3xl border border-[#e4dfcf] bg-white p-7 shadow-[0_12px_40px_rgba(30,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,60,30,0.11)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4e9] text-[#225b27] transition-colors group-hover:bg-[#1f5a24] group-hover:text-white">
                <Clock3 size={25} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b08c2c]">
                Working Hours
              </p>

              <h3 className="text-lg font-bold text-[#173b1b]">
                Business Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#62665e]">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#173f1b] py-20 md:py-24">
        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c9a63d]/20" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#c9a63d]/10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT INFORMATION */}
            <div className="text-white">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d0aa42]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e1bd56]">
                  Connect With Mahadal
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Quality rice starts
                <span className="block text-[#e1bd56]">
                  with a conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Tell us what you are looking for. Our team can help you with
                product information, bulk requirements, distribution enquiries,
                and other business-related questions.
              </p>

              {/* Information list */}
              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d0aa42]/40 text-[#e1bd56]">
                    <Factory size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Rice Processing & Supply
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Quality-focused rice processing and product supply for
                      customers and business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d0aa42]/40 text-[#e1bd56]">
                    <Wheat size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Rice Products
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Explore our range of Mahadal rice products and packaging
                      options for your requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d0aa42]/40 text-[#e1bd56]">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Business Enquiries
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Contact us for bulk orders, distribution and partnership
                      enquiries.
                    </p>
                  </div>
                </div>

              </div>

              {/* Call CTA */}
              <div className="mt-10">
                <a
                  href="tel:+912385252063"
                  className="inline-flex items-center gap-3 rounded-full border border-[#d0aa42]/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#d0aa42] hover:text-[#173f1b]"
                >
                  <Phone size={17} />
                  Call Customer Care
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] bg-[#fdfcf7] p-6 shadow-2xl md:p-9 lg:p-10">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b08c2c]">
                  Send An Enquiry
                </p>

                <h3 className="mt-2 font-serif text-3xl font-bold text-[#173b1b]">
                  How can we help?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6a6d66]">
                  Fill in the details below and our team will contact you.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="mt-0.5 shrink-0" size={18} />

                  <div>
                    <p className="font-semibold">
                      Thank you for contacting Mahadal.
                    </p>

                    <p className="mt-1 text-green-700">
                      Your enquiry has been received.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#243d26]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="h-13 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-sm text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#243d26]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter phone number"
                      className="h-13 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-sm text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#243d26]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="h-13 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-sm text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#243d26]">
                    Enquiry Type
                  </label>

                  <select
                    name="enquiry"
                    defaultValue=""
                    required
                    className="h-13 w-full rounded-xl border border-[#ddd9ca] bg-white px-4 text-sm text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="product">
                      Product Enquiry
                    </option>

                    <option value="bulk">
                      Bulk Order
                    </option>

                    <option value="distribution">
                      Distribution
                    </option>

                    <option value="business">
                      Business Partnership
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#243d26]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-xl border border-[#ddd9ca] bg-white px-4 py-3 text-sm text-[#173b1b] outline-none transition focus:border-[#285f2b] focus:ring-2 focus:ring-[#285f2b]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1f5a24] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#1f5a24]/15 transition-all hover:bg-[#17471c] hover:shadow-xl"
                >
                  Send Enquiry
                  <Send size={17} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS INFORMATION
      ========================================================= */}
      <section className="bg-[#f8f6ee] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c5a03b]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#285c2b]">
                Mahadal
              </span>

              <span className="h-px w-10 bg-[#c5a03b]" />
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#173b1b] md:text-5xl">
              We&apos;re Here To Help
            </h2>

            <p className="mt-5 text-base leading-7 text-[#686c64]">
              From choosing the right rice product to discussing bulk
              requirements and business opportunities, our team is ready to
              assist you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-[#e3decd] bg-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf4e9] text-[#285f2b]">
                <Wheat size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#173b1b]">
                Product Enquiries
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6a6d66]">
                Want to know more about our rice products, packaging or
                availability? Get in touch with us.
              </p>
            </div>

            <div className="rounded-3xl border border-[#e3decd] bg-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf4e9] text-[#285f2b]">
                <Factory size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#173b1b]">
                Bulk Requirements
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6a6d66]">
                Discuss your bulk rice requirements with our team and find
                suitable solutions for your business.
              </p>
            </div>

            <div className="rounded-3xl border border-[#e3decd] bg-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf4e9] text-[#285f2b]">
                <MessageCircle size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#173b1b]">
                Partnerships
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6a6d66]">
                Interested in distribution or working with Mahadal? Let&apos;s
                start a conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION / MAP
      ========================================================= */}
      <section className="border-t border-[#e4dfcf] bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid overflow-hidden rounded-[2rem] border border-[#ddd9ca] bg-[#f8f6ee] lg:grid-cols-[0.8fr_1.2fr]">

            <div className="flex flex-col justify-center p-8 md:p-12">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f5a24] text-white">
                <MapPin size={25} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b08c2c]">
                Find Us
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#173b1b] md:text-4xl">
                Our Location
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#686c64]">
                Mahadal is based in Udgir, Maharashtra. Contact our team for
                directions, business enquiries and further information.
              </p>

              <div className="mt-7 flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#285f2b]"
                />

                <p className="text-sm font-medium leading-6 text-[#394238]">
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
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1f5a24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17471c]"
              >
                Get Directions
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="relative min-h-[380px] overflow-hidden bg-[#e9e6d9]">
              <iframe
                title="Mahadal Location"
                src="https://www.google.com/maps?q=Udgir,Maharashtra,India&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#d1ad45] py-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left lg:px-10">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#355423]">
              Have A Requirement?
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#173b1b] md:text-4xl">
              Let&apos;s build a connection around quality rice.
            </h2>
          </div>

          <a
            href="tel:+912385252063"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#173f1b] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#0f2d13] hover:shadow-xl"
          >
            <Phone size={18} />
            Contact Mahadal
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </main>
  );
}