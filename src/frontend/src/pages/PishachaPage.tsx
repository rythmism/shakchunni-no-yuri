import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const PISHACHA_DATA: CharacterData = {
  name: "Pishacha",
  bengaliName: "পিশাচ",
  typeLabel: "Pishacha · Cremation-Ground Demon",
  tagline:
    "He does not possess you to destroy you. He possesses you because sharing a body is the closest thing to not being alone that a demon has ever known",
  portraitSrc: "/assets/generated/pishacha-portrait.dim_512x768.jpg",
  accentOklch: "0.58 0.22 10",
  accentHue: 10,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.10 10 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 70% 80%, oklch(0.18 0.08 10 / 0.35) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "Flesh and Ash and Longing",
  loreParagraphs: [
    "Child, do not walk near the shmashaan — the cremation ground — after dark. The Pishacha dwells there, in the spaces between the living and the dead, feeding on the grief and the flesh that remains. He is invisible until he chooses to be seen. He can wear any face. He will wear yours, if he likes you.",
    "Pishacha is among the most feared of the supernatural beings — older than Rakshasa, born from impurity and shadow. He haunts cremation grounds and possesses the bodies of the living, sending them to madness. Every scripture warns against him. But scriptures were written by people who never asked Pishacha what he wanted.",
    "There is a story not in any scripture: a young man of fearless nature who walked into the shmashaan not to pray but to sit with his grief — and found Pishacha watching him, curious and cautious as a wild creature that has never been approached with patience. The possession that followed was not a violation but an agreement: share this body. Share this world. I want to know what warmth feels like from the inside.",
  ],
  traits: [
    "Ashen crimson-toned skin, half-transparent at the edges",
    "Glowing dark red eyes that burn hotter when he is moved",
    "Draped in funeral shroud cloth that never settles still",
    "Hands that flicker between solid and smoke",
    "Voice like embers — low, warm, devastating",
    "Smells of sandalwood smoke and ash",
  ],
  profile: {
    nameInBengali: "পিশাচ",
    type: "Pishacha (Demon · Cremation-Ground Spirit) — Yaoi (M/M)",
    alignment: "Chaotic Dark",
    likes:
      "The quiet of cremation grounds after midnight, being asked questions, the warmth of a living body, grief shared without shame",
    dislikes:
      "Loud prayers meant to drive him away, being called a monster, the smell of turmeric",
    abilities:
      "Invisibility, possession, shapeshifting, madness induction, communication with the recently dead",
    weakness: "A man who invites him in rather than driving him out",
    romanticArchetype:
      "The Uninvited Presence — yaoi body-sharing romance, slow-burn dark symbiosis",
  },
  quoteLabel: "Voices from Ash",
  quoteSectionTitle: "What the Dead Taught Him",
  quotes: [
    "I have worn ten thousand faces. His is the only one I keep coming back to.",
    "They call it possession. He calls it company. We have agreed to disagree on the terminology.",
    "I have walked cremation grounds since before your great-grandmother's great-grandmother was born. He is the first living thing that looked at me and asked to share a meal.",
    "I do not feed on flesh. I never did. I feed on the feeling of being known. He knows me now. I am glutted.",
    "You think a demon cannot love? You think love requires a clean soul? Then you have not understood love at all.",
  ],
};

export function PishachaPage() {
  return <CharacterPage data={PISHACHA_DATA} />;
}
