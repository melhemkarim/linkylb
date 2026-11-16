import { site } from "@/site.config";

export const igLink = `https://ig.me/m/${site.instagram}`;
export const waLink = (text: string) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}` : "";
