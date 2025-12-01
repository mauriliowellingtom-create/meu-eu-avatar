"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Check, Zap } from "lucide-react";
import Link from "next/link";

export default function PlanosPage() {
  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para testar a plataforma",
      features: [
        "5 vídeos por mês",
        "100 mensagens por mês",
        "1 avatar",
        "Chat básico",
        "Suporte por email",
      ],
      cta: "Começar Grátis",
      href: "/onboarding",
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Ideal para profissionais e pequenas empresas",
      features: [
        "50 vídeos por mês",
        "5.000 mensagens por mês",
        "3 avatares",
        "WhatsApp Business",
        "Automações avançadas",
        "Voz clonada premium",
        "Suporte prioritário",
      ],
      cta: "Começar Agora",
      href: "/onboarding",
      popular: true,
    },
    {
      name: "Business",
      price: "R$ 297",
      period: "/mês",
      description: "Para empresas que precisam de escala",
      features: [
        "Vídeos ilimitados",
        "Mensagens ilimitadas",
        "Avatares ilimitados",
        "Todas as integrações",
        "API dedicada",
        "Suporte 24/7",
        "Treinamento personalizado",
        "Gerente de conta dedicado",
      ],
      cta: "Falar com Vendas",
      href: "/onboarding",
      popular: false,
    },
  ];

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

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Planos Flexíveis</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Escolha o plano ideal para você
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            Comece grátis e escale conforme seu negócio cresce. Sem taxas ocultas, cancele quando quiser.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-cyan-900/50 to-slate-800/50 border-cyan-500 relative"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-bold text-white">
                    Mais Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <Check
                        className={`w-5 h-5 ${
                          plan.popular ? "text-cyan-400" : "text-green-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">
                Posso mudar de plano a qualquer momento?
              </h3>
              <p className="text-slate-400">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">
                O que acontece se eu exceder meu limite?
              </h3>
              <p className="text-slate-400">
                Você receberá uma notificação quando estiver próximo do limite. Pode fazer upgrade ou aguardar a renovação mensal.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">
                Preciso de cartão de crédito para o plano Free?
              </h3>
              <p className="text-slate-400">
                Não! O plano Free é 100% gratuito e não requer cartão de crédito. Você só precisa criar uma conta.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-slate-400">
                Sim! Não há contratos de longo prazo. Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Começar Grátis
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-700 text-white">
              Falar com Vendas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
