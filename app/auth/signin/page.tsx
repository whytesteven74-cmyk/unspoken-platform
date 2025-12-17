
"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { LogIn, Mail } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-wellness-gradient px-6 relative overflow-hidden">
            {/* Soft background decor */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sage-100/30 rounded-full blur-[120px]" />

            <div className="w-full max-w-md relative z-10">
                <div className="glass-panel p-12 rounded-[2.5rem] border-white/40 shadow-soft">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-mono font-bold text-slate-900 tracking-tighter mb-3 uppercase">
                            UNSPOKEN<span className="text-clay">.</span>
                        </h1>
                        <p className="text-slate-500 font-serif italic text-lg leading-relaxed">
                            A sanctuary for stories that need to be heard.
                            <br />Welcome home.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                            className="w-full flex items-center justify-center gap-4 bg-white border border-clay/10 py-4 px-6 rounded-2xl font-mono font-bold text-slate-900 hover:bg-clay/5 hover:border-clay/20 transition-all shadow-sm group"
                        >
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
                            CONTINUE WITH GOOGLE
                        </button>

                        <div className="flex items-center gap-4 my-8">
                            <div className="h-px bg-clay/10 flex-1" />
                            <span className="text-[10px] font-mono font-bold text-clay tracking-[0.2em]">OR</span>
                            <div className="h-px bg-clay/10 flex-1" />
                        </div>

                        <form className="space-y-4">
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-clay transition-colors" />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-4 bg-white/50 border border-clay/5 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-clay/10 focus:border-clay/20 transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-clay text-white py-4 rounded-2xl font-mono font-bold tracking-widest hover:bg-clay/90 transition-all shadow-lg shadow-clay/10"
                            >
                                SEND SIGN IN LINK
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                            By continuing, you join a community of <br /> radical honesty & healing.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a href="https://steven-whyte-web.vercel.app" className="text-xs font-mono font-bold text-clay/60 hover:text-clay transition-colors uppercase tracking-widest">
                        ← Back to StevenWhyte.com
                    </a>
                </div>
            </div>
        </div>
    );
}
