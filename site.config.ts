// ─────────────────────────────────────────────────────────────
//  Everything you change on the Linky website lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  title: "Linky — Personalized digital surprises",
  description: "Gifts and invitations people open on their phone, from one link. Made in Lebanon.",

  instagram: "linkylb", // your Instagram name, without @
  whatsapp: "", // your WhatsApp number with country code, digits only (example: 96171123456). Leave empty to hide the button.

  hero: {
    line1: "Personalized digital surprises.",
    line2: "Gifts and invitations people open on their phone, from one link.",
    primary: "See our work",
    secondary: "Order on Instagram",
  },

  work: {
    eyebrow: "OUR WORK",
    title: "Open them the way your guests will.",
    sub: "Every one of these is a real website. Tap the phone to try it.",
    tryIt: "Tap to try",
    done: "Done",
    fullScreen: "Open full screen",
    orderLike: "Order one like this",
    loading: "Loading…",
  },

  // Your projects. Add, remove or reorder freely.
  // short = the small label on the button, title = the big name, note = one line under it.
  projects: [
    {
      id: "wedding",
      short: "Wedding",
      title: "Wedding invitation",
      note: "A wedding invitation that opens like a surprise.",
      url: "https://linkywedding2.netlify.app/",
    },
    {
      id: "wedding-demo",
      short: "Wedding demo",
      title: "Wedding invitation · demo",
      note: "Their story, the date, guest wishes and a camera for the day.",
      url: "https://linky-wedding-demo.netlify.app/",
    },
    {
      id: "birthday",
      short: "Birthday",
      title: "Birthday surprise",
      note: "A birthday gift she opens from a link.",
      url: "https://linkybirthday2.netlify.app/",
    },
    {
      id: "birthday-demo",
      short: "Birthday demo",
      title: "Birthday · demo",
      note: "Make a wish and blow out the candles.",
      url: "https://linkybday-demo.netlify.app/",
    },
    {
      id: "gender",
      short: "Gender reveal",
      title: "Gender reveal",
      note: "Pick a team and pop the balloon.",
      url: "https://linkygender.netlify.app/",
    },
    {
      id: "christmas",
      short: "Christmas",
      title: "Christmas surprise",
      note: "A Christmas gift made to open on a phone.",
      url: "https://linkychristmas.netlify.app/",
    },
    {
      id: "gift-demo",
      short: "Gift demo",
      title: "A gift for one person",
      note: "Photos, voice notes and a message, just for them.",
      url: "https://linky-dana-demo.netlify.app/",
    },
  ],

  steps: {
    eyebrow: "HOW IT WORKS",
    title: "Three steps. That's it.",
    items: [
      { title: "Tell us the story", text: "Names, photos, a voice note, what you want them to feel." },
      { title: "We build the link", text: "A real website made only for them. No app, nothing to install." },
      { title: "You send it", text: "On WhatsApp or Instagram. They open it on their phone." },
    ],
  },

  contact: {
    title: "Make someone's day.",
    text: "Tell us who it's for. We'll build the surprise.",
    instagram: "Message us on Instagram",
    whatsapp: "Message us on WhatsApp",
    whatsappText: "Hi Linky! I would like to order a surprise.",
  },

  footer: "Made in Lebanon",
};

export type Project = (typeof site.projects)[number];
