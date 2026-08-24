"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Wheat,
  Check,
  Package,
} from "lucide-react";

const products = [
  {
    name: "Basmati Rice",
    subtitle: "Long Grain & Aromatic",
    description:
      "Premium long-grain rice known for its distinctive aroma, texture and elegant appearance.",
    image: "/images/products/basmati-rice.jpg",
    tags: ["Long Grain", "Aromatic"],
  },
  {
    name: "Sona Masuri",
    subtitle: "Light & Everyday Rice",
    description:
      "A versatile rice variety with a soft texture, ideal for everyday meals and traditional dishes.",
    image: "/images/products/sona-masuri.jpg",
    tags: ["Light", "Everyday"],
  },
  {
    name: "Steam Rice",
    subtitle: "Strong & Nutritious",
    description:
      "Carefully processed steamed rice that retains its natural texture and nutritional qualities.",
    image: "/images/products/steam-rice.jpg",
    tags: ["Steam", "Nutritious"],
  },
];

export default function ProductsPreview() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-20 top-20 opacity-[0.025]">
        <Wheat
          size={300}
          strokeWidth={0.7}
          className="rotate-[-20deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-20 bottom-10 opacity-[0.025]">
        <Wheat
          size={300}
          strokeWidth={0.7}
          className="rotate-[20deg] text-[#285c24]"
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-[95px]">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[750px] text-center"
        >
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

          <h2 className="font-serif text-[39px] font-bold leading-tight tracking-[-0.035em] text-[#172c18] sm:text-[47px] lg:text-[52px]">
            Quality Grains for{" "}
            <span className="text-[#285c24]">
              Every Table
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
            Carefully selected and professionally processed rice varieties,
            prepared to deliver excellent taste, texture and consistency.
          </p>
        </motion.div>

        {/* =======================================================
            PRODUCT CARDS
        ======================================================= */}

        <div className="mx-auto mt-11 grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="
                group
                overflow-hidden
                rounded-[18px]
                border
                border-[#e5e0d3]
                bg-[#faf9f4]
                shadow-[0_7px_25px_rgba(35,55,30,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-[#d2c28e]
                hover:shadow-[0_18px_40px_rgba(35,55,30,0.10)]
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e4ddc7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.05]
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123d12]/55 via-transparent to-transparent" />

                {/* Product number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/15 backdrop-blur-md">
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

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-[22px] font-bold leading-tight text-[#1d341e]">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#b08b30]">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
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

                <div className="mt-4 border-t border-[#e8e3d7] pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-[#285c24]">
                    <Check size={14} strokeWidth={2} />
                    Carefully processed & quality checked
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <div className="flex items-center gap-2 text-[10px] text-[#74786f]">
            <Package
              size={15}
              strokeWidth={1.5}
              className="text-[#285c24]"
            />
            Bulk & commercial orders available
          </div>

          <a
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
              shadow-[0_8px_20px_rgba(40,92,36,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#1b4a17]
            "
          >
            View All Products

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="h-[1px] bg-[#e4dfd1]" />
    </section>
  );
}