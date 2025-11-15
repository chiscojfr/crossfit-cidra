import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      age: 35,
      role: 'Miembro desde 2022',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
      quote: 'CrossFit Cidra cambió mi vida completamente. Perdí 30 libras y gané una familia increíble. Los entrenadores son excepcionales y siempre me motivan a dar lo mejor de mí.',
      results: 'Perdió 30 lbs en 6 meses',
    },
    {
      name: 'Carlos Rodríguez',
      age: 42,
      role: 'Miembro desde 2021',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070',
      quote: 'Nunca pensé que a mis 42 años estaría en la mejor forma de mi vida. El ambiente es increíble y cada clase es un nuevo desafío. ¡Totalmente recomendado!',
      results: 'Mejoró su salud cardiovascular 40%',
    },
    {
      name: 'Ana Martínez',
      age: 28,
      role: 'Miembro desde 2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070',
      quote: 'Como principiante, tenía miedo de no poder seguir el ritmo. Pero los entrenadores adaptan todo a mi nivel. Ahora me siento más fuerte y confiada que nunca.',
      results: 'Aumentó su fuerza 50%',
    },
    {
      name: 'Luis Rivera',
      age: 55,
      role: 'Miembro desde 2020',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070',
      quote: 'A mis 55 años, CrossFit me ha dado una nueva vida. Tengo más energía, menos dolores y me siento 20 años más joven. La comunidad es como una segunda familia.',
      results: 'Eliminó dolores crónicos de espalda',
    },
    {
      name: 'Sofia Torres',
      age: 31,
      role: 'Miembro desde 2022',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070',
      quote: 'El mejor gimnasio en el que he estado. Los resultados hablan por sí solos. He ganado músculo, perdido grasa y lo mejor de todo, me encanta venir cada día.',
      results: 'Transformación completa en 8 meses',
    },
    {
      name: 'Pedro Sánchez',
      age: 38,
      role: 'Miembro desde 2021',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070',
      quote: 'CrossFit Cidra no es solo un gimnasio, es un estilo de vida. Los entrenadores son profesionales y la programación es excelente. ¡Mis resultados son increíbles!',
      results: 'Ganó 15 lbs de músculo',
    },
  ]

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Lo Que Dicen Nuestros <span className="text-primary">Miembros</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Historias reales de transformación y éxito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.age} años</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <svg className="w-8 h-8 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm font-semibold text-primary">✓ {testimonial.results}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-dark px-8 py-4 rounded-full border border-gray-800">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-dark object-cover"
                />
              ))}
            </div>
            <p className="text-gray-300 ml-2">
              <span className="font-bold text-white">500+</span> miembros satisfechos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

