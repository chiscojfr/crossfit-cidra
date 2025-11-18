import { motion } from 'framer-motion'

const Programs = () => {
  const plans = [
    {
      name: 'Ilimitado',
      price: 'Ver Precio',
      period: '',
      description: 'La mejor opción para resultados máximos',
      features: [
        'Clases ilimitadas por 4 semanas',
        'Acceso completo a instalaciones',
        'Entrenadores certificados',
        'Programación personalizada',
        'Comunidad de apoyo',
        'Eventos especiales',
      ],
      popular: true,
      link: 'https://xwausy.pushpress.com/landing/plans/plan_ac6876811c7f4d',
    },
    {
      name: '12 Clases',
      price: 'Ver Precio',
      period: '',
      description: 'Perfecto para comenzar tu viaje fitness',
      features: [
        '12 clases por 4 semanas',
        'Acceso a instalaciones',
        'Entrenadores certificados',
        'Comunidad de apoyo',
        'Evaluación inicial',
        'Flexibilidad de horarios',
      ],
      popular: false,
      link: 'https://xwausy.pushpress.com/landing/plans/plan_00d3aac4797e48',
    },
    {
      name: 'Plan Familiar',
      price: 'Ver Precio',
      period: '',
      description: 'Entrena con toda tu familia',
      features: [
        'Plan para toda la familia',
        'Clases por 4 semanas',
        'Acceso completo a instalaciones',
        'Entrenadores certificados',
        'Programación adaptada',
        'Descuento familiar',
      ],
      popular: false,
      link: 'https://xwausy.pushpress.com/landing/plans/plan_1004613afad547',
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

        {/* Free Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <a
            href="https://xwausy.pushpress.com/landing/plans/plan_f24c409cc4e545"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-primary to-red-700 p-8 md:p-12 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.02] border-2 border-primary"
          >
            <div className="text-center">
              <div className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-sm uppercase mb-4">
                ¡Oferta Especial!
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                Primera Semana GRATIS
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Prueba Gratuita de 3 Clases
              </p>
              <div className="flex items-center justify-center gap-3 text-white/90 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sin compromiso</span>
                <span className="text-white/50">•</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Comenzar Prueba Gratis →
              </div>
            </div>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-dark rounded-2xl p-8 border-2 ${
                plan.popular
                  ? 'border-primary shadow-2xl shadow-primary/20 md:transform md:scale-105'
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
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-dark-lighter hover:bg-gray-800 text-white border-2 border-gray-700'
                }`}
              >
                Inscribirse Ahora
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Otros <span className="text-primary">Planes</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'First Responder y Estudiantes',
                description: 'Plan especial para primeros respondedores y estudiantes',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_d047ed7eb07f4a',
              },
              {
                name: 'Open Gym Ilimitado',
                description: 'Acceso ilimitado al gimnasio por 4 semanas',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_c09529a8621d4f',
              },
              {
                name: 'Entrenamiento Personal',
                description: 'Sesiones personalizadas uno a uno',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_1cddf6d9799443',
              },
              {
                name: 'Drop-in Day Pass',
                description: 'Pase de un día para visitantes',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_4vbfqheh0exoe5',
              },
              {
                name: '1 Semana',
                description: 'Plan de prueba por una semana',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_c037c58d10f24f',
              },
              {
                name: 'Especial 3 Meses',
                description: 'Compromiso de 3 meses con descuento',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_4fc82c11b2c34c',
              },
              {
                name: 'Especial 6 Meses',
                description: 'Compromiso de 6 meses con mayor descuento',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_7b75ae5881ff4e',
              },
              {
                name: 'Especial 12 Meses',
                description: 'Compromiso anual con el mejor precio',
                link: 'https://xwausy.pushpress.com/landing/plans/plan_d191e3f4d76a44',
              },
            ].map((plan, index) => (
              <motion.a
                key={index}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {plan.name}
                </h4>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-center text-primary font-semibold">
                  Ver Detalles
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

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

