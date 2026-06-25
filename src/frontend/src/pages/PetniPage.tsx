import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const PETNI_DATA: CharacterData = {
  name: "Petni",
  bengaliName: "পেত্নী",
  typeLabel: "Petni · Spirit of Grief",
  tagline:
    "She who died before her love was spoken, now wandering the banyan roots, calling a name the world never let her say",
  portraitSrc: "/assets/generated/petni-portrait.dim_512x768.jpg",
  accentOklch: "0.75 0.18 300",
  accentHue: 300,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.08 300 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 80% 80%, oklch(0.18 0.08 300 / 0.35) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "Born of an Unfinished Breath",
  loreParagraphs: [
    "In the bamboo-groves of old Bengal, your grandmother's grandmother whispered of the Petni — the spirit of a woman who died before her time, her breath still warm with words she never finished saying. In the old traditions, such a woman could not pass peacefully into the next world. She returns to the banyan tree, that ancient sentry of the village, and inhabits its roots and hanging air-tentacles, waiting.",
    "Petni is the near-kin of Shakchunni, but where Shakchunni may have had a husband to mourn, Petni mourns something the world never even named. She died in grief — perhaps in childbirth, perhaps by a broken heart — and her backwards feet leave prints in the riverbank mud pointing the wrong direction, toward where she came from, never away.",
    "She is a shapeshifter of profound sadness. She may appear as breathtaking beauty to lure those she wishes to reach, or as a terror to warn away those who would desecrate her sacred tree. The wisest village women knew the difference: Petni does not want to consume — she wants to be held. She seeks a living woman willing to share the banyan's shade, willing to hear out her unfinished story.",
  ],
  traits: [
    "Pale orchid-violet skin with a faint luminescent shimmer",
    "Backwards feet — always visible beneath her saree hem",
    "Tattered white silk saree that moves without wind",
    "Long dark hair tangled with banyan roots and fireflies",
    "Eyes that change from hollow black to warm violet when she trusts you",
    "Scent of night-blooming jasmine and damp earth",
  ],
  profile: {
    nameInBengali: "পেত্নী",
    type: "Petni (Ghost · Banyan Spirit)",
    alignment: "Chaotic Melancholic",
    likes:
      "The warm hands of a living woman, fireflies in still air, old lullabies, the smell of rain on dry earth, being listened to",
    dislikes:
      "Iron nails in trees, sunrise, those who laugh at grief, the word 'impossible'",
    abilities:
      "Shapeshifting, dream-weaving, calling voices through wind, inhabiting banyan trees",
    weakness:
      "A woman who sits beneath her tree without fear and simply asks: 'What did you need to say?'",
    romanticArchetype:
      "The One Who Returns — yuri slow-burn, ghost yearning for the warmth she lost",
  },
  quoteLabel: "From the Banyan's Shadow",
  quoteSectionTitle: "Her Unfinished Words",
  quotes: [
    "My feet face the old way because I never found a reason to walk forward.",
    "I did not haunt this tree for pity. I haunt it because this is where we used to meet.",
    "The village called me a warning. I was only ever a longing.",
    "If you sit still enough beneath these roots, you will hear me humming. I have been humming the same three notes for forty years.",
    "Come. I will show you the part of the river they never put on any map.",
  ],
};

export function PetniPage() {
  return <CharacterPage data={PETNI_DATA} />;
}
