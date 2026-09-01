import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wheat,
} from "lucide-react";

const highlights = [
  "Carefully selected quality paddy",
  "Modern and hygienic milling process",
  "Consistent quality in every batch",
  "Focused on purity and customer trust",
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0df]">
      {/* Decorative grain mark */}
      <div className="pointer-events-none absolute -right-20 top-10 opacity-[0.035]">
        <Wheat
          size={280}
          strokeWidth={0.8}
          className="rotate-[20deg] text-[#285c24]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[90px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-[18px] border border-[#ddd4ba] bg-[#e8dfc6] shadow-[0_15px_40px_rgba(40,50,25,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about/rice-mill.jpg"
                  alt="Mahadal rice mill"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173c17]/35 via-transparent to-transparent" />
            </div>

            
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="lg:pl-2">

            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b18b2c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                About Mahadal
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-[650px] font-serif text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172c18] sm:text-[46px] lg:text-[52px]">
              Good Rice Begins With{" "}
              <span className="text-[#285c24]">
                Good Grain
              </span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-[#565c55] sm:text-[14px] sm:leading-7">
              Mahadal is committed to bringing quality rice from carefully
              selected paddy to homes and businesses. Our approach combines
              responsible sourcing, modern milling and careful quality
              control to deliver rice you can depend on.
            </p>

            <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-[#565c55] sm:text-[14px] sm:leading-7">
              Every batch is handled with attention to cleanliness,
              consistency and purity, because we believe quality should be
              something you can see, cook and trust.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#285c24]"
                  />

                  <span className="text-[11px] font-medium leading-5 text-[#343a34]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="mt-8">
              <Link
                href="/about"
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
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(40,92,36,0.15)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#174719]
                "
              >
                Learn More About Us

                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-[#ddd4ba]" />
    </section>
  );
}