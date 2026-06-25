import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AleyaPage } from "./pages/AleyaPage";
import { BetalPage } from "./pages/BetalPage";
import { DoittoPage } from "./pages/DoittoPage";
import { HomePage } from "./pages/HomePage";
import { IcchadhariPage } from "./pages/IcchadhariPage";
import { JokkhoPage } from "./pages/JokkhoPage";
import { KamalaPage } from "./pages/KamalaPage";
import { PetniPage } from "./pages/PetniPage";
import { PishachaPage } from "./pages/PishachaPage";
import { RakkhoshiPage } from "./pages/RakkhoshiPage";
import { ShoytanPage } from "./pages/ShoytanPage";
import { YuriPage } from "./pages/YuriPage";

export type Page =
  | "home"
  | "yuri"
  | "kamala"
  | "petni"
  | "aleya"
  | "pishacha"
  | "rakkhoshi"
  | "doitto"
  | "betal"
  | "jokkho"
  | "shoytan"
  | "icchadhari";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {page === "home" && <HomePage onNavigate={handleNavigate} />}
          {page === "yuri" && <YuriPage />}
          {page === "kamala" && <KamalaPage />}
          {page === "petni" && <PetniPage />}
          {page === "aleya" && <AleyaPage />}
          {page === "pishacha" && <PishachaPage />}
          {page === "rakkhoshi" && <RakkhoshiPage />}
          {page === "doitto" && <DoittoPage />}
          {page === "betal" && <BetalPage />}
          {page === "jokkho" && <JokkhoPage />}
          {page === "shoytan" && <ShoytanPage />}
          {page === "icchadhari" && <IcchadhariPage />}
        </motion.div>
      </AnimatePresence>

      <Toaster />
    </div>
  );
}
