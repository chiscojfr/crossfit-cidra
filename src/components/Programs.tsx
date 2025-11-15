import { motion } from 'framer-motion'

const Programs = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$79',
      period: '/mes',
      description: 'Perfecto para comenzar tu viaje fitness',
      features: [
        '8 clases al mes',
        'Acceso a instalaciones',
        'Entrenadores certificados',
        'Comunidad de apoyo',
        'Evaluación inicial',
      ],
      popular: false,
    },
    {
      name: 'Ilimitado',
      price: '$129',
      period: '/mes',
      description: 'La mejor opción para resultados máximos',
      features: [
        'Clases ilimitadas',
        'Acceso completo a instalaciones',
        'Entrenadores certificados',
        'Programación personalizada',
        'Evaluación mensual',
        'Nutrición básica',
        'Eventos especiales',
      ],
      popular: true,
    },
    {
      name: 'Personal',
      price: '$199',
      period: '/mes',
      description: 'Atención personalizada uno a uno',
      features: [
        'Clases ilimitadas',
        '4 sesiones personales/mes',
        'Plan de nutrición completo',
        'Programación personalizada',
        'Evaluaciones semanales',
        'Acceso prioritario',
        'Soporte 24/7',
      ],
      popular: false,
    },
  ]

  return (
    <section id="planes" className="py-20 md:py-32 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Planes y <span className="text-primary">Precios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos y estilo de vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-dark rounded-2xl p-8 border-2 ${
                plan.popular
                  ? 'border-primary shadow-2xl shadow-primary/20 transform scale-105'
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-1 rounded-full text-sm font-bold uppercase">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-5xl font-black text-primary">{plan.price}</span>
                  <span className="text-gray-400 ml-2 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-dark-lighter hover:bg-gray-800 text-white border-2 border-gray-700'
                }`}
              >
                Comenzar Ahora
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-gray-400"
        >
          <p className="text-lg">
            ¿Tienes preguntas? <a href="#contacto" className="text-primary hover:underline">Contáctanos</a> para más información
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs

