"use client";

import Link from "next/link";
import { User, Video, MessageSquare, TrendingUp, AlertCircle, Crown } from "lucide-react";

export default function DashboardPage() {
  // Dados simulados do usuário
  const userData = {
    name: "Usuário",
    plan: "Free",
    avatarsCreated: 0,
    avatarsLimit: 1,
    videosCreated: 0,
    videosLimit: 1,
    messagesThisMonth: 0,
    messagesLimit: 100,
  };

  const stats = [
    {
      name: "Avatares Criados",
      value: `${userData.avatarsCreated}/${userData.avatarsLimit}`,
      icon: User,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Vídeos Gerados",
      value: `${userData.videosCreated}/${userData.videosLimit}`,
      icon: Video,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mensagens (mês)",
      value: `${userData.messagesThisMonth}/${userData.messagesLimit}`,
      icon: MessageSquare,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Plano Atual",
      value: userData.plan,
      icon: Crown,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-2">
          Bem-vindo ao Meu Eu 2.0! 👋
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Crie seu avatar digital e automatize seu atendimento
        </p>
      </div>

      {/* Aviso de limite do plano */}
      {userData.plan === "Free" && (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
                Você está no Plano Free
              </h3>
              <p className="text-orange-800 dark:text-orange-200 mb-4">
                Limite: 1 avatar, 1 vídeo e 100 mensagens por mês. Faça upgrade para desbloquear mais recursos!
              </p>
              <Link
                href="/planos"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Crown className="w-5 h-5 mr-2" />
                Ver Planos
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              {stat.name}
            </p>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/dashboard/avatar"
            className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <User className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Criar Avatar
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Upload de foto e áudio para criar seu avatar digital
            </p>
          </Link>

          <Link
            href="/dashboard/chat"
            className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <MessageSquare className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Chat com Avatar
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Converse com seu avatar e teste as respostas
            </p>
          </Link>

          <Link
            href="/planos"
            className="group p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <TrendingUp className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Fazer Upgrade
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Desbloqueie recursos ilimitados e integrações
            </p>
          </Link>
        </div>
      </div>

      {/* Status da Conta */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
          Status da Conta
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-slate-700 dark:text-slate-300">Plano Atual</span>
            <span className="font-semibold text-slate-800 dark:text-white">
              {userData.plan}
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-slate-700 dark:text-slate-300">Avatares Disponíveis</span>
            <span className="font-semibold text-slate-800 dark:text-white">
              {userData.avatarsLimit - userData.avatarsCreated} de {userData.avatarsLimit}
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-slate-700 dark:text-slate-300">Vídeos Disponíveis</span>
            <span className="font-semibold text-slate-800 dark:text-white">
              {userData.videosLimit - userData.videosCreated} de {userData.videosLimit}
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-slate-700 dark:text-slate-300">Mensagens Restantes</span>
            <span className="font-semibold text-slate-800 dark:text-white">
              {userData.messagesLimit - userData.messagesThisMonth} de {userData.messagesLimit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
