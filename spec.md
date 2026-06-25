# Shakchunni no Yuri

## Current State
The site has three pages:
- **HomePage**: Hero with two character cards (Yuri Shankha and Kamala), navigation
- **YuriPage**: Full character page for Yuri Shankha (Shakchunni), with hero, origins, appearance, waifu profile, quotes, fan art gallery, fan tributes, and "Join Her" link
- **KamalaPage**: Full character page for Kamala, with hero, divine lore, folk song, wolf-child myth, waifu profile, quotes
- **Navbar**: Fixed top bar with links to Yuri and Kamala pages
- App.tsx routes between "home" | "yuri" | "kamala"

Core visual theme: Thakurmar Jhuli folk-art aesthetic, dark indigo/jade/crimson OKLCH palette, floating petals, motion animations.

## Requested Changes (Diff)

### Add
8 new character pages, each in yuri/yaoi style drawing on Bengali folk-lore sources:
1. **Petni** (Churel/ghost of woman who died in childbirth, lives in banyan trees, backwards feet, shape-shifter)
2. **Aleya** (marsh ghost-light, will-o-wisp, lures fishermen, orbs of fire, voice like a siren)
3. **Pishacha** (flesh-eating demon, haunts cremation grounds, invisible, possesses humans, shapeshifter)
4. **Rakkhoshi** (female Rakshasa/Rakkhosh, demonic being, shapeshifter, fangs and claws, "Hau Mau Khau" war cry, from Hindu epics and Thakurmar Jhuli tales)
5. **Doitto** (Daitya/giant demoness, extraordinary size and strength, primordial power)
6. **Betal** (Vetala, corpse-haunting ghoul, perches in trees over charnel grounds, knowledgeable riddle-teller, from Betaal Panchabinsati/Vetala Panchavimshati)
7. **Jokkho** (Yaksha, guardian of buried treasures, bestows fertility and wealth, "Jokkher Dhon" idiom)
8. **Shoytan** (Shaytan/devil, Islamic-Bengali djinn tradition, misguides souls, fire-born)
9. **Icchadhari Nag** (shape-shifting cobra woman, naagmani gem, forest guardian, ancient serpent magic)

New navigation: "Spirits" dropdown or expanded nav to list all characters. The HomePage gains a second row/section of character cards for the new 8 spirits (in addition to the existing Yuri + Kamala cards). A new "Spirits" roster section on the homepage.

Thakurmar Jhuli theme overlay across the whole site:
- Visual: Add a Thakurmar Jhuli framing device — a "grandmother's tale" intro banner on the homepage citing the 1907 folk anthology
- Typography/tone: All character lore framed as Thakurmar Jhuli-style oral folk tales ("In the village of shadows, grandmother whispered...")
- Each character page references specific Thakurmar Jhuli story tropes: Rakkhosh encounters, magical snakes, treasure guardians

### Modify
- **App.tsx**: Add 8 new page types for new characters; expand routing
- **Navbar**: Add a "Spirits" section to list all 8 new characters (dropdown or stacked)
- **HomePage**: Add a "The Haunted Roster" section below the existing hero cards, showing the 8 new spirit cards in a grid, each linking to their own page. Add Thakurmar Jhuli framing banner.

### Remove
Nothing removed.

## Implementation Plan
1. Create 8 new page components (PetniPage, AleyaPage, PishachaPage, RakkhoshiPage, DoittoPage, BetalPage, JokkhoPage, ShoytanPage, IcchadhariPage)
2. Each page follows the same layout pattern as YuriPage/KamalaPage: hero banner with portrait, origin lore, appearance, waifu/yaoi profile card, quotes, footer
3. Update App.tsx with new page types and routing
4. Update Navbar with "Spirits" nav section (collapsible or scrolling horizontal links)
5. Update HomePage with Thakurmar Jhuli framing banner and "Haunted Roster" grid of 8 new character cards
6. All portraits use the newly generated AI images
7. Lore content for each character drawn from Wikipedia sources and styled in Thakurmar Jhuli grandmother's tale voice
