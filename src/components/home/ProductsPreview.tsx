"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Package,
  Wheat,
} from "lucide-react";

const products = [
  {
    name: "Basmati Rice",
    subtitle: "Long Grain & Aromatic",
    description:
      "Premium long-grain rice with a naturally elegant aroma, texture and appearance.",
    image: "/images/products/basmati-rice.jpg",
    tags: ["Long Grain", "Aromatic"],
  },
  {
    name: "Sona Masuri",
    subtitle: "Light & Everyday Rice",
    description:
      "A versatile rice variety with a soft texture, perfect for everyday meals and traditional dishes.",
    image: "/images/products/sona-masuri.jpg",
    tags: ["Light", "Everyday"],
  },
  {
    name: "Steam Rice",
    subtitle: "Strong & Nutritious",
    description:
      "Carefully processed steamed rice designed to retain its natural texture and quality.",
    image: "/images/products/steam-rice.jpg",
    tags: ["Steam", "Nutritious"],
  },
];

export default function ProductsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#fffef9]">
      {/* =========================================================
          SUBTLE BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-24 top-24 opacity-[0.025]">
        <Wheat
          size={260}
          strokeWidth={0.7}
          className="rotate-[-20deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-24 bottom-20 opacity-[0.025]">
        <Wheat
          size={260}
          strokeWidth={0.7}
          className="rotate-[20deg] text-[#285c24]"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[88px]">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[760px] text-center"
        >
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c5a448]" />

            <div className="flex items-center gap-2">
              <Wheat
                size={14}
                strokeWidth={1.4}
                className="text-[#b59438]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                Our Rice Varieties
              </span>
            </div>

            <span className="h-px w-10 bg-[#c5a448]" />
          </div>

          {/* Heading */}

          <h2 className="font-serif text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172c18] sm:text-[46px] lg:text-[52px]">
            Quality Grains for{" "}
            <span className="text-[#285c24]">Every Table</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
            Carefully selected and professionally processed rice varieties,
            prepared to deliver excellent taste, texture and consistency.
          </p>
        </motion.div>

        {/* =======================================================
            PRODUCT CARDS
        ======================================================= */}

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="
                group
                overflow-hidden
                rounded-[17px]
                border
                border-[#e5e0d3]
                bg-white
                shadow-[0_6px_22px_rgba(35,55,30,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#d4c58f]
                hover:shadow-[0_14px_32px_rgba(35,55,30,0.08)]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative aspect-[4/3] overflow-hidden bg-[#e7dfc9]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.04]
                  "
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#123d12]/60 via-transparent to-transparent" />

                {/* Product number */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/15
                    backdrop-blur-md
                  "
                >
                  <span className="font-serif text-[13px] font-bold text-white">
                    0{index + 1}
                  </span>
                </div>

                {/* Tags */}

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/25
                        bg-black/20
                        px-3
                        py-1
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-[21px] font-bold leading-tight text-[#1d341e]">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#b08b30]">
                      {product.subtitle}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf3e9]
                    "
                  >
                    <Wheat
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#285c24]"
                    />
                  </div>
                </div>

                <p className="mt-4 text-[11px] leading-5 text-[#6c7169]">
                  {product.description}
                </p>

                {/* Quality line */}

                <div className="mt-4 border-t border-[#e8e3d7] pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-[#285c24]">
                    <Check size={14} strokeWidth={2} />

                    <span>Quality checked & carefully processed</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            mt-9
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          {/* Bulk order text */}

          <div className="flex items-center gap-2 text-[10px] text-[#74786f]">
            <Package
              size={15}
              strokeWidth={1.5}
              className="text-[#285c24]"
            />

            <span>Bulk & commercial orders available</span>
          </div>

          {/* Button */}

          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#285c24]
              px-6
              py-3.5
              text-[12px]
              font-semibold
              text-white
              shadow-[0_7px_18px_rgba(40,92,36,0.14)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#1b4a17]
            "
          >
            <span>View All Products</span>

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM SEPARATOR
      ========================================================= */}

      <div className="h-px bg-[#e4dfd1]" />
    </section>
  );
}