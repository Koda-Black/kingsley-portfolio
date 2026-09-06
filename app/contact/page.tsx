import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import PageFrame from "@/components/PageFrame";

export default function ContactPage() {
  return <PageFrame eyebrow="05 / Contact" title="Let's build what's next." lede="Have a meaningful problem, an ambitious product or a team that values thoughtful engineering? I'd love to hear about it."><div className="contact-grid"><a href="mailto:kingsley4onuorah@gmail.com"><Mail /><span>Email</span><strong>kingsley4onuorah@gmail.com</strong><ArrowUpRight /></a><a href="https://linkedin.com/in/kodablack" target="_blank" rel="noreferrer"><Linkedin /><span>LinkedIn</span><strong>/in/kodablack</strong><ArrowUpRight /></a><a href="https://github.com/Koda-Black" target="_blank" rel="noreferrer"><Github /><span>GitHub</span><strong>@Koda-Black</strong><ArrowUpRight /></a><div><MapPin /><span>Location</span><strong>Enugu, Nigeria · Worldwide</strong></div></div></PageFrame>;
}
