import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const AboutUs = () => {
  return <>
      {/* Light Section - Somos Especialistas */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Somos Especialistas</h2>
              <p className="mb-4 sm:mb-6 text-gray-950 text-sm sm:text-base leading-relaxed">
                Confecção de uniformes profissionais e diversas soluções para vários setores do mercado.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                  Fabricamos uniformes personalizados com silk ou bordado, adaptados aos padrões e necessidades de cada cliente. 
                  Nossa linha de produtos inclui macacões, calças, jalecos, camisas e blusas polo (masculino e feminino), 
                  além de uniformes de proteção NR 10 Risco 2, especialmente projetados para garantir máxima segurança 
                  em ambientes de risco elétrico e atender aos rigorosos padrões da indústria.
                </p>
                
                <div className="p-4 sm:p-6 rounded-lg border-l-4 border-ds3-gold bg-gray-300">
                  <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
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
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Soluções Personalizadas</h4>
                    <p className="text-zinc-950 text-sm sm:text-base">Uniformes adaptados às necessidades específicas de cada cliente</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Qualidade e Segurança</h4>
                    <p className="text-zinc-950 text-sm sm:text-base">Materiais de alta qualidade para durabilidade e proteção</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="bg-ds3-gold/20 w-full h-full absolute -left-3 sm:-left-6 -top-3 sm:-top-6 rounded-lg"></div>
                <img src="public/lovable-uploads/6264b6b2-1969-4152-ad50-5b330a3c76dd.png" alt="Trabalhadora em armazém com tablet" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-64 sm:h-80 lg:h-96" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Section - Nossa Tecnologia */}
      <section id="technology" className="py-12 sm:py-16 lg:py-20 text-white bg-transparent">
        <div className="container-custom px-4">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Nossa Tecnologia</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <img alt="Trabalhador offshore com equipamento de proteção em plataforma petrolífera" className="rounded-lg w-full object-cover h-64 sm:h-80 lg:h-96" src="/lovable-uploads/a7843544-f0fb-403c-a7e1-040baedbbb2e.jpg" />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="lg:w-1/2 space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                As roupas são confeccionadas com tecido 100% algodão tratado para garantir a 
                proteção antichamas (contra fogo repentino e arco elétrico). A tecnologia conta 
                com camisa, calça, macacão e jaqueta antichamas.
              </p>
              
              <Card className="bg-ds3-dark border border-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-ds3-gold font-medium mb-2 text-sm sm:text-base">ATPV - Arch Thermal Performance Value</p>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    As roupas são classificadas pelo ATPV – Arch Thermal Performance Value, que é 
                    a quantidade de calor, em cal/cm² que a roupa suporta diante do risco.
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                O arco elétrico pode alcançar diversos níveis de intensidade do calor emitido, o 
                que confere a necessidade de um ATPV nas vestimentas de acordo com a 
                possível potência do calor gerado.
              </p>
              
              <div className="bg-ds3-gold/10 p-4 sm:p-6 rounded-lg border-l-4 border-ds3-gold">
                <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
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