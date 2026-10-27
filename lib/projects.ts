export type Project = { id: string; sym: string; title: string; tag: string; text: string; url: string };

// Replace each url with your live preview link.
export const projects: Project[] = [
  { id: "birthday", sym: "●", title: "Birthday", tag: "Happy 27th, Karim!", text: "Photos, a countdown and a message from every friend, opened with one tap.", url: "https://linkybday-demo.netlify.app" },
  { id: "anniversary", sym: "♥", title: "Anniversary", tag: "Three years of Karim & Dana", text: "A scrolling timeline of the moments that mattered, from first date to today.", url: "https://linky-dana-anniversary.netlify.app" },
  { id: "message", sym: "♥", title: "Romantic message", tag: "Dear Dana,", text: "A private letter that types itself out, line by line, just for them.", url: "https://linky-dana-demo.netlify.app" },
  { id: "wedding", sym: "✦", title: "Wedding invitation", tag: "Karim & Dana", text: "Date, venue, map and RSVP in one elegant invitation that guests open from a link.", url: "https://linky-wedding-demo.netlify.app" },
   { id: "baby", sym: "✿", title: "Gender reveal", tag: "Karim & Dana are expecting", text: "Guess the gender, reveal the name, and share the news with a tap.", url: "https://linkygender.netlify.app" },
];

// Replace YOUR_HANDLE and YOUR_NUMBER (WhatsApp: country code + number, no plus or spaces).
export const contact = { instagram: "https://instagram.com/linkylb", whatsapp: "https://wa.me/+96171958051" };
