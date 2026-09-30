import { OneOnOneCard } from "@/components/mentorship/OneOnOneCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { mentorship } from "@/data/yash-gupta-landing";

export function Mentorship() {
	const { marathon, circle, villa } = mentorship;

	return (
		<section
			id="mentorship"
			className="flex flex-col gap-18 px-5 py-22 sm:px-10 sm:py-28 lg:py-40"
		>
			<Reveal
				y={40}
				className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2"
			>
				<div className="flex flex-col gap-6">
					<span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
						{mentorship.eyebrow}
					</span>
					<h2 className="font-sans text-[clamp(34px,4.4vw,70px)] font-extrabold leading-[1] tracking-tight">
						{mentorship.title.map((part, i) => (
							<span key={i} className={part.plain ? "text-emerald" : ""}>
								{part.text}
							</span>
						))}
					</h2>
				</div>
				<p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted lg:justify-self-end">
					{mentorship.description}
				</p>
			</Reveal>

			<RevealGroup
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				stagger={0.08}
			>
				<RevealItem>
					<article className="flex min-h-[440px] flex-col justify-between gap-16 border border-emerald/20 bg-ink p-9 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:border-emerald/70 hover:shadow-[0_30px_80px_-30px_rgba(91,155,255,0.4)]">
						<div className="flex items-center justify-between gap-3">
							<span className="font-serif text-xl font-bold text-emerald">
								{marathon.no}
							</span>
							<span className="text-[10px] uppercase tracking-[0.28em] text-muted">
								{marathon.tag}
							</span>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="font-serif text-4xl font-bold leading-none">
								{marathon.title}
							</h3>
							<p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
								{marathon.description}
							</p>
							<a
								href={marathon.href}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]"
							>
								{marathon.cta}
								<span className="h-px w-7 bg-current" />
							</a>
						</div>
					</article>
				</RevealItem>

				<RevealItem>
					<article className="flex min-h-[440px] flex-col justify-between gap-16 border border-emerald/20 bg-ink p-9 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:border-emerald/70 hover:shadow-[0_30px_80px_-30px_rgba(91,155,255,0.4)]">
						<div className="flex items-center justify-between gap-3">
							<span className="font-serif text-xl font-bold text-emerald">
								{circle.no}
							</span>
							<span className="text-[10px] uppercase tracking-[0.28em] text-muted">
								{circle.tag}
							</span>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="font-serif text-4xl font-bold leading-none">
								{circle.title}
							</h3>
							<p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
								{circle.description}
							</p>
							<a
								href={circle.href}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]"
							>
								{circle.cta}
								<span className="h-px w-7 bg-current" />
							</a>
						</div>
					</article>
				</RevealItem>

				<RevealItem>
					<article className="flex min-h-[440px] flex-col justify-between gap-16 border border-emerald/50 bg-[linear-gradient(160deg,rgba(91,155,255,0.22),rgba(91,155,255,0.03)_60%)] p-9 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:border-emerald hover:shadow-[0_30px_80px_-30px_rgba(91,155,255,0.5)]">
						<div className="flex items-center justify-between gap-3">
							<span className="font-serif text-xl font-bold text-emerald">
								{villa.no}
							</span>
							<span className="text-[10px] uppercase tracking-[0.28em] text-emerald">
								{villa.tag}
							</span>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="font-serif text-4xl font-bold leading-none">
								{villa.title}
							</h3>
							<p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
								{villa.description}
							</p>
							<a
								href={villa.href}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]"
							>
								{villa.cta}
								<span className="h-px w-7 bg-current" />
							</a>
						</div>
					</article>
				</RevealItem>

				<RevealItem>
					<OneOnOneCard />
				</RevealItem>
			</RevealGroup>
		</section>
	);
}
