import { CharacterPage } from "../components/CharacterPage";
import type { CharacterData } from "../components/CharacterPage";

const BETAL_DATA: CharacterData = {
  name: "Betal",
  bengaliName: "বেতাল",
  typeLabel: "Betal · Vetala · Riddle-Ghost",
  tagline:
    "She will tell you twenty-five stories. Each ends with a riddle. Get it wrong and she vanishes. Get it right and she stays. She has never wanted anyone to get them right before",
  portraitSrc: "/assets/generated/betal-portrait.dim_512x768.jpg",
  accentOklch: "0.78 0.08 240",
  accentHue: 240,
  heroGradient:
    "radial-gradient(ellipse at 50% 0%, oklch(0.22 0.06 240 / 0.7) 0%, oklch(0.10 0.025 270) 60%), radial-gradient(ellipse at 80% 80%, oklch(0.18 0.06 240 / 0.35) 0%, transparent 60%), oklch(0.10 0.025 270)",
  loreTitle: "The Riddler in the Charnel Tree",
  loreParagraphs: [
    "In the Vetala Panchavimshati — the twenty-five stories of the Vetala — a king is sent on a night errand to carry a body on his back, not knowing it is possessed. Each time he walks far enough to forget his task, the body speaks: let me tell you a story. And each story ends with a riddle that the king must answer or remain cursed. This is Betal's gift and Betal's trap.",
    "Betal haunts the charnel tree at the edge of the shmashaan, hanging inverted, ancient and observant. She has seen more of human nature hanging upside down in that tree than most scholars learn in a lifetime. She tells stories because stories are the only net strong enough to hold the truth of the human heart. She poses riddles because riddles are the only honest question: what do you know, and what do you only think you know?",
    "But your grandmother tells you something extra: there was a young woman scholar who came to Betal's tree not to retrieve a body, not to complete a quest. She came to hear the stories. And every time Betal asked the riddle, the scholar answered correctly — not from cleverness, but from having actually listened. By the twenty-fourth story, Betal was the one lingering. She had never met someone who came to her tree simply to sit in the story with her.",
  ],
  traits: [
    "Bone-white blue skin with a faint cold luminescence",
    "Hair that floats perpetually as if underwater",
    "Ancient eyes full of stored riddles and centuries of observation",
    "Often seen inverted, perched in the charnel tree",
    "Scholar's robes overlaid with gossamer ghostly shroud",
    "Always carries scrolls of stories — some finished, some not yet",
  ],
  profile: {
    nameInBengali: "বেতাল",
    type: "Betal / Vetala (Ghoul · Riddle-Spirit)",
    alignment: "Neutral Ancient",
    likes:
      "Correct answers, those who actually listen, the rustle of scroll-paper, midnight, someone who gets the riddle without needing it twice",
    dislikes:
      "Hollow cleverness, those who answer before listening, impatience, fire in the charnel ground",
    abilities:
      "Paranormal knowledge, riddle-craft, story-weaving, possession, revealing the hidden logic of events",
    weakness: "Someone who answers all her riddles and then asks her one back",
    romanticArchetype:
      "The Ancient Questioner — yuri battle-of-wits romance, the one who finally came to be questioned and stayed to listen",
  },
  quoteLabel: "Riddles in the Dark",
  quoteSectionTitle: "Twenty-Five Stories and One Truth",
  quotes: [
    "I will tell you a story. At the end, there will be a riddle. Answer wrongly and I vanish. Answer rightly — well. No one has ever made me decide what happens then.",
    "She answers each riddle correctly. Not quickly. Correctly. There is a difference that most people who come here do not understand.",
    "I have told these twenty-five stories to kings and priests and thieves. She is the first to ask what happens in story twenty-six.",
    "The riddle is not the test. Listening is the test. The riddle is just how I find out if you passed.",
    "By the twenty-fifth story I was talking slower. I did not want to reach the end. I have never wanted to reach the end before.",
  ],
};

export function BetalPage() {
  return <CharacterPage data={BETAL_DATA} />;
}
