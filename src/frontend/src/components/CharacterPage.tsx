import { motion } from "motion/react";
import { FloatingPetals } from "./FloatingPetals";

export interface CharacterProfile {
  type: string;
  alignment: string;
  likes: string;
  dislikes: string;
  abilities: string;
  weakness: string;
  romanticArchetype: string;
  nameInBengali: string;
}

export interface CharacterData {
  // Identity
  name: string;
  bengaliName: string;
  typeLabel: string;
  tagline: string;
  portraitSrc: string;
  // Accent color
  accentOklch: string; // e.g. "0.75 0.18 300"
  accentHue: number; // for FloatingPetals
  // Hero gradient
  heroGradient: string;
  // Lore
  loreTitle: string;
  loreParagraphs: string[];
  // Appearance traits
  traits: string[];
  // Profile
  profile: CharacterProfile;
  // Quotes
  quotes: string[];
  // Quote flavor name
  quoteLabel: string;
  quoteSectionTitle: string;
}

interface CharacterPageProps {
  data: CharacterData;
  onBack?: () => void;
}

export function CharacterPage({ data }: CharacterPageProps) {
  const accent = `oklch(${data.accentOklch})`;
  const accentFaint = `oklch(${data.accentOklch} / 0.25)`;
  const accentMed = `oklch(${data.accentOklch} / 0.5)`;
  const accentGlow = `oklch(${data.accentOklch} / 0.15)`;

  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <section
        className="relative min-h-screen overflow-hidden flex items-end pb-24"
        style={{ background: data.heroGradient }}
      >
        <FloatingPetals count={12} accentHue={data.accentHue} />
        <div className="absolute inset-0 noise-texture opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-end gap-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 w-64 md:w-80"
          >
            <div
              className="rounded-2xl overflow-hidden animate-float-slow"
              style={{
                aspectRatio: "2/3",
                minHeight: "380px",
                boxShadow: `0 0 0 1px ${accentFaint}, 0 4px 32px ${accentGlow}, 0 0 80px ${accentGlow}`,
              }}
            >
              <img
                src={data.portraitSrc}
                alt={data.name}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "380px", display: "block" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Title text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px w-8 opacity-60"
                style={{ background: accent }}
              />
              <span
                className="font-body text-xs tracking-[0.25em] uppercase"
                style={{ color: accent }}
              >
                {data.typeLabel}
              </span>
            </div>
            <h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl mb-4 leading-tight"
              style={{
                color: "oklch(var(--foreground))",
                textShadow: `0 0 80px oklch(${data.accentOklch} / 0.4)`,
              }}
            >
              {data.name.split(" ").length > 1 ? (
                <>
                  {data.name.split(" ")[0]}
                  <br />
                  <span style={{ color: accent }}>
                    {data.name.split(" ").slice(1).join(" ")}
                  </span>
                </>
              ) : (
                <span style={{ color: accent }}>{data.name}</span>
              )}
            </h1>
            <p
              className="font-body text-lg tracking-wider mb-2 opacity-70"
              style={{ color: accent }}
            >
              {data.bengaliName}
            </p>
            <p className="font-serif text-xl text-muted-foreground italic max-w-sm">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thakurmar Jhuli Attribution Banner */}
      <div
        className="py-3 px-6 text-center"
        style={{
          background: `linear-gradient(to right, transparent, oklch(${data.accentOklch} / 0.08), transparent)`,
          borderTop: `1px solid oklch(${data.accentOklch} / 0.2)`,
          borderBottom: `1px solid oklch(${data.accentOklch} / 0.2)`,
        }}
      >
        <p
          className="font-body text-xs tracking-[0.3em] uppercase opacity-60"
          style={{ color: accent }}
        >
          ✦ From the pages of Thakurmar Jhuli · 1907 · Dakshinaranjan Mitra
          Majumder ✦
        </p>
      </div>

      {/* Origin Lore */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="Origins"
            title={data.loreTitle}
            accent={accent}
          />
          <div className="space-y-5 mt-6">
            {data.loreParagraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="font-body text-xl leading-relaxed text-foreground/85"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <DividerLine accent={accent} />

      {/* Appearance */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader label="Appearance" title="Her Form" accent={accent} />
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-start">
          {/* Portrait thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full md:w-64 rounded-xl overflow-hidden"
            style={{
              minHeight: "360px",
              boxShadow: `0 0 0 1px ${accentFaint}, 0 4px 24px ${accentGlow}`,
            }}
          >
            <img
              src={data.portraitSrc}
              alt={data.name}
              className="w-full object-cover block"
              style={{ minHeight: "360px", objectFit: "cover" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 flex-1"
          >
            {data.traits.map((trait, i) => (
              <motion.li
                key={trait}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 font-body text-lg"
              >
                <span
                  className="text-xl"
                  aria-hidden="true"
                  style={{ color: accent }}
                >
                  ◈
                </span>
                <span className="text-foreground/90">{trait}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <DividerLine accent={accent} />

      {/* Character Profile */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label="Character Profile"
          title="Who She Is"
          accent={accent}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{
            background: "oklch(0.13 0.035 270 / 0.9)",
            border: `1px solid ${accentFaint}`,
            boxShadow: `0 0 0 1px ${accentFaint}, 0 4px 24px ${accentGlow}`,
          }}
        >
          <ProfileRow
            label="Bengali Name"
            value={data.profile.nameInBengali}
            accent={accent}
          />
          <ProfileRow label="Type" value={data.profile.type} accent={accent} />
          <ProfileRow
            label="Alignment"
            value={data.profile.alignment}
            accent={accent}
          />
          <ProfileRow
            label="Abilities"
            value={data.profile.abilities}
            accent={accent}
          />
          <ProfileRow
            label="Likes"
            value={data.profile.likes}
            accent={accent}
          />
          <ProfileRow
            label="Dislikes"
            value={data.profile.dislikes}
            accent={accent}
          />
          <ProfileRow
            label="Weakness"
            value={data.profile.weakness}
            accent={accent}
          />
          <ProfileRow
            label="Romantic Archetype"
            value={data.profile.romanticArchetype}
            accent={accent}
            fullWidth
          />
        </motion.div>
      </section>

      <DividerLine accent={accent} />

      {/* Quotes */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <SectionHeader
          label={data.quoteLabel}
          title={data.quoteSectionTitle}
          accent={accent}
        />
        <div className="mt-8 space-y-5">
          {data.quotes.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-r-xl"
              style={{
                padding: "1.5rem 2rem",
                background: "oklch(0.13 0.035 270 / 0.8)",
                borderLeft: `2px solid ${accentMed}`,
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Decorative quotation mark */}
              <span
                className="absolute top-0 left-4 font-display text-6xl leading-none opacity-20 select-none pointer-events-none"
                style={{ color: accent }}
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic">
                {quote}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <DividerLine accent={accent} />

      {/* Footer */}
      <CharacterFooter />
    </main>
  );
}

function SectionHeader({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p
        className="font-body text-xs tracking-[0.25em] uppercase mb-2"
        style={{ color: accent }}
      >
        {label}
      </p>
      <h2
        className="font-display text-4xl"
        style={{ color: "oklch(var(--foreground))" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function ProfileRow({
  label,
  value,
  accent,
  fullWidth = false,
}: {
  label: string;
  value: string;
  accent: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <p
        className="font-body text-xs tracking-[0.2em] uppercase mb-1"
        style={{ color: accent }}
      >
        {label}
      </p>
      <p className="font-body text-base text-foreground/85">{value}</p>
    </div>
  );
}

function DividerLine({ accent }: { accent: string }) {
  return (
    <div
      className="max-w-4xl mx-auto my-12 h-px"
      style={{
        background: `linear-gradient(to right, transparent, ${accent.replace(")", " / 0.4)")}, transparent)`,
      }}
    />
  );
}

function CharacterFooter() {
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
