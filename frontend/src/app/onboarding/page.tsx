"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Mic, 
  Image as ImageIcon, 
  Check, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Play,
  Pause
} from "lucide-react";
import { toast } from "sonner";

const STEPS = [
  { id: 1, title: "Informações Básicas", description: "Nome e email" },
  { id: 2, title: "Foto do Avatar", description: "Upload da sua foto" },
  { id: 3, title: "Gravação de Voz", description: "Clone sua voz" },
  { id: 4, title: "Personalidade", description: "Configure seu avatar" },
  { id: 5, title: "Termos e Consentimento", description: "Aceite os termos" },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null as File | null,
    audio: null as File | null,
    personality: "",
    termsAccepted: false,
    voiceConsent: false,
    imageConsent: false,
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = () => {
    // Validações básicas
    if (currentStep === 1 && (!formData.name || !formData.email)) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    if (currentStep === 2 && !formData.photo) {
      toast.error("Faça upload da sua foto");
      return;
    }
    if (currentStep === 3 && !formData.audio) {
      toast.error("Grave ou faça upload do seu áudio");
      return;
    }
    if (currentStep === 5 && (!formData.termsAccepted || !formData.voiceConsent || !formData.imageConsent)) {
      toast.error("Você precisa aceitar todos os termos");
      return;
    }

    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    toast.success("Avatar criado com sucesso! Redirecionando...");
    // Aqui você faria a chamada para a API
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Arquivo muito grande. Máximo 10MB");
        return;
      }
      setFormData({ ...formData, photo: file });
      toast.success("Foto carregada com sucesso!");
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast.error("Arquivo muito grande. Máximo 50MB");
        return;
      }
      const audio = new Audio(URL.createObjectURL(file));
      audio.addEventListener("loadedmetadata", () => {
        if (audio.duration < 30 || audio.duration > 120) {
          toast.error("O áudio deve ter entre 30 e 120 segundos");
          return;
        }
        setFormData({ ...formData, audio: file });
        toast.success("Áudio carregado com sucesso!");
      });
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      toast.success("Gravação iniciada!");
      // Aqui você implementaria a lógica real de gravação
    } catch (error) {
      toast.error("Erro ao acessar o microfone");
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    toast.success("Gravação finalizada!");
    // Aqui você salvaria o áudio gravado
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Criar Meu Avatar</h1>
          </div>
          <p className="text-slate-400">
            Siga os passos abaixo para criar seu avatar digital em minutos
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`flex-1 text-center ${
                  step.id === currentStep ? "text-cyan-400" : step.id < currentStep ? "text-green-400" : "text-slate-500"
                }`}
              >
                <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center border-2 ${
                  step.id === currentStep ? "border-cyan-400 bg-cyan-400/10" : 
                  step.id < currentStep ? "border-green-400 bg-green-400/10" : "border-slate-700"
                }`}>
                  {step.id < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-bold">{step.id}</span>
                  )}
                </div>
                <div className="hidden md:block text-xs font-medium">{step.title}</div>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="p-8 bg-slate-800/50 border-slate-700 mb-8">
          {/* Step 1: Informações Básicas */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Informações Básicas</h2>
                <p className="text-slate-400">Vamos começar com suas informações de contato</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Nome Completo *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Telefone (opcional)</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Foto do Avatar */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Foto do Avatar</h2>
                <p className="text-slate-400">Faça upload de uma foto clara do seu rosto</p>
              </div>

              <div className="border-2 border-dashed border-slate-700 rounded-lg p-12 text-center hover:border-cyan-500 transition">
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  {formData.photo ? (
                    <div className="space-y-4">
                      <div className="w-32 h-32 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="w-16 h-16 text-green-400" />
                      </div>
                      <p className="text-white font-medium">{formData.photo.name}</p>
                      <Button variant="outline" className="border-slate-700">
                        Trocar Foto
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 flex items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-2">Clique para fazer upload</p>
                        <p className="text-sm text-slate-400">PNG, JPG até 10MB</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-sm text-cyan-400">
                  <strong>Dica:</strong> Use uma foto com boa iluminação, fundo neutro e olhando para a câmera.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Gravação de Voz */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Gravação de Voz</h2>
                <p className="text-slate-400">Grave 30-60 segundos da sua voz ou faça upload de um áudio</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Gravação */}
                <Card className="p-6 bg-slate-900 border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-cyan-400" />
                    Gravar Agora
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                        isRecording ? "bg-red-500/20 animate-pulse" : "bg-slate-800"
                      }`}>
                        <Mic className={`w-12 h-12 ${isRecording ? "text-red-400" : "text-slate-400"}`} />
                      </div>
                      {isRecording && (
                        <p className="text-white mt-4 font-mono">{recordingTime}s</p>
                      )}
                    </div>
                    <Button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`w-full ${
                        isRecording ? "bg-red-500 hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"
                      }`}
                    >
                      {isRecording ? (
                        <>
                          <Pause className="mr-2 w-4 h-4" />
                          Parar Gravação
                        </>
                      ) : (
                        <>
                          <Mic className="mr-2 w-4 h-4" />
                          Iniciar Gravação
                        </>
                      )}
                    </Button>
                  </div>
                </Card>

                {/* Upload */}
                <Card className="p-6 bg-slate-900 border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Upload className="w-5 h-5 text-cyan-400" />
                    Fazer Upload
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="file"
                      id="audio-upload"
                      accept="audio/*"
                      onChange={handleAudioUpload}
                      className="hidden"
                    />
                    <label htmlFor="audio-upload" className="cursor-pointer">
                      <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-cyan-500 transition">
                        {formData.audio ? (
                          <div className="space-y-2">
                            <Check className="w-12 h-12 text-green-400 mx-auto" />
                            <p className="text-white text-sm">{formData.audio.name}</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-12 h-12 text-slate-400 mx-auto" />
                            <p className="text-white text-sm">Clique para fazer upload</p>
                            <p className="text-xs text-slate-400">MP3, WAV, M4A até 50MB</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </Card>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-sm text-cyan-400">
                  <strong>Dica:</strong> Leia um texto natural, com entonação variada. Evite ruídos de fundo.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Personalidade */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Personalidade do Avatar</h2>
                <p className="text-slate-400">Como seu avatar deve se comportar nas conversas?</p>
              </div>

              <div>
                <Label htmlFor="personality" className="text-white">Descreva a personalidade</Label>
                <textarea
                  id="personality"
                  rows={6}
                  placeholder="Ex: Sou um profissional de vendas amigável e prestativo. Gosto de ajudar as pessoas a encontrar soluções. Uso uma linguagem clara e objetiva..."
                  value={formData.personality}
                  onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 bg-slate-900 border-slate-700 cursor-pointer hover:border-cyan-500 transition">
                  <h4 className="font-bold text-white mb-2">Vendedor</h4>
                  <p className="text-sm text-slate-400">Persuasivo, amigável e focado em resultados</p>
                </Card>
                <Card className="p-4 bg-slate-900 border-slate-700 cursor-pointer hover:border-cyan-500 transition">
                  <h4 className="font-bold text-white mb-2">Atendimento</h4>
                  <p className="text-sm text-slate-400">Paciente, empático e solucionador</p>
                </Card>
                <Card className="p-4 bg-slate-900 border-slate-700 cursor-pointer hover:border-cyan-500 transition">
                  <h4 className="font-bold text-white mb-2">Educador</h4>
                  <p className="text-sm text-slate-400">Didático, claro e inspirador</p>
                </Card>
              </div>
            </div>
          )}

          {/* Step 5: Termos */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Termos e Consentimento</h2>
                <p className="text-slate-400">Leia e aceite os termos para continuar</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, termsAccepted: checked as boolean })
                    }
                  />
                  <label htmlFor="terms" className="text-sm text-slate-300 cursor-pointer">
                    Eu li e aceito os <a href="#" className="text-cyan-400 hover:underline">Termos de Uso</a> e a{" "}
                    <a href="#" className="text-cyan-400 hover:underline">Política de Privacidade</a>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="voice-consent"
                    checked={formData.voiceConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, voiceConsent: checked as boolean })
                    }
                  />
                  <label htmlFor="voice-consent" className="text-sm text-slate-300 cursor-pointer">
                    Autorizo o uso da minha voz para síntese e clonagem de voz através de inteligência artificial
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="image-consent"
                    checked={formData.imageConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, imageConsent: checked as boolean })
                    }
                  />
                  <label htmlFor="image-consent" className="text-sm text-slate-300 cursor-pointer">
                    Autorizo o uso da minha imagem para geração de vídeos através de inteligência artificial
                  </label>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-sm text-yellow-400">
                  <strong>Importante:</strong> Seu avatar será claramente identificado como automatizado. 
                  É proibido o uso para fraude, diagnósticos médicos ou jurídicos.
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={handleBack}
            disabled={currentStep === 1}
            variant="outline"
            className="border-slate-700 text-white"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          >
            {currentStep === STEPS.length ? "Criar Avatar" : "Próximo"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
