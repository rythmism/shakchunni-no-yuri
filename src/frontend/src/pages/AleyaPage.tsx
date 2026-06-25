import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const ALEYA_DATA: CharacterData = {
  name: "Aleya",
  bengaliName: "আলেয়া",
  typeLabel: "Aleya · Marsh Ghost Light",
  tagline:
    "She is the light that should not be trusted — and yet you follow her, across the dark water, toward whatever it is you have been afraid to find",
  portraitSrc: "/assets/generated/aleya-portrait.dim_512x768.jpg",
  accentOklch: "0.82 0.18 175",
  accentHue: 175,
  heroGradient:
    "radial-gradient(ellipse at 50% 0%, oklch(0.22 0.10 175 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 80% 80%, oklch(0.18 0.08 175 / 0.4) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "The Light Above the Water",
  loreParagraphs: [
    "Hear me, little one — in the vast Sundarban delta where the rivers have no single shore and the mangroves grow into the water like fingers searching for something lost, there is a light. It bobs and drifts above the marsh. The old fishermen know better than to follow it. But knowing better has never stopped anyone.",
    "Aleya is the ghost of a fisherman drowned in these dark waters — her spirit trapped in the form of floating golden-teal orbs that drift above the surface where she perished. She was drawn back not by malice but by disorientation, and she passes that disorientation on to every soul who meets her light. Fishermen follow her into the deep, compelled by the shimmer, and are never found.",
    "But your grandmother would tell you this: there was once a lighthouse keeper — a woman who did not fish, who did not follow, who instead lit her own lamp and waited. And Aleya, for the first time in her spectral existence, was drawn toward another light rather than drawing others toward their deaths. She has been trying to guide that lighthouse keeper ever since. Sometimes, love is learning to warn instead of drown.",
  ],
  traits: [
    "Body half-dissolved into floating orbs of golden-teal marsh fire",
    "Translucent skin glowing with bioluminescent light from within",
    "Hair that flows like river currents, horizontal even in still air",
    "Eyes like burning marsh gas — green-gold and hypnotic",
    "Voice like the sound of water lapping at a wooden boat hull",
    "Leaves wet footprints even in dry places",
  ],
  profile: {
    nameInBengali: "আলেয়া",
    type: "Aleya (Ghost Light · Drowned Spirit)",
    alignment: "Neutral Ethereal",
    likes:
      "The sound of oars on water, lanterns lit for her, the lighthouse beam, fog, the moment before a storm",
    dislikes: "Dry land, silence, being ignored, the smell of iron chains",
    abilities:
      "Light manifestation, disorientation, water-walking, appearing as multiple simultaneous orbs",
    weakness:
      "A lighthouse keeper who shines her light back rather than following",
    romanticArchetype:
      "The Dangerous Guide — yuri supernatural attraction, drawn to the one who refuses to drown",
  },
  quoteLabel: "Voices Across Water",
  quoteSectionTitle: "What the Marsh Remembers",
  quotes: [
    "They say I lure men to their deaths. They forget to mention what I was doing when I drowned.",
    "Follow me. Not because you should — because you already know where I am leading.",
    "The lighthouse keeper does not follow me. She holds up her own lamp and dares me to navigate by it. I have never been so lost in my life.",
    "I am not a ghost. I am a direction. Whether it is the right direction depends entirely on how you feel about the deep.",
    "She called my name across the water. First time anyone ever called my name as if it were something to keep, not something to warn others about.",
  ],
};

export function AleyaPage() {
  return <CharacterPage data={ALEYA_DATA} />;
}
