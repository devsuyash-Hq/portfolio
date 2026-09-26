import Card from "../component/Card";

const projects = [
  {
    title: "AI Interview Assistant",
    description: "An AI-powered tool to practice interviews with feedback.",
    tags: ["Python", "Gemini API"],
    link: "https://github.com/devsuyash-Hq",
  },
  {
    title: "Pattern Atlas",
    description: "A tracker built to support DSA practice.",
    tags: ["Java", "DSA"],
    link: "https://github.com/devsuyash-Hq",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Projects</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}