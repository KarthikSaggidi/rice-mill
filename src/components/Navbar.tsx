"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Products",
    href: "/products",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /*
   * Check whether the current page matches the navigation item.
   *
   * Home:
   * Only active when pathname === "/"
   *
   * Other pages:
   * Active when pathname matches the page or is a child route.
   */
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto max-w-[1536px] px-4 pt-4 sm:px-6 lg:px-8 lg:pt-5">
        <nav
          className="
            rounded-[18px]
            border border-white/70
            bg-white/95
            shadow-[0_10px_40px_rgba(20,50,20,0.12)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-[72px]
              items-center
              justify-between
              px-5
              sm:px-7
              lg:h-[76px]
              lg:px-8
            "
          >
            {/* =====================================================
                LOGO
            ===================================================== */}

            <Link
              href="/"
              className="flex shrink-0 items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2.5">
                {/* Rice logo */}
                <div className="flex h-[48px] w-[40px] items-center justify-center">
                  <span className="text-[31px] leading-none">
                    🌾
                  </span>
                </div>

                <div>
                  <div
                    className="
                      font-serif
                      text-[22px]
                      font-bold
                      leading-none
                      tracking-[-0.02em]
                      text-[#174719]
                      sm:text-[25px]
                    "
                  >
                    Mahadal
                  </div>

                  <div className="mt-[5px] flex items-center gap-1.5">
                    <span className="h-px w-5 bg-[#b8963e]" />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        tracking-[0.28em]
                        text-[#a17c1e]
                        sm:text-[10px]
                      "
                    >
                      RICE MILL
                    </span>

                    <span className="h-px w-5 bg-[#b8963e]" />
                  </div>
                </div>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      relative
                      whitespace-nowrap
                      py-2
                      text-[13px]
                      font-semibold
                      transition-colors
                      duration-200
                      ${
                        active
                          ? "text-[#205719]"
                          : "text-[#252a25] hover:text-[#205719]"
                      }
                    `}
                  >
                    {item.label}

                    {/* Active / Hover underline */}
                    <span
                      className={`
                        absolute
                        -bottom-1
                        left-0
                        h-[2px]
                        rounded-full
                        bg-[#285c24]
                        transition-all
                        duration-300
                        ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* =====================================================
                PHONE BUTTON
            ===================================================== */}

            <a
              href="tel:+919876543210"
              className="
                hidden
                items-center
                gap-2.5
                rounded-xl
                bg-[#205719]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_5px_15px_rgba(32,87,25,0.18)]
                transition-all
                duration-200
                hover:bg-[#174719]
                hover:shadow-[0_8px_22px_rgba(32,87,25,0.25)]
                xl:flex
              "
            >
              <Phone size={15} strokeWidth={2} />

              <span>+91 98765 43210</span>
            </a>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[#dfe5dc]
                text-[#205719]
                transition
                hover:bg-[#f3f6ef]
                xl:hidden
              "
            >
              {isOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
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
                px-5
                pb-5
                pt-3
                xl:hidden
              "
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        relative
                        border-b
                        border-[#edf0eb]
                        px-1
                        py-3.5
                        text-sm
                        font-semibold
                        transition-colors
                        duration-200
                        ${
                          active
                            ? "text-[#205719]"
                            : "text-[#252a25] hover:text-[#205719]"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>

                        {/* Active indicator */}
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-[#b8963e]" />
                        )}
                      </div>
                    </Link>
                  );
                })}

                {/* Mobile phone */}
                <a
                  href="tel:+919876543210"
                  className="
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
                    transition-colors
                    hover:bg-[#174719]
                  "
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