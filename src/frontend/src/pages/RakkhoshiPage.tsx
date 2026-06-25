import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const RAKKHOSHI_DATA: CharacterData = {
  name: "Rakkhoshi",
  bengaliName: "রাক্ষসী",
  typeLabel: "Rakkhoshi · Demon Queen",
  tagline:
    "She has eaten a hundred heroes who came to slay her. None of them ever thought to simply ask: what are you protecting?",
  portraitSrc: "/assets/generated/rakkhoshi-portrait.dim_512x768.jpg",
  accentOklch: "0.62 0.25 20",
  accentHue: 20,
  heroGradient:
    "radial-gradient(ellipse at 40% 0%, oklch(0.22 0.12 20 / 0.8) 0%, oklch(0.10 0.025 270) 55%), radial-gradient(ellipse at 75% 75%, oklch(0.20 0.10 155 / 0.3) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "Born from Brahma's Breath",
  loreParagraphs: [
    "HAU MAU KHAU — I smell the scent of humans! Every child in Bengal grows up knowing this cry. The Rakkhosh comes in Thakurmar Jhuli's stories like a force of nature: enormous, hungry, terrifying, shapeshifting. And always, always, the heroes defeat them with cleverness. But your grandmother — the real grandmother, the one who sat up late after the fire went low — she would tell you: nobody ever asked what the Rakkhoshi wanted.",
    "Created from Brahma's own exhaled breath in a moment of cosmic exhaustion — breathed out with the word raksha, meaning 'protect' — the Rakshasa were meant to be guardians. But they were guardians with enormous hunger, and the gods who made them could not abide the chaos they brought. Vishnu banished them. They took their anger into the deep forests of Bengal.",
    "Rakkhoshi is the queen of her kind, and she has ruled her forest domain since before any of your ancestors built their first village at the forest's edge. When the brave mortal princess walked into her forest — not with a sword, not with a clever trick, but with the audacity to sit down across from the Rakkhoshi and say 'Tell me what you are protecting' — the demon queen did the one thing she had never done in centuries of rule: she answered.",
  ],
  traits: [
    "Skin of deep forest-green and crimson undertones, otherworldly beautiful",
    "Wild dark hair adorned with bones and jungle flowers",
    "Fangs visible when she speaks, claws like carved horn",
    "Eyes that glow amber-gold in darkness, crimson when she hunts",
    "Towering height — she stoops to enter mortal doorways",
    "Wears ornate demon-royal gold over torn battle cloth",
  ],
  profile: {
    nameInBengali: "রাক্ষসী",
    type: "Rakkhoshi (Demoness · Forest Queen)",
    alignment: "Chaotic Neutral",
    likes:
      "The deep forest, being feared and respected equally, ancient mangoes, the sound of tigers, someone brave enough to sit across from her",
    dislikes:
      "Heroes with clever tricks, the smell of turmeric on weapons, being underestimated, pity",
    abilities:
      "Shapeshifting, immense strength, flight, war-cry that stuns, forest communion",
    weakness:
      "A mortal woman who asks her a question no one has ever asked before",
    romanticArchetype:
      "The Monster Who Chose to Stop — yuri adversarial romance, the one who finally made her lower her guard",
  },
  quoteLabel: "The Forest Speaks",
  quoteSectionTitle: "What the Rakkhoshi Declared",
  quotes: [
    "HAU MAU KHAU — but you do not smell of fear. You smell of questions. That is far more dangerous.",
    "Every hero who came here thought my forest was a maze to navigate. She looked at it like a home someone built with love.",
    "I have broken the swords of a hundred princes. I have never known what to do with patience.",
    "She did not run when I showed her my true face. She tilted her head and said: 'Oh. You are lonely.' That was the worst thing anyone has ever done to me.",
    "I protect this forest because I was told to protect what I was given. She asked what I would protect if I chose. I said: you. She laughed. I meant it.",
  ],
};

export function RakkhoshiPage() {
  return <CharacterPage data={RAKKHOSHI_DATA} />;
}
