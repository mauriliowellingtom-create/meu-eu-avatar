"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  Video, 
  MessageSquare, 
  Zap, 
  Shield, 
  TrendingUp,
  Check,
  ArrowRight,
  Play,
  CheckCircle,
  XCircle
} from "lucide-react";
import Link from "next/link";

async function checkBackendStatus() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://meu-eu-backend.onrender.com";
    const response = await fetch(apiUrl, { 
      method: "GET",
      cache: "no-store"
    });
    
    if (response.ok) {
      return { online: true, message: "Backend conectado com sucesso" };
    } else {
      return { online: false, message: "Erro ao conectar com backend" };
    }
  } catch (error) {
    return { online: false, message: "Erro ao conectar com backend" };
  }
}

export default function LandingPage() {
  const [backendStatus, setBackendStatus] = useState<{ online: boolean; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      setIsLoading(true);
      const status = await checkBackendStatus();
      setBackendStatus(status);
      setIsLoading(false);
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">Meu Eu 2.0</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition">Funcionalidades</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Planos</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition">Como Funciona</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-white">Entrar</Button>
            </Link>
            <Link href="/onboarding">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Backend Status Banner */}
      <div className="pt-16">
        <div className="bg-slate-900/50 border-b border-slate-800 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-slate-400">Verificando conexão com backend...</span>
                </>
              ) : backendStatus?.online ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Status da API: ONLINE</span>
                  <span className="text-xs text-slate-500">✅ {backendStatus.message}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-sm text-red-400 font-medium">Status da API: OFFLINE</span>
                  <span className="text-xs text-slate-500">❌ {backendStatus?.message}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Tecnologia de IA Avançada</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crie seu <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Avatar Digital</span> em minutos
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            Clone sua voz, gere vídeos automáticos e conecte com WhatsApp Business. 
            Automatize seu atendimento e vendas com inteligência artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/onboarding">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6">
                Criar Meu Avatar Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>5 vídeos grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Configuração em 5 minutos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="text-xl text-slate-400">
              Ferramentas profissionais de IA para criar e gerenciar seu avatar digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vídeos Automáticos</h3>
              <p className="text-slate-400">
                Gere vídeos realistas com seu avatar falando qualquer texto. Tecnologia D-ID e HeyGen.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Voz Clonada</h3>
              <p className="text-slate-400">
                Clone sua voz com apenas 60 segundos de áudio. Qualidade profissional com ElevenLabs.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp Business</h3>
              <p className="text-slate-400">
                Conecte sua conta oficial e automatize respostas com seu avatar digital.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automação de Vendas</h3>
              <p className="text-slate-400">
                Identifique intenção de compra e gere checkouts automáticos via IA.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Seguro</h3>
              <p className="text-slate-400">
                OAuth seguro. Nunca pedimos senhas. Conformidade LGPD/GDPR completa.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chat Inteligente</h3>
              <p className="text-slate-400">
                Conversas naturais com GPT-4. Personalize a personalidade do seu avatar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Planos para todos os tamanhos
            </h2>
            <p className="text-xl text-slate-400">
              Comece grátis e escale conforme cresce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-slate-800/50 border-slate-700">
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
              </ul>
              <Link href="/onboarding">
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
              </ul>
              <Link href="/onboarding">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Começar Agora
                </Button>
              </Link>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 bg-slate-800/50 border-slate-700">
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
                  Suporte prioritário
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-green-400" />
                  API dedicada
                </li>
              </ul>
              <Link href="/onboarding">
                <Button className="w-full" variant="outline">
                  Falar com Vendas
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para criar seu avatar digital?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Junte-se a milhares de empresas que já automatizaram seu atendimento
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-12 py-6">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold text-white">Meu Eu 2.0</span>
              </div>
              <p className="text-slate-400 text-sm">
                Plataforma de avatar digital com IA para automação de atendimento e vendas.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition">Planos</a></li>
                <li><a href="#" className="hover:text-white transition">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © 2024 Meu Eu 2.0. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
