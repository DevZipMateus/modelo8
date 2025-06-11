
import React from 'react';
import { Target, ThumbsUp, Users, Award, ShieldCheck, UserCheck } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Nossa Missão */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ds3-dark mb-4 sm:mb-6 text-shadow-md">Nossa Missão</h2>
            <p className="text-base sm:text-lg mb-4 text-shadow text-zinc-950 leading-relaxed">
              A nossa missão é proteger vidas, oferecendo produtos com qualidade, 
              desenvolvidos de forma inovadora e com atendimento ágil às necessidade dos 
              nossos consumidores.
            </p>
            <p className="text-base sm:text-lg text-shadow text-zinc-950 leading-relaxed">
              A D3S Engenharia traz inovação, sempre garantindo conforto e maior proteção 
              em conformidade com as vestimentas NR10, para os usuário da indústria, do 
              segmento de óleo e gás, entre outros.
            </p>
          </div>
          
          {/* Nossos Valores */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <ThumbsUp className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 bg-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ds3-dark mb-6 sm:mb-8 text-shadow-md text-center lg:text-left">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Clientes */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Clientes</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Sempre priorizar os nossos clientes.</p>
                </div>
              </div>
              
              {/* Responsabilidade */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Responsabilidade</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Entregas com responsabilidade.</p>
                </div>
              </div>
              
              {/* Excelência */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Excelência</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Focar nos clientes.</p>
                </div>
              </div>
              
              {/* Ética */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Ética</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Preço justo.</p>
                </div>
              </div>
              
              {/* Trabalho em Equipe */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:col-span-2 sm:max-w-xs sm:mx-auto lg:mx-0">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Trabalho em Equipe</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Qualidade e desenvolvimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
