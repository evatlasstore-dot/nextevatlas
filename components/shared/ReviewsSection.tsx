import { demoStories } from "@/data/reviews";

type ReviewRailProps = {
  ids?: string[];
  limit?: number;
  compact?: boolean;
};

export function ReviewRail({ ids, limit = 3, compact = false }: ReviewRailProps) {
  const stories = (ids ? demoStories.filter((story) => ids.includes(story.id)) : demoStories).slice(0, limit);
  return (
    <div className={`story-rail ${compact ? "story-rail-compact" : ""}`} role="list">
      {stories.map((story, index) => (
        <article className="story-card" key={story.id} role="listitem">
          <div className="story-card-top"><span>{String(index + 1).padStart(2, "0")}</span><p>{story.city}</p></div>
          <blockquote>“{story.quote}”</blockquote>
          <footer><span aria-hidden="true">{story.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span><p><b>{story.name}</b><small>{story.vehicle} · {story.installation}</small></p></footer>
        </article>
      ))}
    </div>
  );
}

export default function ReviewsSection({ title = "Des parcours qui ressemblent aux vôtres.", ids, limit = 3 }: ReviewRailProps & { title?: string }) {
  return (
    <section className="stories-section section" aria-labelledby="stories-title">
      <div className="container stories-shell">
        <header className="stories-heading"><div><p className="eyebrow">Scénarios d’usage</p><h2 id="stories-title">{title}</h2></div><p>Ces témoignages sont des contenus fictifs de démonstration, créés pour représenter des besoins fréquents au Maroc. Ils seront remplacés par des avis vérifiés avant publication commerciale.</p></header>
        <ReviewRail ids={ids} limit={limit} />
      </div>
    </section>
  );
}
