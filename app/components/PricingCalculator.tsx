import React, { useState } from 'react';

const services = [
  { name: 'Website Ranking', basePrice: 500 },
  { name: 'Website Renting', basePrice: 300 },
  { name: 'Website Creation', basePrice: 1000 },
  { name: 'GBP Ranking', basePrice: 400 },
  { name: 'Digital Marketing', basePrice: 600 },
];

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [duration, setDuration] = useState(1);

  const handleServiceToggle = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      const servicePrice = services.find(s => s.name === service)?.basePrice || 0;
      return total + servicePrice * duration;
    }, 0);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">Pricing Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Select Services:</h3>
            <div className="space-y-2">
              {services.map(service => (
                <label key={service.name} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={selectedServices.includes(service.name)}
                    onChange={() => handleServiceToggle(service.name)}
                  />
                  <span>{service.name} (${service.basePrice}/month)</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Duration:</h3>
            <input
              type="range"
              min="1"
              max="12"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="range range-primary"
            />
            <div className="text-center mt-2">{duration} month{duration > 1 ? 's' : ''}</div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-2xl font-bold">Estimated Total: ${calculateTotal()}</p>
          <p className="text-sm text-gray-500 mt-1">For {duration} month{duration > 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  );
}