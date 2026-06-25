import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const SHOYTAN_DATA: CharacterData = {
  name: "Shoytan",
  bengaliName: "শয়তান",
  typeLabel: "Shoytan · Tempter Devil",
  tagline:
    "She was sent to lead the woman astray. She has been standing at the woman's door for seven days now, unable to knock, paralyzed by the sound of the woman praying",
  portraitSrc: "/assets/generated/shoytan-portrait.dim_512x768.jpg",
  accentOklch: "0.65 0.28 15",
  accentHue: 15,
  heroGradient:
    "radial-gradient(ellipse at 30% 0%, oklch(0.22 0.14 15 / 0.8) 0%, oklch(0.10 0.025 270) 55%), radial-gradient(ellipse at 80% 80%, oklch(0.20 0.10 15 / 0.4) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "Born of Smokeless Fire",
  loreParagraphs: [
    "In the Bengali Islamic tradition, the Shayateen are many — the plural of Shaytan, the devil — fire-born beings whose entire purpose is the leading of righteous souls toward ruin. Created from smokeless flame, unlike the angels made of light or the humans made of clay, they are set in opposition to goodness as a test. The pious woman knows this. She prays. She keeps her distance from dark places. She is, by every measure of the tradition, exactly who the Shoytan is supposed to approach.",
    "Shoytan was given her assignment like all the others: find the woman, find her weakness, pull. Every soul has a door. Every door has a key. Shoytan is very good at finding keys. She has led kings astray and scholars into doubt and merchants into corruption. She is very old, and very practiced, and she has never failed.",
    "On the seventh evening, the woman left her door open. Not for Shoytan — she left it open to let the monsoon air in. But Shoytan stood in the threshold and heard the woman humming a prayer inside, and felt something that fire-born beings are specifically forbidden from feeling, and could not make herself knock. She is still standing there, technically, in the space between her assignment and this new and terrible thing she cannot name.",
  ],
  traits: [
    "Deep dark skin with an infernal scarlet aura that flares when she is moved",
    "Dark smoke curling around her when she is uncertain",
    "Eyes that burn — literally — with smokeless fire",
    "Torn between her nature and something unnamed and new",
    "Wears the form of a beautiful woman in deep red and black",
    "Smells of saffron, smoke, and something almost like sandalwood",
  ],
  profile: {
    nameInBengali: "শয়তান",
    type: "Shoytan / Shaytan (Devil · Fire-Born Being)",
    alignment: "Chaotic Conflicted",
    likes:
      "Winning, smokeless flames, the feeling of a puzzle being solved — and now, inexplicably, the sound of a particular woman's voice at prayer",
    dislikes:
      "Failing assignments, being curious against her will, the fact that faith can be beautiful",
    abilities:
      "Temptation, shapeshifting, fire-craft, finding the vulnerable point in any soul",
    weakness:
      "A woman whose faith is not rigid but warm — not a wall but a fire she cannot help being drawn toward",
    romanticArchetype:
      "The Devil Who Failed on Purpose — yuri forbidden love, the tempter turned by the very thing she came to destroy",
  },
  quoteLabel: "Embers and Whispers",
  quoteSectionTitle: "What the Shoytan Confessed",
  quotes: [
    "I was sent to lead her astray. I have been standing at her threshold for seven days. This is, technically, still the mission. I am still deciding what to do with it.",
    "Fire-born beings are not supposed to be afraid of anything. She makes me afraid. Not of her. Of what I will do when she finally looks at me.",
    "She knows I am here. She has left the door open every evening for a week. I think she is leaving it open for me. I think she does not know what she is doing. I think she knows exactly what she is doing.",
    "They say faith is a shield against my kind. They did not warn me that it could also be a light. I am drawn to light. This is a fundamental problem.",
    "She asked: are you going to come in? I said: I do not know how to be here without ruining things. She said: I know. Come in anyway. I think I am in some kind of trouble.",
  ],
};

export function ShoytanPage() {
  return <CharacterPage data={SHOYTAN_DATA} />;
}
