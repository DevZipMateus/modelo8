
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-ds3-gold/20 text-ds3-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/552221412489" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-ds3-gold p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-ds3-dark" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Telefone</h3>
              <p className="text-neutral-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+552221412489"
                className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(22) 2141-2489</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-ds3-dark p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-ds3-gold" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-mail</h3>
              <p className="text-neutral-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:contato@d3sengenharia.com.br"
                className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>contato@d3sengenharia.com.br</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-neutral-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-ds3-dark" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                  <p className="text-neutral-600">R. Elísio Dias Curvelo, 211 - Parque Aeroporto, Macaé - RJ, 27963-604</p>
                  <a 
                    href="https://www.google.com/maps/place/R.+El%C3%ADsio+Dias+Curvelo,+211+-+Parque+Aeroporto,+Maca%C3%A9+-+RJ,+27963-604,+Brasil/@-22.338085,-41.758262,12z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ds3-dark hover:text-ds3-gold transition-colors duration-300 mt-2 inline-block"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="w-full h-64 mt-4 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps?q=R.+El%C3%ADsio+Dias+Curvelo,+211+-+Parque+Aeroporto+Maca%C3%A9+-+RJ+27963-604&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da DS3 Engenharia"
                ></iframe>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Segunda - Sexta:</span>
                  <span className="font-medium text-neutral-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sábado:</span>
                  <span className="font-medium text-neutral-900">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Domingo:</span>
                  <span className="font-medium text-neutral-900">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
