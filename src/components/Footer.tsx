"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
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
  "Toor Dal",
  "Moong Dal",
  "Urad Dal",
  "Chana Dal",
  "Masoor Dal",
  "Raw Toor",
  "Cattle Feed",
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

          <div className="max-w-[370px]">
            <Link
              href="/"
              aria-label="Mahadal - Maharashtra Dal Industries"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}

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

              {/* Brand */}

              <div>
                <div className="font-serif text-[21px] font-bold leading-none">
                  Mahadal
                </div>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-px w-4 bg-[#d9bf61]/70" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                    Maharashtra Dal Industries
                  </span>

                  <span className="h-px w-4 bg-[#d9bf61]/70" />
                </div>
              </div>
            </Link>

            {/* Company Description */}

            <p className="mt-4 max-w-[350px] text-[10px] leading-5 text-white/45">
              Maharashtra Dal Industries is committed to delivering quality
              pulses and dal through careful sourcing, modern processing,
              quality inspection and hygienic handling.
            </p>

            {/* Quality Highlight */}

            <div className="mt-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d9bf61]/10">
                <Wheat
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#d9bf61]"
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#d9bf61]">
                  Quality Pulses
                </p>

                <p className="mt-0.5 text-[9px] text-white/35">
                  Processed with care and consistency
                </p>
              </div>
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
                    className="
                      shrink-0
                      text-[#d9bf61]/55
                      transition-colors
                      group-hover:text-[#d9bf61]
                    "
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

            <div className="mt-4 space-y-4">
              {/* Address */}

              <div className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#d9bf61]"
                />

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/25">
                    Location
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-white/45">
                    Udgir,
                    <br />
                    Maharashtra - 413517, India
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
                    Customer Care
                  </p>

                  <a
                    href="tel:02385252063"
                    className="
                      mt-0.5
                      block
                      text-[10px]
                      text-white/45
                      transition-colors
                      hover:text-[#d9bf61]
                    "
                  >
                    02385-252063
                  </a>
                </div>
              </div>

              {/* Contact Button */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#d9bf61]/25
                  bg-[#d9bf61]/5
                  px-3
                  py-2.5
                  text-[9px]
                  font-semibold
                  text-[#d9bf61]
                  transition-all
                  duration-200
                  hover:border-[#d9bf61]/45
                  hover:bg-[#d9bf61]/10
                "
              >
                Send an Enquiry

                <ArrowUpRight
                  size={11}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
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
            © {new Date().getFullYear()} Maharashtra Dal Industries. All
            rights reserved.
          </p>

          {/* Developer */}

          <div className="flex flex-wrap items-center gap-3">
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