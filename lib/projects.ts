export type Project = { id: string; sym: string; title: string; tag: string; text: string; url: string };

// Replace each url with your live preview link.
export const projects: Project[] = [
  { id: "birthday", sym: "●", title: "Birthday", tag: "Happy 25th, Dana!", text: "Photos, a countdown and a message from every friend, opened with one tap.", url: "#" },
  { id: "anniversary", sym: "♥", title: "Anniversary", tag: "Three years of Karim & Dana", text: "A scrolling timeline of the moments that mattered, from first date to today.", url: "#" },
  { id: "message", sym: "♥", title: "Romantic message", tag: "Dear Dana,", text: "A private letter that types itself out, line by line, just for them.", url: "#" },
  { id: "wedding", sym: "✦", title: "Wedding invitation", tag: "Karim & Dana", text: "Date, venue, map and RSVP in one elegant invitation that guests open from a link.", url: "#" },
  { id: "graduation", sym: "★", title: "Graduation", tag: "Congrats, Dr. Dana!", text: "A cap-toss countdown with photos, memories and messages from family and friends.", url: "#" },
  { id: "baby", sym: "✿", title: "Baby reveal", tag: "Karim & Dana are expecting", text: "Guess the gender, reveal the name, and share the news with a tap.", url: "#" },
  { id: "proposal", sym: "♥", title: "Proposal", tag: "Dana, will you marry me?", text: "A question with a very shy No button that runs away every time.", url: "#" },
  { id: "prank", sym: "!", title: "Prank page", tag: "Karim, your phone has a virus!", text: "A fake alert that panics your friend for three seconds, then reveals the surprise.", url: "#" },
];

// Replace YOUR_HANDLE and YOUR_NUMBER (WhatsApp: country code + number, no plus or spaces).
export const contact = { instagram: "https://instagram.com/YOUR_HANDLE", whatsapp: "https://wa.me/YOUR_NUMBER" };
