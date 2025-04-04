
import React from 'react';
import { Target, ThumbsUp, Users, Award, ShieldCheck, UserCheck } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section bg-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Nossa Missão */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6">
              <Target className="w-16 h-16 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold text-ds3-dark mb-6">Nossa Missão</h2>
            <p className="text-gray-600 text-lg mb-4">
              A nossa missão é proteger vidas, oferecendo produtos com qualidade, 
              desenvolvidos de forma inovadora e com atendimento ágil às necessidade dos 
              nossos consumidores.
            </p>
            <p className="text-gray-600 text-lg">
              A D3S Engenharia traz inovação, sempre garantindo conforto e maior proteção 
              em conformidade com as vestimentas NR10, para os usuário da indústria, do 
              segmento de óleo e gás, entre outros.
            </p>
          </div>
          
          {/* Nossos Valores */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <ThumbsUp className="w-16 h-16 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold text-ds3-dark mb-8">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Clientes */}
              <div className="flex">
                <div className="bg-ds3-gold/40 p-4 mr-4 flex items-center justify-center rounded-md">
                  <Users className="w-8 h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Clientes</h3>
                  <p className="text-gray-600">Sempre priorizar os nossos clientes.</p>
                </div>
              </div>
              
              {/* Responsabilidade */}
              <div className="flex">
                <div className="bg-ds3-gold/40 p-4 mr-4 flex items-center justify-center rounded-md">
                  <ShieldCheck className="w-8 h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Responsabilidade</h3>
                  <p className="text-gray-600">Entregas com responsabilidade.</p>
                </div>
              </div>
              
              {/* Excelência */}
              <div className="flex">
                <div className="bg-ds3-gold/40 p-4 mr-4 flex items-center justify-center rounded-md">
                  <Award className="w-8 h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Excelência</h3>
                  <p className="text-gray-600">Focar nos clientes.</p>
                </div>
              </div>
              
              {/* Ética */}
              <div className="flex">
                <div className="bg-ds3-gold/40 p-4 mr-4 flex items-center justify-center rounded-md">
                  <UserCheck className="w-8 h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Ética</h3>
                  <p className="text-gray-600">Preço justo.</p>
                </div>
              </div>
              
              {/* Trabalho em Equipe */}
              <div className="flex md:col-span-2 md:max-w-xs">
                <div className="bg-ds3-gold/40 p-4 mr-4 flex items-center justify-center rounded-md">
                  <Users className="w-8 h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Trabalho em Equipe</h3>
                  <p className="text-gray-600">Qualidade e desenvolvimento.</p>
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
