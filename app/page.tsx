import { redirect } from "next/navigation";

export default function LandingPage() {
  redirect("/portfolio");
}

/*function UnderConstruction() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 text-center">
      <span className="text-8xl">🚧</span>
      <h1 className="text-5xl font-black tracking-tight">Under Construction</h1>
      <p className="text-xl text-foreground/60">Please check back soon!</p>
    </div>
  );
}*/
