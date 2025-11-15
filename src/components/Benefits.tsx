import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      title: 'Mejora tu Salud Física',
      description: 'Aumenta fuerza, resistencia, flexibilidad y coordinación',
      icon: '💪',
    },
    {
      title: 'Salud Mental',
      description: 'Reduce estrés, mejora el estado de ánimo y aumenta la confianza',
      icon: '🧠',
    },
    {
      title: 'Comunidad',
      description: 'Únete a una familia que te apoya y motiva cada día',
      icon: '👥',
    },
    {
      title: 'Resultados Reales',
      description: 'Transformaciones visibles en semanas, no meses',
      icon: '📈',
    },
    {
      title: 'Entrenamiento Completo',
      description: 'Trabaja todo tu cuerpo en cada sesión',
      icon: '🎯',
    },
    {
      title: 'Flexibilidad de Horarios',
      description: 'Clases durante todo el día para adaptarse a tu vida',
      icon: '⏰',
    },
  ]

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            <span className="text-primary">Beneficios</span> de CrossFit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo CrossFit puede transformar tu vida física y mentalmente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-dark-lighter p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Comenzar tu Transformación?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de personas que ya están alcanzando sus metas en CrossFit Cidra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Agenda tu Clase Gratis
            </a>
            <a
              href="#planes"
              className="bg-white hover:bg-gray-100 text-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Ver Planes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

