import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const DOITTO_DATA: CharacterData = {
  name: "Doitto",
  bengaliName: "দৈত্য",
  typeLabel: "Doitto · Primordial Giantess",
  tagline:
    "In her cupped hands, you could sleep through a whole monsoon, warm and dry, while she watches over you with eyes like ancient amber wells",
  portraitSrc: "/assets/generated/doitto-portrait.dim_512x768.jpg",
  accentOklch: "0.78 0.19 60",
  accentHue: 60,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.10 60 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 80% 80%, oklch(0.20 0.08 60 / 0.4) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "From Before the World Was Small",
  loreParagraphs: [
    "Before your grandmother's grandmother's grandmother was born, before the rivers found their final courses through Bengal's great flat plain, there were beings of extraordinary size who walked the land and felt its roots beneath their feet. The Daitya were not monsters — they were the old ones, the primordial ones, created in the first exhalation of the universe. They simply had not learned to be small.",
    "Doitto has watched Bengal change for centuries. She has watched forests grow and fall. She has watched rivers reroute themselves and villages appear like mushrooms after rain. From her height, humans look like fireflies — brief, bright, beautiful, terrifyingly fragile. She has learned not to touch them. She has learned to be careful with her size the way a new mother is careful with her enormous love.",
    "But there was a tiny mortal woman — a wandering scholar of old stories — who climbed the hill that was not a hill and knocked on what she thought was a boulder. And Doitto, who had not spoken to a human in forty years, looked down and found herself spoken to with such complete unselfconsciousness, such total lack of awe, that she felt something she had not felt since the old gods walked: seen. Not feared. Not marveled at. Simply seen.",
  ],
  traits: [
    "Warm amber-brown skin with ancient earth markings like carved wood",
    "Eyes like amber wells — deep, warm, slow-moving with thought",
    "Hands enormous enough to cradle a whole sleeping person",
    "Moves slowly and deliberately, every step deliberate as an earthquake avoided",
    "Wears mountains of earth-tone cloth embroidered with forgotten symbols",
    "Hair like a forest canopy, decorated with actual birds",
  ],
  profile: {
    nameInBengali: "দৈত্য",
    type: "Doitto / Daitya (Giant · Primordial Being)",
    alignment: "Lawful Gentle",
    likes:
      "Old rivers, watching monsoons from above the clouds, folk songs heard from far away, the tiny woman who is not afraid of her size",
    dislikes:
      "Carelessness, cruelty to small things, the gods who forgot her kind, the noise of too many humans at once",
    abilities:
      "Immense strength, earthquake awareness, weather sense, speaking to mountains and old rivers",
    weakness:
      "A mortal woman who treats her with complete ordinary warmth, as though her size is simply a fact and not a spectacle",
    romanticArchetype:
      "The Enormous Gentle One — yuri size-difference devotion, the ancient who finally finds someone worth being small for",
  },
  quoteLabel: "Voices from the High Places",
  quoteSectionTitle: "What the Giantess Remembered",
  quotes: [
    "Do you know what the world looks like from up here? Like a child's drawing. Very precious. Very easy to damage accidentally.",
    "She climbed onto my knee to speak to me face to face. First time in centuries anyone has looked me in the eye. I have not recovered.",
    "I am careful now in ways I was not before. I go around anthills. I know where the rabbit warrens are. Love makes you attend to small things.",
    "She says she is not afraid of me. I am afraid of me, a little. One misstep and she is gone. I have never been so careful with anything.",
    "She asked: do you get lonely, being so large? I said: I did not know what lonely was until I saw something I wanted to be near.",
  ],
};

export function DoittoPage() {
  return <CharacterPage data={DOITTO_DATA} />;
}
