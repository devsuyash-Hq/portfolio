import Card from "./component/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-6 text-3xl font-bold">Hello World</h1>

      <Card
        title="Card 1"
        description="This is the first card."
        tags={["Next.js", "Tailwind"]}
      />
    </main>
  );        
}    