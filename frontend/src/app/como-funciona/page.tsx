"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Upload, Mic, Video, Zap } from "lucide-react";
import Link from "next/link";

export default function ComoFuncionaPage() {
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
              Como funciona o <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Meu Eu 2.0</span>
            </h1>
            <p className="text-xl text-slate-400">
              Crie seu avatar digital em 4 passos simples
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12 mb-20">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-white">Envie sua foto</h2>
                </div>
                <p className="text-lg text-slate-400 mb-4">
                  Faça upload de uma foto sua de frente, com boa iluminação. Nossa IA vai criar um avatar digital realista baseado na sua imagem.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    Foto de frente, olhando para câmera
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    Boa iluminação e fundo neutro
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    Resolução mínima de 512x512px
                  </li>
                </ul>
              </div>
              <Card className="flex-1 p-8 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-center h-64 bg-slate-900/50 rounded-lg border-2 border-dashed border-slate-700">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <p className="text-slate-400">Arraste sua foto aqui</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-white">Clone sua voz</h2>
                </div>
                <p className="text-lg text-slate-400 mb-4">
                  Grave 60 segundos da sua voz lendo um texto. Nossa tecnologia ElevenLabs vai criar uma cópia perfeita da sua voz.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    Grave em ambiente silencioso
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    Fale naturalmente, sem pressa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    Mínimo de 60 segundos de áudio
                  </li>
                </ul>
              </div>
              <Card className="flex-1 p-8 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-center h-64 bg-slate-900/50 rounded-lg">
                  <div className="text-center">
                    <Mic className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-slate-400 mb-4">Clique para gravar</p>
                    <div className="w-full max-w-xs h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-pink-600" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-white">Gere vídeos</h2>
                </div>
                <p className="text-lg text-slate-400 mb-4">
                  Digite qualquer texto e seu avatar vai falar com sua voz clonada. Crie vídeos ilimitados para redes sociais, vendas ou atendimento.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    Vídeos em até 2 minutos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    Qualidade Full HD (1080p)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    Download direto ou compartilhamento
                  </li>
                </ul>
              </div>
              <Card className="flex-1 p-8 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-center h-64 bg-slate-900/50 rounded-lg">
                  <div className="text-center">
                    <Video className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <p className="text-slate-400">Seu vídeo aparecerá aqui</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-white">Automatize tudo</h2>
                </div>
                <p className="text-lg text-slate-400 mb-4">
                  Conecte seu WhatsApp Business e configure automações. Seu avatar vai responder clientes, gerar vendas e enviar vídeos automaticamente.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    Respostas automáticas 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    Detecção de intenção de compra
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    Geração automática de checkouts
                  </li>
                </ul>
              </div>
              <Card className="flex-1 p-8 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-center h-64 bg-slate-900/50 rounded-lg">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <p className="text-slate-400">Automações ativas</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Crie seu avatar digital em menos de 5 minutos
            </p>
            <Link href="/registro">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-12 py-6">
                Criar Meu Avatar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
