import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-wellness-gradient p-8 text-slate-900 overflow-hidden relative">
            {/* Soft decorative blur */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-sage-100/40 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-rose-100/40 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-xl w-full text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <h1 className="text-6xl font-mono font-bold tracking-tighter uppercase">
                        UNSPOKEN<span className="text-clay">.</span>
                    </h1>
                    <p className="text-slate-600 text-xl font-serif italic leading-relaxed">
                        A decentralized sanctuary for the stories we carry in silence.
                    </p>
                </div>

                {!session ? (
                    <div className="glass-panel p-10 rounded-[2.5rem] border-white/60 shadow-soft">
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-8">
                            Join the global movement of shared healing
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/auth/signin"
                                className="w-full py-5 bg-clay text-white rounded-2xl font-mono font-bold tracking-widest hover:bg-clay/90 transition-all shadow-lg shadow-clay/10"
                            >
                                ENTER THE SANCTUARY
                            </Link>
                            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest pt-4">
                                Strictly Anonymous • Community Driven • Wellness Focused
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="glass-panel p-10 rounded-[2.5rem] border-white/60 shadow-soft space-y-8">
                        <div className="space-y-2">
                            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Welcome back, Traveler</p>
                            <h2 className="text-2xl font-serif italic text-slate-900">{session.user?.name || "Spirit"}</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-6 bg-white/50 border border-clay/5 rounded-2xl hover:bg-white/80 transition-all text-left group">
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-2">My Stories</h4>
                                <span className="text-sm font-bold text-slate-900">Document the unspoken.</span>
                            </button>
                            <button className="p-6 bg-white/50 border border-clay/5 rounded-2xl hover:bg-white/80 transition-all text-left group">
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-2">Community</h4>
                                <span className="text-sm font-bold text-slate-900">Heal through connection.</span>
                            </button>
                        </div>
                    </div>
                )}

                <div className="pt-12">
                    <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] leading-loose">
                        Unspoken Platform v0.1 • Phase 3 Foundation Complete
                    </p>
                </div>
            </div>
        </main>
    );
}
