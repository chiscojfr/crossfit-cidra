import { motion } from 'framer-motion'

const WhatIsCrossFit = () => {
  const features = [
    {
      title: 'Entrenamiento Funcional',
      description: 'Movimientos naturales que mejoran tu vida diaria',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Alta Intensidad',
      description: 'Maximiza resultados en menos tiempo',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Constantemente Variado',
      description: 'Nunca te aburrirás, siempre un nuevo desafío',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ]

  return (
    <section id="que-es-crossfit" className="py-20 md:py-32 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            ¿Qué es <span className="text-primary">CrossFit</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CrossFit es un programa de entrenamiento de fuerza y acondicionamiento físico
            que combina movimientos funcionales de alta intensidad constantemente variados.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Para <span className="text-primary">Todos</span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">Sin restricciones de edad o condición física.</strong> CrossFit
                es escalable para cualquier persona, desde principiantes hasta atletas de élite.
              </p>
              <p className="text-lg">
                Nuestros entrenadores certificados adaptan cada ejercicio a tu nivel actual,
                asegurando que progreses de manera segura y efectiva.
              </p>
              <p className="text-lg">
                Ya sea que tengas 18 u 80 años, estés comenzando tu viaje fitness o seas
                un atleta experimentado, <strong className="text-white">CrossFit es para ti</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
                alt="CrossFit Training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-black mb-1">10+</div>
              <div className="text-sm uppercase tracking-wide">Años de Experiencia</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsCrossFit

