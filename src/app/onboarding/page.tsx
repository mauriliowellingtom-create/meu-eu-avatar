"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-12 h-12 text-cyan-400" />
          <span className="text-3xl font-bold text-white">Meu Eu 2.0</span>
        </div>

        {/* Card Principal */}
        <Card className="p-12 bg-slate-800/50 border-slate-700">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Bem-vindo ao Meu Eu 2.0!
          </h1>

          <p className="text-xl text-slate-400 mb-8">
            Estamos preparando uma experiência incrível para você criar seu avatar digital.
          </p>

          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
            <p className="text-cyan-400 font-medium">
              🚀 O processo de onboarding completo está em desenvolvimento
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Em breve você poderá criar seu avatar, clonar sua voz e conectar seus canais em poucos cliques.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-slate-300">
              Enquanto isso, você pode:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/planos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Ver Planos
                </Button>
              </Link>

              <Link href="/como-funciona">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-700"
                >
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Link de Voltar */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mt-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
