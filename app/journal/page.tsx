import { ArrowUpRight, Newspaper } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { articles } from "@/components/content";

export default function JournalPage() {
  return <PageFrame eyebrow="04 / Journal" title={`Ideas & press — ${articles.length}`} lede="Notes on engineering, product thinking and the work behind the work."><div className="articles-list inner-articles">{articles.map((article) => <a key={article.url} href={article.url} target="_blank" rel="noreferrer" className="article-card"><div className="article-art"><Newspaper /><span>{article.publication}</span></div><div className="article-copy"><span>{article.publication} · {article.date}</span><h3>{article.title}</h3><p>{article.summary}</p></div><ArrowUpRight className="article-arrow" /></a>)}</div></PageFrame>;
}
