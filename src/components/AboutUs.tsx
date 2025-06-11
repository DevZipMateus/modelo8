import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const AboutUs = () => {
  return <>
      {/* Light Section - Somos Especialistas */}
      <section id="about" className="py-20 bg-transparent">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Somos Especialistas</h2>
              <p className="mb-6 text-gray-950">
                Confecção de uniformes profissionais e diversas soluções para vários setores do mercado.
              </p>
              
              <div className="space-y-6 mb-6">
                <p className="text-zinc-950">
                  Fabricamos uniformes personalizados com silk ou bordado, adaptados aos padrões e necessidades de cada cliente. 
                  Nossa linha de produtos inclui macacões, calças, jalecos, camisas e blusas polo (masculino e feminino), 
                  além de uniformes de proteção NR 10 Risco 2, especialmente projetados para garantir máxima segurança 
                  em ambientes de risco elétrico e atender aos rigorosos padrões da indústria.
                </p>
                
                <div className="p-6 rounded-lg border-l-4 border-ds3-gold bg-gray-300">
                  <p className="text-zinc-950">
                    Oferecemos também uma linha completa de enxovais para o setor hospitalar, 
                    com itens como campo cirúrgico, avental cirúrgico e conjuntos especializados, 
                    todos produzidos com tecidos de alta durabilidade e resistência a lavagens industriais. 
                    Para atender aos setores offshore e onshore, disponibilizamos uma ampla gama de itens, 
                    incluindo toalhas, lençóis, edredons e protetores, desenvolvidos para oferecer 
                    conforto e praticidade em ambientes desafiadores.
                  </p>
                </div>
              </div>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Soluções Personalizadas</h4>
                    <p className="text-zinc-950">Uniformes adaptados às necessidades específicas de cada cliente</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Qualidade e Segurança</h4>
                    <p className="text-zinc-950">Materiais de alta qualidade para durabilidade e proteção</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-ds3-gold/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
                <img src="public/lovable-uploads/6264b6b2-1969-4152-ad50-5b330a3c76dd.png" alt="Trabalhadora em armazém com tablet" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Section - Nossa Tecnologia */}
      <section id="technology" className="py-20 text-white bg-transparent">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Nossa Tecnologia</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img src="public/lovable-uploads/316e393f-ec3b-4147-a10b-0b6f433bf9b1.png" alt="Trabalhador offshore com equipamento de proteção em plataforma petrolífera" className="rounded-lg w-full object-cover h-[400px]" />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="lg:w-1/2 space-y-6">
              <p className="text-zinc-950">
                As roupas são confeccionadas com tecido 100% algodão tratado para garantir a 
                proteção antichamas (contra fogo repentino e arco elétrico). A tecnologia conta 
                com camisa, calça, macacão e jaqueta antichamas.
              </p>
              
              <Card className="bg-ds3-dark border border-gray-700">
                <CardContent className="p-6">
                  <p className="text-ds3-gold font-medium mb-2">ATPV - Arch Thermal Performance Value</p>
                  <p className="text-white">
                    As roupas são classificadas pelo ATPV – Arch Thermal Performance Value, que é 
                    a quantidade de calor, em cal/cm² que a roupa suporta diante do risco.
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-zinc-950">
                O arco elétrico pode alcançar diversos níveis de intensidade do calor emitido, o 
                que confere a necessidade de um ATPV nas vestimentas de acordo com a 
                possível potência do calor gerado.
              </p>
              
              <div className="bg-ds3-gold/10 p-6 rounded-lg border-l-4 border-ds3-gold">
                <p className="text-zinc-950">
                  <strong>A regra para escolher a melhor opção é:</strong> quanto maior a intensidade de calor 
                  emitida pelo risco 2, maior deve ser o ATPV fornecido pelas vestimenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default AboutUs;