"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
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
      <div className="mx-auto max-w-[1536px] px-4 pt-4 sm:px-6 lg:px-8 lg:pt-5">
        <nav className="rounded-[18px] border border-white/70 bg-white/95 shadow-[0_10px_40px_rgba(20,50,20,0.12)] backdrop-blur-xl">

          {/* =========================
              MAIN NAVBAR
          ========================= */}

          <div className="flex h-[72px] items-center justify-between px-5 sm:px-7 lg:h-[76px] lg:px-8">

            {/* LOGO */}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex shrink-0 items-center"
            >
              <div className="flex items-center gap-2.5">

                <div className="flex h-[48px] w-[40px] items-center justify-center">
                  <span className="text-[31px] leading-none">
                    🌾
                  </span>
                </div>

                <div>
                  <div className="font-serif text-[22px] font-bold leading-none tracking-[-0.02em] text-[#174719] sm:text-[25px]">
                    Mahadal
                  </div>

                  <div className="mt-[5px] flex items-center gap-1.5">
                    <span className="h-px w-5 bg-[#b8963e]" />

                    <span className="text-[9px] font-medium tracking-[0.28em] text-[#a17c1e] sm:text-[10px]">
                      RICE MILL
                    </span>

                    <span className="h-px w-5 bg-[#b8963e]" />
                  </div>
                </div>

              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}

            <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
              {navItems.map((item) => {
                const active = checkActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold ${
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

            {/* DESKTOP PHONE */}

            <a
              href="tel:+919876543210"
              className="hidden items-center gap-2.5 rounded-xl bg-[#205719] px-5 py-3 text-[13px] font-semibold text-white xl:flex"
            >
              <Phone size={15} />

              <span>+91 98765 43210</span>
            </a>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dfe5dc] text-[#205719] xl:hidden"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* =========================
              MOBILE NAVIGATION
          ========================= */}

          {isOpen && (
            <div className="border-t border-[#e7ebe4] px-5 pb-5 pt-3 xl:hidden">
              <div className="flex flex-col">

                {navItems.map((item) => {
                  const active = checkActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between border-b border-[#edf0eb] px-1 py-3.5 text-sm font-semibold ${
                        active
                          ? "text-[#205719]"
                          : "text-[#252a25]"
                      }`}
                    >
                      <span>{item.label}</span>

                      {active && (
                        <span className="h-2 w-2 rounded-full bg-[#b8963e]" />
                      )}
                    </Link>
                  );
                })}

                <a
                  href="tel:+919876543210"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#205719] px-5 py-3.5 text-sm font-semibold text-white"
                >
                  <Phone size={16} />

                  <span>+91 98765 43210</span>
                </a>

              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}