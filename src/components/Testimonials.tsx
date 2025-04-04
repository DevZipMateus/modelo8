
import React from 'react';

const clients = [
  {
    id: 1,
    name: 'Connectta Construções',
    logo: '/lovable-uploads/85768f32-4b9e-475e-a910-18f52c230057.png',
    logoPosition: 'object-left',
  },
  {
    id: 2,
    name: 'STX Marine Service',
    logo: '/lovable-uploads/85768f32-4b9e-475e-a910-18f52c230057.png',
    logoPosition: 'object-center-left',
  },
  {
    id: 3,
    name: 'GB Consultoria',
    logo: '/lovable-uploads/85768f32-4b9e-475e-a910-18f52c230057.png',
    logoPosition: 'object-center-right',
  },
  {
    id: 4,
    name: 'LCD Engenharia',
    logo: '/lovable-uploads/85768f32-4b9e-475e-a910-18f52c230057.png',
    logoPosition: 'object-right',
  },
];

const Testimonials = () => {
  return (
    <section id="clients" className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ds3-dark mb-6">Nossos Principais Clientes</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="bg-white shadow-sm hover:shadow-md transition-all p-8 rounded-lg flex items-center justify-center h-48"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className={`max-h-32 ${client.logoPosition}`}
                style={{
                  objectFit: 'contain',
                  objectPosition: client.logoPosition === 'object-left' ? '0% 50%' : 
                                 client.logoPosition === 'object-center-left' ? '33% 50%' :
                                 client.logoPosition === 'object-center-right' ? '66% 50%' : '100% 50%'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
