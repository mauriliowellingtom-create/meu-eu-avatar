"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">Meu Eu 2.0</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Escolha o plano ideal para você
            </h1>
            <p className="text-xl text-slate-400">
              Comece grátis e escale conforme seu negócio cresce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">R$ 0</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  5 vídeos por mês
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  100 mensagens por mês
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  1 avatar
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Chat básico
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Suporte por email
                </li>
              </ul>
              <Link href="/registro">
                <Button className="w-full" variant="outline">
                  Começar Grátis
                </Button>
              </Link>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 bg-gradient-to-b from-cyan-900/50 to-slate-800/50 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-bold text-white">
                Mais Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">R$ 97</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  50 vídeos por mês
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  5.000 mensagens por mês
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  3 avatares
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  WhatsApp Business
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  Automações avançadas
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400" />
                  Suporte prioritário
                </li>
              </ul>
              <Link href="/registro">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Começar Agora
                </Button>
              </Link>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">R$ 297</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Vídeos ilimitados
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Mensagens ilimitadas
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Avatares ilimitados
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Todas as integrações
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Suporte prioritário 24/7
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  API dedicada
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  Gerente de conta
                </li>
              </ul>
              <Link href="/registro">
                <Button className="w-full" variant="outline">
                  Falar com Vendas
                </Button>
              </Link>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Perguntas Frequentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">
                  Posso cancelar a qualquer momento?
                </h3>
                <p className="text-slate-400">
                  Sim! Não há fidelidade. Você pode cancelar seu plano quando quiser.
                </p>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">
                  Como funciona o período grátis?
                </h3>
                <p className="text-slate-400">
                  Você tem acesso completo ao plano Free sem precisar cadastrar cartão de crédito.
                </p>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">
                  Posso mudar de plano depois?
                </h3>
                <p className="text-slate-400">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                </p>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">
                  Quais formas de pagamento aceitam?
                </h3>
                <p className="text-slate-400">
                  Aceitamos cartão de crédito, PIX e boleto bancário.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
