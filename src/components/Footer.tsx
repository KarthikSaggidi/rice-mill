"use client";

import Link from "next/link";
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
  { name: "Our Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  "Basmati Rice",
  "Sona Masuri",
  "Steam Rice",
  "Raw Rice",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#102711] text-white">

      {/* =========================================================
          SUBTLE BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-28 top-0 opacity-[0.025]">
        <Wheat
          size={300}
          strokeWidth={0.6}
          className="rotate-[-18deg] text-[#d9bf61]"
        />
      </div>

      <div className="pointer-events-none absolute -right-28 bottom-0 opacity-[0.025]">
        <Wheat
          size={320}
          strokeWidth={0.6}
          className="rotate-[18deg] text-[#d9bf61]"
        />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.85fr_1fr] lg:gap-10">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="max-w-[360px]">

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d9bf61]/30
                  bg-[#d9bf61]/10
                  transition-all
                  duration-300
                  group-hover:border-[#d9bf61]/50
                  group-hover:bg-[#d9bf61]/15
                "
              >
                <Wheat
                  size={21}
                  strokeWidth={1.25}
                  className="text-[#d9bf61]"
                />
              </div>

              <div>
                <div className="font-serif text-[21px] font-bold leading-none">
                  Mahadal
                </div>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-px w-4 bg-[#d9bf61]/70" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.28em] text-[#d9bf61]">
                    Rice Mill
                  </span>

                  <span className="h-px w-4 bg-[#d9bf61]/70" />
                </div>
              </div>
            </Link>

            <p className="mt-4 text-[10px] leading-5 text-white/45">
              Quality rice, carefully processed with modern technology,
              consistency and care — from selected paddy to every grain.
            </p>

            {/* Social */}
            <div className="mt-4 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  hover:border-[#d9bf61]/40
                  hover:bg-[#d9bf61]/10
                  hover:text-[#d9bf61]
                "
              >
                <Facebook size={13} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  hover:border-[#d9bf61]/40
                  hover:bg-[#d9bf61]/10
                  hover:text-[#d9bf61]
                "
              >
                <Instagram size={13} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  hover:border-[#d9bf61]/40
                  hover:bg-[#d9bf61]/10
                  hover:text-[#d9bf61]
                "
              >
                <Linkedin size={13} />
              </a>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-[#d9bf61]" />

              <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Quick Links
              </h3>
            </div>

            <div className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-white/45
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span className="h-px w-0 bg-[#d9bf61] transition-all duration-200 group-hover:w-2.5" />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              PRODUCTS
          ===================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-[#d9bf61]" />

              <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Our Products
              </h3>
            </div>

            <div className="mt-4 space-y-2.5">
              {productLinks.map((product) => (
                <Link
                  key={product}
                  href="/products"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-white/45
                    transition-all
                    duration-200
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <Wheat
                    size={9}
                    strokeWidth={1.3}
                    className="shrink-0 text-[#d9bf61]/55 transition-colors group-hover:text-[#d9bf61]"
                  />

                  {product}
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-[#d9bf61]" />

              <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Get In Touch
              </h3>
            </div>

            <div className="mt-4 space-y-3.5">

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/25">
                    Address
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-white/45">
                    Your Rice Mill Address,
                    <br />
                    Your City, State, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone
                  size={14}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/25">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-0.5 block text-[10px] text-white/45 transition-colors hover:text-[#d9bf61]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail
                  size={14}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div className="min-w-0">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/25">
                    Email
                  </p>

                  <a
                    href="mailto:info@mahadalricemill.com"
                    className="mt-0.5 block break-all text-[10px] text-white/45 transition-colors hover:text-[#d9bf61]"
                  >
                    info@mahadalricemill.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="relative z-10 border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-2
            px-5
            py-3.5
            text-[8px]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
            lg:px-12
          "
        >

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Mahadal Rice Mill. All rights reserved.
          </p>

          {/* Developer + Legal */}
          <div className="flex flex-wrap items-center gap-4">

            <Link
              href="/privacy"
              className="transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white/60"
            >
              Terms & Conditions
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            {/* DropXcorp */}
            <a
              href="https://www.dropxcorp.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-1
                text-white/40
                transition-colors
                hover:text-[#d9bf61]
              "
            >
              Designed & Developed by
              <span className="font-semibold text-white/60 transition-colors group-hover:text-[#d9bf61]">
                DropXcorp
              </span>

              <ArrowUpRight
                size={9}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

          </div>
        </div>
      </div>

      {/* =========================================================
          GOLD ACCENT
      ========================================================= */}

      <div className="h-[2px] bg-[#d9bf61]" />

    </footer>
  );
}