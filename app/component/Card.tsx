import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function Card({ title, description, tags, link }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/40">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <Link
          href={link}
          target="_blank"
          className="mt-4 inline-block text-sm text-cyan-400 hover:underline"
        >
          View project →
        </Link>
      )}
    </div>
  );
}