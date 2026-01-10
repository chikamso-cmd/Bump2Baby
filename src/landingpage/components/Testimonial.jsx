
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Martinez',
    role: 'First time mom',
    text: 'Bump2baby has been my constant companion throughout my pregnancy. The tracking features and community support made me feel confident and never alone.',
    initials: 'SM',
    color: 'bg-blue-500'
  },
  {
    name: 'Emily Chen',
    role: 'Mom of two',
    text: 'The symptom checker gave me peace of mind when I needed it most. Having expert guidance right at my fingertips answered all my questions.',
    initials: 'EC',
    color: 'bg-[#e83e8c]'
  },
  {
    name: 'Jessica Williams',
    role: 'Expecting mother',
    text: 'Finding the right hospital was so easy with Bump2baby. The map feature is beautifully designed and helped me find a highly-rated care facility.',
    initials: 'JW',
    color: 'bg-purple-600'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by parents <span className="text-[#007bff]">everywhere</span>
          </h2>
          <p className="text-lg text-gray-500">Join thousands of families who trust Bump2baby for their journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" className="text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
