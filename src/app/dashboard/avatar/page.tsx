"use client";

import { useState } from "react";
import { Upload, User, Mic, Sparkles, CheckCircle, XCircle, Loader2 } from "lucide-react";

type AvatarStatus = "idle" | "uploading" | "processing" | "ready" | "error";

export default function AvatarPage() {
  const [status, setStatus] = useState<AvatarStatus>("idle");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [personality, setPersonality] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!photoFile || !audioFile || !personality) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Simulação de upload e processamento
    setStatus("uploading");
    
    setTimeout(() => {
      setStatus("processing");
    }, 2000);

    setTimeout(() => {
      setStatus("ready");
    }, 5000);
  };

  const getStatusDisplay = () => {
    switch (status) {
      case "uploading":
        return {
          icon: <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />,
          title: "Fazendo Upload...",
          description: "Enviando seus arquivos para o servidor",
          color: "from-blue-500 to-cyan-500",
        };
      case "processing":
        return {
          icon: <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />,
          title: "Processando Avatar...",
          description: "Estamos criando seu avatar digital. Isso pode levar alguns minutos.",
          color: "from-purple-500 to-pink-500",
        };
      case "ready":
        return {
          icon: <CheckCircle className="w-12 h-12 text-green-500" />,
          title: "Avatar Criado com Sucesso! 🎉",
          description: "Seu avatar está pronto para uso. Você pode testá-lo no chat.",
          color: "from-green-500 to-emerald-500",
        };
      case "error":
        return {
          icon: <XCircle className="w-12 h-12 text-red-500" />,
          title: "Erro ao Criar Avatar",
          description: "Ocorreu um erro durante o processamento. Tente novamente.",
          color: "from-red-500 to-orange-500",
        };
      default:
        return null;
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Criar Meu Avatar
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Upload de foto e áudio para criar seu avatar digital
            </p>
          </div>
        </div>
      </div>

      {/* Status Display */}
      {statusDisplay && (
        <div className={`bg-gradient-to-r ${statusDisplay.color} bg-opacity-10 border-2 border-current rounded-2xl p-8`}>
          <div className="flex flex-col items-center text-center space-y-4">
            {statusDisplay.icon}
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              {statusDisplay.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-md">
              {statusDisplay.description}
            </p>
            {status === "ready" && (
              <button
                onClick={() => window.location.href = "/dashboard/chat"}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Ir para o Chat
              </button>
            )}
            {status === "error" && (
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Tentar Novamente
              </button>
            )}
          </div>
        </div>
      )}

      {/* Form */}
      {status === "idle" && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload de Foto */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <User className="w-6 h-6 mr-2 text-purple-500" />
              1. Upload de Foto
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Envie uma foto sua de frente, com boa iluminação e fundo neutro
            </p>
            
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <label htmlFor="photo" className="cursor-pointer">
                {photoPreview ? (
                  <div className="space-y-4">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-purple-500"
                    />
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Clique para alterar a foto
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        Clique para fazer upload
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        PNG, JPG até 10MB
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Upload de Áudio */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <Mic className="w-6 h-6 mr-2 text-blue-500" />
              2. Upload de Áudio (30-60 segundos)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Grave um áudio de 30 a 60 segundos falando naturalmente para clonar sua voz
            </p>
            
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                id="audio"
                accept="audio/*"
                onChange={handleAudioChange}
                className="hidden"
              />
              <label htmlFor="audio" className="cursor-pointer">
                {audioFile ? (
                  <div className="space-y-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        {audioFile.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Clique para alterar o áudio
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Mic className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        Clique para fazer upload
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        MP3, WAV, M4A até 20MB
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Personalidade do Avatar */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-pink-500" />
              3. Personalidade do Avatar
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Descreva como você quer que seu avatar se comporte e responda
            </p>
            
            <textarea
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Ex: Sou um profissional de marketing digital, especializado em redes sociais. Gosto de responder de forma amigável e usar exemplos práticos. Meu tom é descontraído mas profissional..."
              className="w-full h-40 px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Quanto mais detalhes, melhor será a personalização do seu avatar
            </p>
          </div>

          {/* Submit Button */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <button
              type="submit"
              disabled={!photoFile || !audioFile || !personality}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-6 h-6" />
              <span>Criar Meu Avatar</span>
            </button>
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
              O processamento pode levar de 5 a 10 minutos
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
