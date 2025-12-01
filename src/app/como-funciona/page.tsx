"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  ArrowLeft, 
  UserPlus, 
  Video, 
  MessageSquare, 
  Zap,
  CheckCircle 
} from "lucide-react";
import Link from "next/link";

export default function ComoFuncionaPage() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Crie seu Avatar",
      description: "Faça upload de uma foto sua e grave 60 segundos de áudio. Nossa IA vai clonar sua aparência e voz com precisão profissional.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      number: "02",
      icon: Video,
      title: "Gere Vídeos Automáticos",
      description: "Digite qualquer texto e seu avatar vai falar com sua voz clonada. Crie vídeos personalizados em segundos, sem precisar gravar nada.",
      color: "from-purple-500 to-pink-600",
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Conecte seus Canais",
      description: "Integre com WhatsApp Business, Instagram, Facebook e outras plataformas. Seu avatar responde automaticamente seus clientes 24/7.",
      color: "from-green-500 to-emerald-600",
    },
    {
      number: "04",
      icon: Zap,
      title: "Automatize Vendas",
      description: "Nossa IA identifica intenção de compra e gera checkouts automáticos. Venda enquanto dorme com seu avatar trabalhando por você.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const features = [
    "Clone de voz com apenas 60 segundos de áudio",
    "Vídeos realistas com tecnologia D-ID e HeyGen",
    "Integração nativa com WhatsApp Business API",
    "Chat inteligente com GPT-4 e personalidade customizável",
    "Detecção automática de intenção de compra",
    "Geração de checkouts e links de pagamento",
    "Dashboard completo com métricas e analytics",
    "Suporte a múltiplos idiomas e sotaques",
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Simples e Poderoso</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Como Funciona o <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Meu Eu 2.0</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            Em apenas 4 passos simples, você terá seu avatar digital funcionando e automatizando seu atendimento
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className="p-8 md:p-12 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-slate-700">{step.number}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recursos Incluídos
            </h2>
            <p className="text-xl text-slate-400">
              Tudo que você precisa para criar e gerenciar seu avatar digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-300">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tecnologia de Ponta
            </h2>
            <p className="text-xl text-slate-400">
              Utilizamos as melhores ferramentas de IA do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-800/50 border-slate-700 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">D-ID & HeyGen</h3>
              <p className="text-slate-400">
                Geração de vídeos realistas com avatares digitais de alta qualidade
              </p>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-slate-700 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ElevenLabs</h3>
              <p className="text-slate-400">
                Clone de voz profissional com qualidade indistinguível do original
              </p>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-slate-700 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">OpenAI GPT-4</h3>
              <p className="text-slate-400">
                Conversas naturais e inteligentes com seus clientes 24/7
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Crie seu avatar digital em menos de 5 minutos. Sem cartão de crédito necessário.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-12 py-6"
              >
                Criar Meu Avatar Grátis
              </Button>
            </Link>
            <Link href="/planos">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 text-lg px-12 py-6"
              >
                Ver Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
