import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const ICCHADHARI_DATA: CharacterData = {
  name: "Icchadhari Nag",
  bengaliName: "ইচ্ছাধারী নাগ",
  typeLabel: "Icchadhari Nag · Shape-Shifting Serpent",
  tagline:
    "She has watched this family for six generations. She has watched daughters become mothers become grandmothers become names carved in stone. She has loved them all. She has not revealed herself to any of them. Until now",
  portraitSrc: "/assets/generated/icchadhari-portrait.dim_512x768.jpg",
  accentOklch: "0.70 0.20 155",
  accentHue: 155,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.10 155 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 80% 80%, oklch(0.18 0.08 155 / 0.4) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "A Hundred Years in the Same Garden",
  loreParagraphs: [
    "The Icchadhari Nag — the shape-shifting cobra — is among the most ancient of Bengal's supernatural beings. Possessed of a Naagmani, the magical gem held in the forehead, they can transform between human and serpent at will, their true nature detectable only by the gem's faint glow through their skin. They are ancient beyond reckoning, and they do not love lightly. When an Icchadhari Nag loves, she loves for generations.",
    "The story your grandmother knows begins long before your grandmother was born. A family came to live at the edge of a forest that bordered a sacred serpent grove. They did not know they had chosen land protected by a Nag who had been there for centuries, watching. But the Nag watched them — the woman who planted the kitchen garden, the woman's daughter who watered it, the granddaughter who added the rose beds — and found in the lineage something she had no name for. So she stayed.",
    "Six generations. The family's eldest daughters have always had an uncanny green thumb. The snakes in the garden have always been gentle, as though charmed. The old women of the village have always said: this family is beloved of a Nag. Now the youngest daughter — the one who reads books about serpent lore, the one who has started leaving a small dish of milk by the garden gate at dusk — has finally asked, out loud, to no one in particular: 'If you're there, you can come in.' The Naagmani glows.",
  ],
  traits: [
    "Serpentine jade-green scales visible at the edges of her human form",
    "A Naagmani gem glowing faintly on her forehead",
    "Eyes with pupils that shift between round and vertical depending on how moved she is",
    "Ancient forest jewelry with coiled serpent motifs",
    "Hair that moves like tall grass in wind even in still air",
    "Warmth that comes and goes — she runs hot and cold like a creature still learning temperature",
  ],
  profile: {
    nameInBengali: "ইচ্ছাধারী নাগ",
    type: "Icchadhari Nag (Shape-Shifting Cobra · Forest Guardian)",
    alignment: "Neutral Ancient",
    likes:
      "The youngest daughter's garden, the dish of milk left at dusk, old banyan trees, monsoon evenings, being finally asked",
    dislikes:
      "Those who harm sacred serpents, careless guests in the grove, being patient after six generations of practice",
    abilities:
      "Shapeshifting between cobra and human, Naagmani gem use, forest guardianship, seeing centuries of a family's true nature",
    weakness:
      "An invitation extended without expectation — someone who leaves the dish of milk and genuinely does not mind if no one comes",
    romanticArchetype:
      "The Ancient Who Finally Chose — yuri devotion across generations, the guardian who reveals herself to the first one who truly asked",
  },
  quoteLabel: "From the Serpent Grove",
  quoteSectionTitle: "What the Nag Remembered",
  quotes: [
    "I have watched six women tend this garden. I have never interfered. She is the first one to tend it and then look up at the trees and say: I know you are there, and I think you are welcome.",
    "My Naagmani glows when she is near. This is unprecedented. In four hundred years, it has never glowed for a human.",
    "She asked: how long have you been in this garden? I said: since before your great-great-great-grandmother planted the first curry leaf. She was quiet for a moment. Then she said: you must have been lonely. I have been processing that observation for three days.",
    "The milk she leaves is too sweet. I drank it anyway. I would drink anything she left.",
    "She says: you can stay as a snake if you prefer. I can talk to snakes. She has been talking to snakes for years, it turns out. She talks to snakes the way most people talk to cats. I think I have been waiting for her specifically.",
  ],
};

export function IcchadhariPage() {
  return <CharacterPage data={ICCHADHARI_DATA} />;
}
