"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Video,
  MessageSquare,
  TrendingUp,
  Settings,
  Plus,
  Play,
  Download,
  Share2,
  BarChart3,
  Users,
  Zap,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [selectedAvatar, setSelectedAvatar] = useState("avatar-1");

  // Mock data
  const user = {
    name: "João Silva",
    email: "joao@email.com",
    plan: "Pro",
    usage: {
      videos: { used: 15, limit: 50 },
      messages: { used: 1234, limit: 5000 },
    },
  };

  const avatars = [
    {
      id: "avatar-1",
      name: "Meu Avatar Principal",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      status: "active",
      stats: { videos: 45, messages: 1234 },
    },
  ];

  const recentVideos = [
    {
      id: "1",
      title: "Vídeo de Vendas - Produto X",
      thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      duration: 45,
      createdAt: "2024-01-15",
      status: "completed",
    },
    {
      id: "2",
      title: "FAQ - Como Funciona",
      thumbnailUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      duration: 60,
      createdAt: "2024-01-14",
      status: "completed",
    },
  ];

  const integrations = [
    { name: "WhatsApp", icon: MessageCircle, status: "connected", color: "text-green-400" },
    { name: "Instagram", icon: Instagram, status: "disconnected", color: "text-slate-400" },
    { name: "Facebook", icon: Facebook, status: "disconnected", color: "text-slate-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">Meu Eu 2.0</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-white font-medium">{user.name}</p>
              <p className="text-xs text-slate-400">Plano {user.plan}</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                {user.usage.videos.used}/{user.usage.videos.limit}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">Vídeos este mês</p>
            <Progress value={(user.usage.videos.used / user.usage.videos.limit) * 100} className="h-2" />
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                {user.usage.messages.used.toLocaleString()}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">Mensagens processadas</p>
            <Progress value={(user.usage.messages.used / user.usage.messages.limit) * 100} className="h-2" />
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">+23%</span>
            </div>
            <p className="text-slate-400 text-sm">Engajamento</p>
            <p className="text-xs text-green-400 mt-1">↑ vs. mês anterior</p>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">1.2k</span>
            </div>
            <p className="text-slate-400 text-sm">Conversas ativas</p>
            <p className="text-xs text-orange-400 mt-1">↑ 12% esta semana</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Avatar & Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Avatar Card */}
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Meu Avatar</h3>
                <Link href="/avatar/create">
                  <Button size="sm" variant="outline" className="border-slate-700">
                    <Plus className="w-4 h-4 mr-1" />
                    Novo
                  </Button>
                </Link>
              </div>

              {avatars.map((avatar) => (
                <div key={avatar.id} className="space-y-4">
                  <div className="relative">
                    <img
                      src={avatar.photoUrl}
                      alt={avatar.name}
                      className="w-full aspect-square rounded-lg object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/50">
                      <span className="text-xs text-green-400 font-medium">Ativo</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">{avatar.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{avatar.stats.videos} vídeos</span>
                      <span>{avatar.stats.messages} mensagens</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                      <Video className="w-4 h-4 mr-2" />
                      Gerar Vídeo
                    </Button>
                    <Button variant="outline" className="w-full border-slate-700 text-white">
                      <Settings className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </Card>

            {/* Integrations Card */}
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Integrações</h3>
              <div className="space-y-3">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <integration.icon className={`w-5 h-5 ${integration.color}`} />
                      <span className="text-white font-medium">{integration.name}</span>
                    </div>
                    {integration.status === "connected" ? (
                      <span className="text-xs text-green-400 font-medium">Conectado</span>
                    ) : (
                      <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                        Conectar
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <Link href="/integrations">
                <Button className="w-full mt-4" variant="outline" className="border-slate-700 text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Gerenciar Integrações
                </Button>
              </Link>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="videos" className="space-y-6">
              <TabsList className="bg-slate-800/50 border border-slate-700">
                <TabsTrigger value="videos" className="data-[state=active]:bg-slate-700">
                  <Video className="w-4 h-4 mr-2" />
                  Vídeos
                </TabsTrigger>
                <TabsTrigger value="conversations" className="data-[state=active]:bg-slate-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Conversas
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-700">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </TabsTrigger>
              </TabsList>

              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Vídeos Recentes</h3>
                  <Link href="/videos/generate">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Vídeo
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {recentVideos.map((video) => (
                    <Card key={video.id} className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition">
                      <div className="relative">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                          <Button size="icon" className="rounded-full bg-white/20 backdrop-blur-sm">
                            <Play className="w-6 h-6 text-white" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
                          <span className="text-xs text-white">{video.duration}s</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-medium mb-2">{video.title}</h4>
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <span>{video.createdAt}</span>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="h-8 px-2">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 px-2">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Conversations Tab */}
              <TabsContent value="conversations" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Conversas Recentes</h3>
                </div>

                <Card className="p-6 bg-slate-800/50 border-slate-700">
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-white mb-2">Nenhuma conversa ainda</h4>
                    <p className="text-slate-400 mb-6">
                      Conecte o WhatsApp para começar a processar mensagens
                    </p>
                    <Link href="/integrations">
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Conectar WhatsApp
                      </Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Analytics</h3>
                </div>

                <Card className="p-6 bg-slate-800/50 border-slate-700">
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-white mb-2">Em breve</h4>
                    <p className="text-slate-400">
                      Analytics detalhado estará disponível em breve
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
