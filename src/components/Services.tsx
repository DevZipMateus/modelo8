import React from 'react';
import { Shirt, Building, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [{
  id: 1,
  title: 'Linha Profissional',
  description: 'Macacões, calças, jalecos, camisas e blusas polo, masculino e feminino, além de uniformes de proteção NR10 Risco 2.',
  icon: Shirt,
  delay: '0s',
  link: '/linha-profissional'
}, {
  id: 2,
  title: 'Enxoval Offshore e Onshore',
  description: 'Soluções têxteis completas para plataformas marítimas e instalações em terra, com foco em durabilidade e segurança.',
  icon: Building,
  delay: '0.1s',
  link: '/enxoval-offshore'
}, {
  id: 3,
  title: 'Enxoval Hospitalar',
  description: 'Linha completa de produtos têxteis para o setor hospitalar, com garantia de qualidade e adequação às normas sanitárias.',
  icon: HeartPulse,
  delay: '0.2s',
  link: '/enxoval-hospitalar'
}];
const Services = () => {
  return <section id="services" className="section bg-transparent">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-ds3-gold/10 text-ds3-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4 text-shadow-sm">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-shadow-md">
            Soluções têxteis completas para seu negócio
          </h2>
          <p className="text-lg text-shadow text-gray-950">
            Oferecemos produtos especializados para atender às necessidades específicas do seu setor, 
            com qualidade e personalização.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => <div key={service.id} style={{
          animationDelay: service.delay
        }} className="backdrop-blur-sm rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-ds3-gold/30 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in bg-zinc-300">
              <div className="bg-ds3-gold/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-ds3-dark" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-shadow-sm">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-shadow-sm">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-ds3-dark hover:text-ds3-gold font-medium transition-colors duration-300 text-shadow-sm">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>)}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex text-shadow-sm">
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>;
};
export default Services;