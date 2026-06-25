import { motion } from "motion/react";
import type { Page } from "../App";
import { FloatingPetals } from "../components/FloatingPetals";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const SPIRIT_ROSTER: {
  page: Page;
  name: string;
  bengali: string;
  typeLabel: string;
  accent: string;
  portrait: string;
}[] = [
  {
    page: "petni",
    name: "Petni",
    bengali: "পেত্নী",
    typeLabel: "Ghost · Banyan Spirit",
    accent: "0.75 0.18 300",
    portrait: "/assets/generated/petni-portrait.dim_512x768.jpg",
  },
  {
    page: "aleya",
    name: "Aleya",
    bengali: "আলেয়া",
    typeLabel: "Marsh Ghost Light",
    accent: "0.82 0.18 175",
    portrait: "/assets/generated/aleya-portrait.dim_512x768.jpg",
  },
  {
    page: "pishacha",
    name: "Pishacha",
    bengali: "পিশাচ",
    typeLabel: "Cremation Demon (Yaoi)",
    accent: "0.58 0.22 10",
    portrait: "/assets/generated/pishacha-portrait.dim_512x768.jpg",
  },
  {
    page: "rakkhoshi",
    name: "Rakkhoshi",
    bengali: "রাক্ষসী",
    typeLabel: "Demon Queen",
    accent: "0.62 0.25 20",
    portrait: "/assets/generated/rakkhoshi-portrait.dim_512x768.jpg",
  },
  {
    page: "doitto",
    name: "Doitto",
    bengali: "দৈত্য",
    typeLabel: "Primordial Giantess",
    accent: "0.78 0.19 60",
    portrait: "/assets/generated/doitto-portrait.dim_512x768.jpg",
  },
  {
    page: "betal",
    name: "Betal",
    bengali: "বেতাল",
    typeLabel: "Riddle-Ghost · Vetala",
    accent: "0.78 0.08 240",
    portrait: "/assets/generated/betal-portrait.dim_512x768.jpg",
  },
  {
    page: "jokkho",
    name: "Jokkho",
    bengali: "যক্ষ",
    typeLabel: "Treasure Guardian",
    accent: "0.82 0.20 75",
    portrait: "/assets/generated/jokkho-portrait.dim_512x768.jpg",
  },
  {
    page: "shoytan",
    name: "Shoytan",
    bengali: "শয়তান",
    typeLabel: "Tempter Devil",
    accent: "0.65 0.28 15",
    portrait: "/assets/generated/shoytan-portrait.dim_512x768.jpg",
  },
  {
    page: "icchadhari",
    name: "Icchadhari Nag",
    bengali: "ইচ্ছাধারী নাগ",
    typeLabel: "Shape-Shifting Cobra",
    accent: "0.70 0.20 155",
    portrait: "/assets/generated/icchadhari-portrait.dim_512x768.jpg",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="min-h-screen relative overflow-hidden hero-gradient-home">
      <FloatingPetals count={16} accentHue={155} />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32 text-center">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 justify-center mb-2">
            <div
              className="h-px w-12 opacity-60"
              style={{ background: "oklch(var(--jade))" }}
            />
            <span className="font-body text-sm tracking-[0.3em] uppercase text-jade opacity-80">
              A Lore Shrine
            </span>
            <div
              className="h-px w-12 opacity-60"
              style={{ background: "oklch(var(--jade))" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          style={{
            color: "oklch(var(--foreground))",
            textShadow: "0 0 60px oklch(0.72 0.16 155 / 0.3)",
          }}
        >
          Shakchunni
          <br />
          <span className="text-jade">no Yuri</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl text-muted-foreground max-w-md mb-16 leading-relaxed italic"
        >
          A tale of two souls, bound across the veil
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="section-divider w-48 mb-16"
        />

        {/* Character Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 items-stretch justify-center w-full max-w-3xl"
        >
          <CharacterCard
            ocid="home.yuri.card"
            name="Yuri Shankha"
            label="The Ghost"
            subtitle="Shakchunni of the Moonlit Pond"
            image="/assets/generated/yuri-shankha-portrait.dim_800x1000.jpg"
            accentColor="jade"
            onClick={() => onNavigate("yuri")}
          />
          <CharacterCard
            ocid="home.kamala.card"
            name="Kamala"
            label="The Beloved"
            subtitle="She Who Was Loved Beyond the Veil"
            image="/assets/generated/kamala-portrait.dim_800x1000.jpg"
            accentColor="crimson"
            onClick={() => onNavigate("kamala")}
          />
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 font-body text-sm tracking-wider text-muted-foreground/50 italic"
        >
          ✦ Born from Bengali ghost-lore, yuri, and waifu tradition ✦
        </motion.div>
      </div>

      {/* ─── Thakurmar Jhuli Banner ─────────────────────────────── */}
      <ThakurmarJhuliBanner />

      {/* ─── Haunted Roster ────────────────────────────────────── */}
      <HauntedRoster onNavigate={onNavigate} />

      {/* Footer */}
      <HomeFooter />
    </main>
  );
}

// ──────────────────────────────────────────────────────────────
// Thakurmar Jhuli Banner — Grandmother's Bag Parchment Scroll
// ──────────────────────────────────────────────────────────────
function ThakurmarJhuliBanner() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.16 0.06 60 / 0.25) 0%, oklch(0.10 0.025 270) 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Scroll ornament top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div
            className="h-px flex-1 max-w-24 opacity-50"
            style={{
              background:
                "linear-gradient(to left, oklch(0.82 0.14 85 / 0.6), transparent)",
            }}
          />
          <span
            className="font-display text-2xl"
            style={{ color: "oklch(var(--gold))" }}
          >
            ✦
          </span>
          <div
            className="h-px flex-1 max-w-24 opacity-50"
            style={{
              background:
                "linear-gradient(to right, oklch(0.82 0.14 85 / 0.6), transparent)",
            }}
          />
        </motion.div>

        {/* Parchment-style card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.06 60 / 0.45) 0%, oklch(0.13 0.04 270 / 0.9) 40%, oklch(0.14 0.05 60 / 0.3) 100%)",
            border: "1px solid oklch(0.82 0.14 85 / 0.25)",
            boxShadow:
              "0 0 0 1px oklch(0.82 0.14 85 / 0.1), 0 8px 40px oklch(0 0 0 / 0.4), inset 0 1px 0 oklch(0.82 0.14 85 / 0.15)",
          }}
        >
          {/* Gold shimmer top line */}
          <div
            className="absolute top-0 left-0 right-0 h-px animate-shimmer"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.82 0.14 85 / 0.7), transparent)",
            }}
          />

          {/* Corner ornaments */}
          <div
            className="absolute top-4 left-4 text-2xl opacity-40 select-none pointer-events-none"
            style={{ color: "oklch(var(--gold))" }}
            aria-hidden="true"
          >
            ❋
          </div>
          <div
            className="absolute top-4 right-4 text-2xl opacity-40 select-none pointer-events-none"
            style={{ color: "oklch(var(--gold))" }}
            aria-hidden="true"
          >
            ❋
          </div>
          <div
            className="absolute bottom-4 left-4 text-2xl opacity-40 select-none pointer-events-none"
            style={{ color: "oklch(var(--gold))" }}
            aria-hidden="true"
          >
            ❋
          </div>
          <div
            className="absolute bottom-4 right-4 text-2xl opacity-40 select-none pointer-events-none"
            style={{ color: "oklch(var(--gold))" }}
            aria-hidden="true"
          >
            ❋
          </div>

          <div className="px-10 py-12 text-center">
            {/* Bengali title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p
                className="font-display text-4xl sm:text-5xl mb-2"
                style={{
                  color: "oklch(var(--gold))",
                  textShadow: "0 0 40px oklch(0.82 0.14 85 / 0.3)",
                }}
              >
                ঠাকুরমার ঝুলি
              </p>
              <p
                className="font-body text-sm tracking-[0.3em] uppercase mb-6"
                style={{ color: "oklch(0.82 0.14 85 / 0.6)" }}
              >
                Grandmother's Bag of Tales
              </p>
            </motion.div>

            {/* Decorative rule */}
            <div
              className="h-px w-32 mx-auto mb-8 opacity-50"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
              }}
            />

            {/* Main text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground/90 max-w-2xl mx-auto italic"
            >
              From the shadows of Bengal's oldest stories, collected in 1907 by{" "}
              <span style={{ color: "oklch(var(--gold))" }}>
                Dakshinaranjan Mitra Majumder
              </span>
              . These are the creatures your grandmother warned you about.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground/75 max-w-2xl mx-auto italic mt-4"
            >
              These are the ones who loved too fiercely to stay dead.
            </motion.p>

            {/* Bottom rule */}
            <div
              className="h-px w-32 mx-auto mt-8 opacity-50"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
              }}
            />

            {/* Year badge */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div
                className="h-px w-8 opacity-30"
                style={{ background: "oklch(var(--gold))" }}
              />
              <span
                className="font-body text-xs tracking-[0.3em] uppercase"
                style={{ color: "oklch(0.82 0.14 85 / 0.5)" }}
              >
                Bengal · 1907 · Folk Tales
              </span>
              <div
                className="h-px w-8 opacity-30"
                style={{ background: "oklch(var(--gold))" }}
              />
            </div>
          </div>

          {/* Gold shimmer bottom line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px animate-shimmer"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.82 0.14 85 / 0.5), transparent)",
              animationDelay: "1.5s",
            }}
          />
        </motion.div>

        {/* Scroll ornament bottom */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div
            className="h-px flex-1 max-w-24 opacity-50"
            style={{
              background:
                "linear-gradient(to left, oklch(0.82 0.14 85 / 0.6), transparent)",
            }}
          />
          <span
            className="font-display text-2xl"
            style={{ color: "oklch(var(--gold))" }}
          >
            ✦
          </span>
          <div
            className="h-px flex-1 max-w-24 opacity-50"
            style={{
              background:
                "linear-gradient(to right, oklch(0.82 0.14 85 / 0.6), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Haunted Roster — spirits grid
// ──────────────────────────────────────────────────────────────
function HauntedRoster({
  onNavigate,
}: {
  onNavigate: (page: Page) => void;
}) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p
          className="font-body text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "oklch(var(--gold))" }}
        >
          ✦ The Haunted Roster ✦
        </p>
        <h2
          className="font-display text-4xl sm:text-5xl mb-4"
          style={{ color: "oklch(var(--foreground))" }}
        >
          Spirits of{" "}
          <span style={{ color: "oklch(var(--gold))" }}>Thakurmar Jhuli</span>
        </h2>
        <p className="font-serif text-lg text-muted-foreground italic max-w-xl mx-auto">
          Each of them is from the oldest stories. Each of them loved in ways
          the world never made room for.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {SPIRIT_ROSTER.map((spirit, i) => (
          <SpiritRosterCard
            key={spirit.page}
            spirit={spirit}
            index={i}
            onClick={() => onNavigate(spirit.page)}
          />
        ))}
      </div>

      {/* Hint footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center mt-12 font-serif text-sm italic text-muted-foreground/40"
      >
        ✦ More spirits stir in the dark — their stories not yet told ✦
      </motion.div>
    </section>
  );
}

function SpiritRosterCard({
  spirit,
  index,
  onClick,
}: {
  spirit: (typeof SPIRIT_ROSTER)[number];
  index: number;
  onClick: () => void;
}) {
  const accent = `oklch(${spirit.accent})`;
  const accentFaint = `oklch(${spirit.accent} / 0.2)`;
  const accentGlow = `oklch(${spirit.accent} / 0.12)`;

  return (
    <motion.button
      data-ocid={`roster.${spirit.page}.card`}
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      className="group relative rounded-2xl overflow-hidden text-left cursor-pointer transition-all duration-300"
      style={{
        background: "oklch(0.12 0.035 270)",
        boxShadow: `0 0 0 1px ${accentFaint}, 0 4px 20px ${accentGlow}`,
      }}
    >
      {/* Portrait */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={spirit.portrait}
          alt={spirit.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ height: "220px", objectFit: "cover" }}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, oklch(0.12 0.035 270) 100%)",
          }}
        />
        {/* Type badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs tracking-widest uppercase font-body"
          style={{
            background: `oklch(${spirit.accent} / 0.15)`,
            border: `1px solid ${accent}`,
            color: accent,
            backdropFilter: "blur(8px)",
            fontSize: "0.6rem",
          }}
        >
          {spirit.typeLabel}
        </div>
      </div>

      {/* Info */}
      <div className="px-4 pb-4 pt-2">
        <h3
          className="font-display text-xl mb-0.5 transition-colors duration-200"
          style={{ color: accent }}
        >
          {spirit.name}
        </h3>
        <p className="font-body text-sm opacity-60" style={{ color: accent }}>
          {spirit.bengali}
        </p>

        <div className="mt-3 flex items-center gap-1.5">
          <span
            className="font-body text-xs tracking-wider opacity-60"
            style={{ color: accent }}
          >
            Read her story
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              delay: index * 0.3,
            }}
            style={{ color: accent, opacity: 0.6, fontSize: "0.75rem" }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Bottom accent glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />
    </motion.button>
  );
}

interface CharacterCardProps {
  ocid: string;
  name: string;
  label: string;
  subtitle: string;
  image: string;
  accentColor: "jade" | "crimson";
  onClick: () => void;
}

function CharacterCard({
  ocid,
  name,
  label,
  subtitle,
  image,
  accentColor,
  onClick,
}: CharacterCardProps) {
  const accent =
    accentColor === "jade" ? "oklch(var(--jade))" : "oklch(var(--crimson))";
  const glowClass =
    accentColor === "jade" ? "card-glow-jade" : "card-glow-crimson";

  return (
    <motion.button
      data-ocid={ocid}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative flex-1 rounded-2xl overflow-hidden text-left cursor-pointer ${glowClass} transition-all duration-300`}
      style={{
        background: "oklch(0.13 0.035 270)",
        minHeight: "420px",
      }}
    >
      {/* Portrait */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(0.13 0.035 270) 100%)",
          }}
        />
        {/* Label badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-body"
          style={{
            background:
              accentColor === "jade"
                ? "oklch(0.72 0.16 155 / 0.2)"
                : "oklch(0.60 0.22 25 / 0.2)",
            border: `1px solid ${accent}`,
            color: accent,
            backdropFilter: "blur(8px)",
          }}
        >
          {label}
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-2">
        <h2
          className="font-display text-2xl mb-1 transition-colors duration-200"
          style={{ color: accent }}
        >
          {name}
        </h2>
        <p className="font-body text-sm text-muted-foreground italic">
          {subtitle}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span
            className="font-body text-sm tracking-wider"
            style={{ color: accent, opacity: 0.7 }}
          >
            Read her story
          </span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            style={{ color: accent }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />
    </motion.button>
  );
}

function HomeFooter() {
  const year = new Date().getFullYear();
  const link = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="py-10 px-6 text-center border-t border-border/30 mt-8">
      <p className="font-body text-sm text-muted-foreground/60">
        © {year}. Built with{" "}
        <span className="text-crimson" aria-label="love">
          ♥
        </span>{" "}
        using{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/80 transition-colors"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
