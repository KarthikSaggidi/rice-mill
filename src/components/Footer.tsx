"use client";

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Wheat,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  "Basmati Rice",
  "Sona Masuri",
  "Steam Rice",
  "Raw Rice",
];

export default function Footer() {
  return (
    <footer className="bg-[#102711] text-white">

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-10">

          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div className="max-w-[390px]">

            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7bb58]/40 bg-[#d7bb58]/10">
                <Wheat
                  size={24}
                  strokeWidth={1.3}
                  className="text-[#d9bf61]"
                />
              </div>

              <div>
                <div className="font-serif text-[22px] font-bold leading-none">
                  Sri Lakshmi
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d9bf61]">
                  Rice Mill
                </div>
              </div>
            </a>

            <p className="mt-6 text-[12px] leading-6 text-white/55">
              Delivering quality rice with care, consistency and modern
              processing. From carefully selected paddy to every finished
              grain, quality remains at the heart of our work.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#d9bf61]/50 hover:bg-[#d9bf61]/10 hover:text-[#d9bf61]"
              >
                <Facebook size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#d9bf61]/50 hover:bg-[#d9bf61]/10 hover:text-[#d9bf61]"
              >
                <Instagram size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#d9bf61]/50 hover:bg-[#d9bf61]/10 hover:text-[#d9bf61]"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-[11px] text-white/55 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-[#d9bf61] transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              PRODUCTS
          ===================================================== */}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
              Our Products
            </h3>

            <div className="mt-5 space-y-3">
              {productLinks.map((product) => (
                <a
                  key={product}
                  href="/products"
                  className="group flex items-center gap-2 text-[11px] text-white/55 transition-colors hover:text-white"
                >
                  <Wheat
                    size={11}
                    strokeWidth={1.3}
                    className="text-[#d9bf61]/60 transition-colors group-hover:text-[#d9bf61]"
                  />

                  {product}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    Address
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/60">
                    Your Rice Mill Address,
                    <br />
                    Your City, State, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="mt-1 block text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    Email
                  </p>

                  <a
                    href="mailto:info@yourricemill.com"
                    className="mt-1 block break-all text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    info@yourricemill.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER CTA STRIP
        ========================================================= */}

        <div className="mt-14 flex flex-col justify-between gap-5 rounded-[15px] border border-white/10 bg-white/[0.035] px-5 py-5 sm:flex-row sm:items-center sm:px-6">

          <div>
            <p className="font-serif text-[18px] font-bold text-white">
              Looking for quality rice?
            </p>

            <p className="mt-1 text-[10px] text-white/45">
              Talk to our team about your requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 self-start rounded-lg bg-[#d9bf61] px-5 py-3 text-[10px] font-bold text-[#183018] transition-all hover:bg-[#e6cc70] sm:self-auto"
          >
            Contact Us

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-[9px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">

          <p>
            © {new Date().getFullYear()} Sri Lakshmi Rice Mill. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}