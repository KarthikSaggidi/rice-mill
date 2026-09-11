"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Wheat,
  Youtube,
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
  { name: "Split Dal", href: "/products" },
  { name: "Whole Pulses", href: "/products" },
  { name: "Cattle Feed", href: "/products" },
];

const CUSTOMER_PHONE = "+91 94230 76699";
const CUSTOMER_PHONE_LINK = "tel:+919423076699";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#102711] text-white">

      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#d9bf61]/[0.04]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-28
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#d9bf61]/[0.025]
        "
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          py-7
          sm:px-8
          sm:py-8
          lg:px-10
          lg:py-9
        "
      >

        <div
          className="
            grid
            gap-7
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
          "
        >

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>

            <div className="flex items-center gap-2">

              <span className="h-px w-5 bg-[#d9bf61]" />

              <h2 className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Quick Links
              </h2>

            </div>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 sm:block sm:space-y-2"
            >

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1.5
                    text-[9px]
                    text-white/40
                    transition-all
                    duration-200
                    hover:translate-x-0.5
                    hover:text-white
                  "
                >

                  <span
                    className="
                      h-px
                      w-0
                      bg-[#d9bf61]
                      transition-all
                      duration-200
                      group-hover:w-2
                    "
                  />

                  {link.name}

                </Link>
              ))}

            </nav>

          </div>

          {/* =====================================================
              PRODUCTS
          ===================================================== */}

          <div>

            <div className="flex items-center gap-2">

              <span className="h-px w-5 bg-[#d9bf61]" />

              <h2 className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Products
              </h2>

            </div>

            <div className="mt-4 space-y-2.5">

              {productLinks.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[9px]
                    text-white/40
                    transition-all
                    duration-200
                    hover:translate-x-0.5
                    hover:text-white
                  "
                >

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d9bf61]/15
                      bg-[#d9bf61]/[0.03]
                    "
                  >

                    <Wheat
                      size={8}
                      strokeWidth={1.4}
                      className="text-[#d9bf61]/70"
                    />

                  </span>

                  {product.name}

                </Link>
              ))}

            </div>

          </div>

          {/* =====================================================
    WHY CHOOSE US
===================================================== */}

<div>

  <div className="flex items-center gap-2">

    <span className="h-px w-5 bg-[#d9bf61]" />

    <h2 className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
      Why Choose Us
    </h2>

  </div>

  <div className="mt-4 space-y-3">

    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d9bf61]/15 bg-[#d9bf61]/[0.03]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d9bf61]" />
      </span>

      <div>
        <p className="text-[9px] font-medium text-white/55">
          Quality Assured
        </p>
        <p className="mt-0.5 text-[8px] text-white/25">
          Carefully processed pulses
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d9bf61]/15 bg-[#d9bf61]/[0.03]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d9bf61]" />
      </span>

      <div>
        <p className="text-[9px] font-medium text-white/55">
          Consistent Supply
        </p>
        <p className="mt-0.5 text-[8px] text-white/25">
          Reliable business supply
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d9bf61]/15 bg-[#d9bf61]/[0.03]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d9bf61]" />
      </span>

      <div>
        <p className="text-[9px] font-medium text-white/55">
          Trusted Service
        </p>
        <p className="mt-0.5 text-[8px] text-white/25">
          Built on quality and trust
        </p>
      </div>
    </div>

  </div>

</div>

          {/* =====================================================
              CONTACT US
          ===================================================== */}

          <div>

            <div className="flex items-center gap-2">

              <span className="h-px w-5 bg-[#d9bf61]" />

              <h2 className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d9bf61]">
                Contact Us
              </h2>

            </div>

            <div className="mt-4 space-y-2">

              {/* Location */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Udgir%2C%20Maharashtra%20413517%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-lg
                  border
                  border-white/[0.05]
                  bg-white/[0.018]
                  px-3
                  py-2.5
                  transition-all
                  duration-200
                  hover:border-[#d9bf61]/20
                  hover:bg-[#d9bf61]/[0.04]
                "
              >

                <MapPin
                  size={13}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#d9bf61]"
                />

                <div className="min-w-0">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-white/25">
                    Location
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-white/45">
                    Udgir, Maharashtra - 413517, India
                  </p>

                </div>

                <ArrowUpRight
                  size={10}
                  className="
                    ml-auto
                    shrink-0
                    text-white/15
                    transition-colors
                    group-hover:text-[#d9bf61]
                  "
                />

              </a>

              {/* Phone */}

              <a
                href={CUSTOMER_PHONE_LINK}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-lg
                  border
                  border-white/[0.05]
                  bg-white/[0.018]
                  px-3
                  py-2.5
                  transition-all
                  duration-200
                  hover:border-[#d9bf61]/20
                  hover:bg-[#d9bf61]/[0.04]
                "
              >

                <Phone
                  size={13}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#d9bf61]"
                />

                <div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-white/25">
                    Customer Care
                  </p>

                  <p className="mt-0.5 text-[9px] font-medium text-white/45 transition-colors group-hover:text-[#d9bf61]">
                    {CUSTOMER_PHONE}
                  </p>

                </div>

                <ArrowUpRight
                  size={10}
                  className="
                    ml-auto
                    shrink-0
                    text-white/15
                    transition-colors
                    group-hover:text-[#d9bf61]
                  "
                />

              </a>

              {/* Enquiry button */}

              <Link
                href="/contact"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-[#d9bf61]/25
                  bg-[#d9bf61]/[0.05]
                  px-3
                  py-2.5
                  text-[8px]
                  font-bold
                  text-[#d9bf61]
                  transition-all
                  duration-200
                  hover:border-[#d9bf61]/50
                  hover:bg-[#d9bf61]
                  hover:text-[#102711]
                "
              >

                Send an Enquiry

                <ArrowUpRight
                  size={10}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM BAR — SAME AS BEFORE
      ========================================================= */}

      <div className="relative z-10 border-t border-white/[0.07]">

        <div
          className="
            mx-auto
            flex
            max-w-[1280px]
            flex-col
            items-center
            justify-between
            gap-2
            px-5
            py-3
            text-center
            sm:flex-row
            sm:px-8
            sm:text-left
            lg:px-10
          "
        >

          <p className="text-[8px] text-white/25">
            © {new Date().getFullYear()} Maharashtra Dal Industries. All
            rights reserved.
          </p>

          <a
            href="https://www.dropxcorp.in"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-1
              text-[8px]
              text-white/25
              transition-colors
              hover:text-[#d9bf61]
            "
          >

            Designed &amp; Developed by

            <span className="font-semibold text-white/40 group-hover:text-[#d9bf61]">
              DropXcorp
            </span>

            <ArrowUpRight size={8} />

          </a>

        </div>

      </div>

      {/* =========================================================
          GOLD ACCENT
      ========================================================= */}

      <div className="h-[2px] bg-[#d9bf61]" />

    </footer>
  );
}