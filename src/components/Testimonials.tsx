
import React from 'react';

const clients = [{
  id: 1,
  name: 'Connectta Construções',
  logo: '/lovable-uploads/b9950941-a70e-4ee7-a531-45cbe9bc9316.png',
  logoPosition: 'object-center'
}, {
  id: 2,
  name: 'STX Marine Service',
  logo: '/lovable-uploads/927e0725-56fb-4463-befd-da92c342382b.png',
  logoPosition: 'object-center'
}, {
  id: 3,
  name: 'GB Consultoria',
  logo: '/lovable-uploads/a8116b37-2da2-4557-843f-12e97c5e263a.png',
  logoPosition: 'object-center'
}, {
  id: 4,
  name: 'LCD Engenharia',
  logo: '/lovable-uploads/8bee2908-b9ca-44a1-b4db-e793722d1dce.png',
  logoPosition: 'object-center'
}];

const Testimonials = () => {
  return (
    <section id="clients" className="section py-20 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ds3-dark mb-6 text-shadow-md">Nossos Principais Clientes</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map(client => (
            <div key={client.id} className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all p-8 rounded-lg flex items-center justify-center h-48">
              <img src={client.logo} alt={client.name} className="max-h-32 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
