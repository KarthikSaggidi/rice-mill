"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact" },
];

function checkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <div className="mx-auto max-w-[1536px] px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5">
        <nav
          aria-label="Main navigation"
          className="
            relative
            overflow-visible
            rounded-[24px]
            border
            border-white/70
            bg-white/95
            shadow-[0_10px_40px_rgba(20,50,20,0.12)]
            backdrop-blur-xl
            sm:rounded-[28px]
          "
        >
          {/* =====================================================
              MAIN NAVBAR
          ===================================================== */}

          <div
            className="
              relative
              flex
              h-[72px]
              items-center
              px-4
              sm:h-[76px]
              sm:px-7
              lg:px-8
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              aria-label="Mahadal - Maharashtra Dal Industries"
              className="
                relative
                z-10
                flex
                min-w-0
                max-w-[calc(100%-58px)]
                shrink
                items-center
                lg:max-w-none
                lg:shrink-0
              "
            >
              <div
                className="
                  relative
                  h-[55px]
                  w-[210px]
                  max-w-full
                  sm:h-[60px]
                  sm:w-[225px]
                  lg:h-[68px]
                  lg:w-[240px]
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Mahadal - Maharashtra Dal Industries"
                  fill
                  priority
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 225px, 240px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="ml-auto hidden items-center gap-6 xl:flex 2xl:gap-8">
              {navItems.map((item) => {
                const active = checkActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-200 ${
                      active
                        ? "text-[#205719]"
                        : "text-[#252a25] hover:text-[#205719]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#285c24] ${
                        active
                          ? "w-full"
                          : "w-0 transition-all duration-200 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP GET IN TOUCH
            ================================================= */}

            <Link
              href="/contact"
              aria-label="Get in touch with Maharashtra Dal Industries"
              className="
                group
                ml-7
                hidden
                shrink-0
                items-center
                gap-2
                rounded-xl
                bg-[#205719]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_5px_14px_rgba(32,87,25,0.14)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#285c24]
                hover:shadow-[0_8px_18px_rgba(32,87,25,0.2)]
                xl:flex
              "
            >
              <span>Get in Touch</span>

              <ArrowRight
                size={15}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              className="
                absolute
                right-3
                top-1/2
                z-50
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-xl
                border
                border-[#174719]/15
                bg-white
                text-[#174719]
                shadow-[0_3px_10px_rgba(23,71,25,0.08)]
                transition-all
                duration-200
                hover:border-[#174719]/30
                hover:bg-[#f8faf5]
                active:scale-95
                xl:hidden
                sm:right-5
              "
            >
              {isOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* =====================================================
              MOBILE NAVIGATION
          ===================================================== */}

          {isOpen && (
            <div
              className="
                border-t
                border-[#e7ebe4]
                px-4
                pb-5
                pt-3
                sm:px-6
                xl:hidden
              "
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = checkActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between border-b border-[#edf0eb] px-1 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                        active
                          ? "text-[#205719]"
                          : "text-[#252a25] hover:text-[#205719]"
                      }`}
                    >
                      <span>{item.label}</span>

                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-[#b8963e]"
                        />
                      )}
                    </Link>
                  );
                })}

                {/* =================================================
                    MOBILE GET IN TOUCH
                ================================================= */}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    group
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#205719]
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_5px_14px_rgba(32,87,25,0.12)]
                    transition-all
                    duration-200
                    hover:bg-[#285c24]
                  "
                >
                  <span>Get in Touch</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}