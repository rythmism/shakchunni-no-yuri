import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const SPIRIT_PAGES: {
  page: Page;
  label: string;
  bengali: string;
  accent: string;
}[] = [
  { page: "petni", label: "Petni", bengali: "পেত্নী", accent: "0.75 0.18 300" },
  { page: "aleya", label: "Aleya", bengali: "আলেয়া", accent: "0.82 0.18 175" },
  {
    page: "pishacha",
    label: "Pishacha",
    bengali: "পিশাচ",
    accent: "0.58 0.22 10",
  },
  {
    page: "rakkhoshi",
    label: "Rakkhoshi",
    bengali: "রাক্ষসী",
    accent: "0.62 0.25 20",
  },
  {
    page: "doitto",
    label: "Doitto",
    bengali: "দৈত্য",
    accent: "0.78 0.19 60",
  },
  { page: "betal", label: "Betal", bengali: "বেতাল", accent: "0.78 0.08 240" },
  { page: "jokkho", label: "Jokkho", bengali: "যক্ষ", accent: "0.82 0.20 75" },
  {
    page: "shoytan",
    label: "Shoytan",
    bengali: "শয়তান",
    accent: "0.65 0.28 15",
  },
  {
    page: "icchadhari",
    label: "Icchadhari Nag",
    bengali: "ইচ্ছাধারী নাগ",
    accent: "0.70 0.20 155",
  },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [spiritsOpen, setSpiritsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSpiritsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSpiritsActive = SPIRIT_PAGES.some((s) => s.page === currentPage);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.025 270 / 0.97), oklch(0.10 0.025 270 / 0))",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.home.link"
          onClick={() => {
            onNavigate("home");
            setMobileOpen(false);
            setSpiritsOpen(false);
          }}
          className="font-display text-lg tracking-wide transition-colors duration-200 flex-shrink-0"
          style={{
            color:
              currentPage === "home"
                ? "oklch(var(--jade))"
                : "oklch(var(--foreground))",
          }}
        >
          Shakchunni no Yuri
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            ocid="nav.yuri.link"
            label="Yuri Shankha"
            active={currentPage === "yuri"}
            onClick={() => onNavigate("yuri")}
            accentColor="oklch(var(--jade))"
          />
          <NavLink
            ocid="nav.kamala.link"
            label="Kamala"
            active={currentPage === "kamala"}
            onClick={() => onNavigate("kamala")}
            accentColor="oklch(var(--crimson))"
          />

          {/* Spirits Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              data-ocid="nav.spirits.toggle"
              onClick={() => setSpiritsOpen((o) => !o)}
              className="relative font-body text-base tracking-wider transition-colors duration-200 flex items-center gap-1.5 group"
              style={{
                color: isSpiritsActive
                  ? "oklch(0.82 0.14 85)"
                  : spiritsOpen
                    ? "oklch(0.82 0.14 85)"
                    : "oklch(var(--muted-foreground))",
              }}
            >
              Spirits
              <span
                className="text-xs transition-transform duration-200"
                style={{
                  transform: spiritsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                ▾
              </span>
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300"
                style={{
                  background: "oklch(0.82 0.14 85)",
                  transform:
                    isSpiritsActive || spiritsOpen ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>

            <AnimatePresence>
              {spiritsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-3 w-56 rounded-xl overflow-hidden z-50"
                  style={{
                    background: "oklch(0.12 0.035 270 / 0.97)",
                    border: "1px solid oklch(0.82 0.14 85 / 0.2)",
                    boxShadow:
                      "0 8px 32px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(0.82 0.14 85 / 0.1)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Dropdown header */}
                  <div
                    className="px-4 pt-3 pb-2"
                    style={{
                      borderBottom: "1px solid oklch(0.82 0.14 85 / 0.12)",
                    }}
                  >
                    <p
                      className="font-body text-xs tracking-[0.25em] uppercase"
                      style={{ color: "oklch(0.82 0.14 85 / 0.7)" }}
                    >
                      ✦ ঠাকুরমার ঝুলি ✦
                    </p>
                  </div>

                  <div className="py-2">
                    {SPIRIT_PAGES.map((spirit) => (
                      <button
                        key={spirit.page}
                        type="button"
                        data-ocid={`nav.${spirit.page}.link`}
                        onClick={() => {
                          onNavigate(spirit.page);
                          setSpiritsOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 flex items-center justify-between group transition-all duration-150"
                        style={{
                          background:
                            currentPage === spirit.page
                              ? `oklch(${spirit.accent} / 0.1)`
                              : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background = `oklch(${spirit.accent} / 0.1)`;
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background =
                            currentPage === spirit.page
                              ? `oklch(${spirit.accent} / 0.1)`
                              : "transparent";
                        }}
                      >
                        <span
                          className="font-body text-sm"
                          style={{
                            color:
                              currentPage === spirit.page
                                ? `oklch(${spirit.accent})`
                                : "oklch(var(--foreground) / 0.75)",
                          }}
                        >
                          {spirit.label}
                        </span>
                        <span
                          className="font-body text-xs opacity-50"
                          style={{ color: `oklch(${spirit.accent})` }}
                        >
                          {spirit.bengali}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.mobile.toggle"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "oklch(var(--foreground))",
              transform: mobileOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "oklch(var(--foreground))",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "oklch(var(--foreground))",
              transform: mobileOpen
                ? "translateY(-5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 overflow-y-auto max-h-[80vh]"
            style={{
              background: "oklch(0.11 0.03 270 / 0.98)",
              borderBottom: "1px solid oklch(0.82 0.14 85 / 0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-6 py-6 space-y-1">
              {/* Fixed characters */}
              <MobileNavItem
                label="Yuri Shankha"
                bengali="যুরি শঙ্খ"
                active={currentPage === "yuri"}
                accent="oklch(var(--jade))"
                ocid="nav.mobile.yuri.link"
                onClick={() => {
                  onNavigate("yuri");
                  setMobileOpen(false);
                }}
              />
              <MobileNavItem
                label="Kamala"
                bengali="কমলা"
                active={currentPage === "kamala"}
                accent="oklch(var(--crimson))"
                ocid="nav.mobile.kamala.link"
                onClick={() => {
                  onNavigate("kamala");
                  setMobileOpen(false);
                }}
              />

              {/* Divider */}
              <div className="py-3">
                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, oklch(0.82 0.14 85 / 0.3), transparent)",
                  }}
                />
                <p
                  className="font-body text-xs tracking-[0.25em] uppercase text-center mt-3"
                  style={{ color: "oklch(0.82 0.14 85 / 0.6)" }}
                >
                  ✦ ঠাকুরমার ঝুলি ✦
                </p>
              </div>

              {/* Spirit characters */}
              {SPIRIT_PAGES.map((spirit) => (
                <MobileNavItem
                  key={spirit.page}
                  label={spirit.label}
                  bengali={spirit.bengali}
                  active={currentPage === spirit.page}
                  accent={`oklch(${spirit.accent})`}
                  ocid={`nav.mobile.${spirit.page}.link`}
                  onClick={() => {
                    onNavigate(spirit.page);
                    setMobileOpen(false);
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  ocid: string;
  label: string;
  active: boolean;
  onClick: () => void;
  accentColor: string;
}

function NavLink({ ocid, label, active, onClick, accentColor }: NavLinkProps) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      className="relative font-body text-base tracking-wider transition-colors duration-200 group"
      style={{ color: active ? accentColor : "oklch(var(--muted-foreground))" }}
    >
      {label}
      <span
        className="absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300"
        style={{
          background: accentColor,
          transform: active ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      <span
        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background: accentColor,
          opacity: active ? 0 : 0.5,
        }}
      />
    </button>
  );
}

interface MobileNavItemProps {
  label: string;
  bengali: string;
  active: boolean;
  accent: string;
  ocid: string;
  onClick: () => void;
}

function MobileNavItem({
  label,
  bengali,
  active,
  accent,
  ocid,
  onClick,
}: MobileNavItemProps) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150"
      style={{
        background: active
          ? `${accent.replace(")", " / 0.12)")}`
          : "transparent",
        border: active
          ? `1px solid ${accent.replace(")", " / 0.25)")}`
          : "1px solid transparent",
      }}
    >
      <span
        className="font-body text-base"
        style={{ color: active ? accent : "oklch(var(--foreground) / 0.8)" }}
      >
        {label}
      </span>
      <span className="font-body text-sm opacity-60" style={{ color: accent }}>
        {bengali}
      </span>
    </button>
  );
}
