import Link from "next/link";
import { IconOrb } from "@/components/ui/IconOrb";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[linear-gradient(165deg,#fff8f2,#fdeff5_55%,#f4f0ff)] pt-[160px] pb-24">
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -top-24 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-55 blur-[110px]"
        style={{ background: "radial-gradient(circle,#ffd2bd,transparent 68%)" }}
      />
      <div className="container-x relative flex flex-col items-center text-center">
        <IconOrb icon="sparkle" tone="coral" size="2xl" halo pulse />
        <p className="font-display mt-8 text-[clamp(4rem,14vw,9rem)] leading-none font-extrabold tracking-[-0.05em] text-gradient-warm">
          404
        </p>
        <h1 className="text-h2 mt-4">This page took a day off</h1>
        <p className="text-lead mt-5 max-w-[52ch] text-inksoft">
          The link you followed does not exist any more — but the clinic is very much open.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Button href="/en" size="lg" icon="arrowRight">
            Home
          </Button>
          <Link
            href="/en/contact"
            className="font-display inline-flex h-14 items-center rounded-full border-[1.6px] border-ink/12 bg-white/70 px-8 text-[1.08rem] font-extrabold transition-colors hover:border-coral-300 hover:text-coral-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
