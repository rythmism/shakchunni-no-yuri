import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const JOKKHO_DATA: CharacterData = {
  name: "Jokkho",
  bengaliName: "যক্ষ",
  typeLabel: "Jokkho · Treasure Guardian",
  tagline:
    "Jokkher Dhon — the treasure of a Jokkho. Not gold. Not jewels. The thing you love most in the world, guarded past all reason, past all death",
  portraitSrc: "/assets/generated/jokkho-portrait.dim_512x768.jpg",
  accentOklch: "0.82 0.20 75",
  accentHue: 75,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.12 75 / 0.7) 0%, oklch(0.10 0.025 270) 55%), radial-gradient(ellipse at 80% 80%, oklch(0.20 0.10 75 / 0.4) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "The Keeper of What Cannot Be Lost",
  loreParagraphs: [
    "Jokkher Dhon — the phrase is so common in Bengali that children use it without knowing its weight. The treasure of a Jokkho. In the old stories, the Yaksha are warrior-like guardian beings who protect buried wealth: gold, jewels, the coins of a hundred generations. They are benevolent when treated with respect. They bestow fertility and fortune on those they favor. But they do not guard treasure because they are told to.",
    "Jokkho guards what she cannot bear to see lost. In the earliest form of the legend, she was a warrior spirit bound to her duty by divine fiat. In the Thakurmar Jhuli retelling — the grandmother's version, told late at night when the fire was low — she chose her treasure. She chose a garden. She chose the garden of a woman she loved, and when that woman died, she remained at its gate.",
    "The garden grows strangely now. It has been growing for a hundred years without a gardener. The jasmine blooms in winter. The pond never runs dry. And at the gate, a figure stands at dusk — not threatening, not inviting, simply standing the way a guardian stands when the treasure is not gold but the memory of someone's hands in soil.",
  ],
  traits: [
    "Warm golden glowing skin that brightens near things she guards",
    "Ancient warrior's bearing, light armor of gold over old cloth",
    "Eyes like the inside of a lantern — warm, steady, watchful",
    "Ornate gold jewelry that catches light in no source",
    "Hair pinned with small jasmine flowers that never wilt",
    "Carries no weapon — her presence itself is the ward",
  ],
  profile: {
    nameInBengali: "যক্ষ",
    type: "Jokkho / Yaksha (Guardian · Treasure Spirit)",
    alignment: "Lawful Devoted",
    likes:
      "Jasmine in bloom, the sound of water in a well-kept garden, those who ask permission before entering, kept promises",
    dislikes:
      "Those who covet what is not theirs, neglect of sacred places, the word 'abandoned'",
    abilities:
      "Bestowing fortune, warding sacred spaces, fertility of land and life, sensing those with pure intent",
    weakness:
      "Someone who comes to the garden not to claim it but simply to tend it, unbidden",
    romanticArchetype:
      "The Devoted Guardian — yuri slow-burn devotion, a hundred years of waiting for someone who treats her treasure as a living thing",
  },
  quoteLabel: "From the Garden Gate",
  quoteSectionTitle: "What the Jokkho Guards",
  quotes: [
    "Jokkher Dhon. They say it meaning great wealth. They do not know what I guard. They do not know it is one woman's garden and the memory of her laugh in jasmine season.",
    "She came in autumn and asked if she could tend the jasmine. No one has asked permission in fifty years. I did not know how to speak for a moment.",
    "I am a warrior. I have guarded against armies. I did not know how to guard against someone who asked nothing from me but to let her water things.",
    "The garden blooms better now. She does not know that is me. I do not know how to tell her without it sounding like I have been watching her for months. I have been watching her for months.",
    "She asked: what is the treasure here? I looked at her for a long time. Then I said: I am still deciding.",
  ],
};

export function JokkhoPage() {
  return <CharacterPage data={JOKKHO_DATA} />;
}
