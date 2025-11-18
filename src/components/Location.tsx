import { motion } from 'framer-motion'

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            <span className="text-primary">Ubicación</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visítanos en Cidra, Puerto Rico
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d-66.1614!3d18.1757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f2f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sCrossFit%20Cidra!5e0!3m2!1sen!2spr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dirección</h3>
                  <p className="text-gray-300">
                    18 Cll Miguel Planellas<br />
                    Cidra, PR 00739<br />
                    Puerto Rico
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/xXB5PwLqPak9FCZE6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Obtener Direcciones
              </a>
            </div>

            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                  <a href="tel:+17872105147" className="text-gray-300 hover:text-primary transition-colors">
                    (787) 210-5147
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Horario de Clases</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <div className="font-semibold text-white mb-2">Lunes - Viernes:</div>
                      <div className="text-sm space-y-1 ml-4">
                        <div>5:00 AM - 6:00 AM</div>
                        <div>6:00 AM - 7:00 AM</div>
                        <div>7:00 AM - 8:00 AM</div>
                        <div>8:00 AM - 9:00 AM</div>
                        <div className="mt-2">4:30 PM - 5:30 PM</div>
                        <div>5:30 PM - 6:30 PM</div>
                        <div>6:30 PM - 7:30 PM</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">Sábado:</div>
                      <div className="text-sm ml-4">8:00 AM - 12:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 p-6 rounded-xl">
              <p className="text-center text-lg">
                <span className="font-bold text-white">¡Primera clase GRATIS!</span>
                <br />
                <span className="text-gray-300">Ven y descubre por qué somos el mejor box de CrossFit en Cidra</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location

