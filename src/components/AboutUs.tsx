import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-ds3-gold/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1538592116845-119a26d80a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Equipe de produção de uniformes" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-ds3-gold rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade garantida</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-ds3-dark rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Diversos setores</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação dos clientes</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-ds3-gold/10 text-ds3-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Excelência em uniformes profissionais e soluções têxteis
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A DS3 Engenharia é especializada na confecção de uniformes profissionais e oferece diversas soluções para vários setores do mercado. 
              Fabricamos uniformes personalizados com silk ou bordado, adaptados aos padrões e necessidades de cada cliente.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossa linha de produtos inclui macacões, calças, jalecos, camisas e blusas polo (masculino e feminino), 
              além de uniformes de proteção NR10 Risco 2. Também oferecemos uma linha completa de enxovais para os setores hospitalar, offshore e onshore.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-ds3-gold/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ds3-dark" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Soluções Personalizadas</h4>
                  <p className="text-gray-600">Uniformes e enxovais adaptados às necessidades específicas de cada cliente</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-ds3-gold/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ds3-dark" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Qualidade e Segurança</h4>
                  <p className="text-gray-600">Produtos confeccionados com materiais de alta qualidade, garantindo durabilidade e proteção</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-ds3-gold/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-ds3-dark" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Conformidade com Normas</h4>
                  <p className="text-gray-600">Uniformes de proteção em conformidade com as vestimentas NR10</p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;