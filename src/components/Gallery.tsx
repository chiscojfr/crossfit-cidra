import { motion } from 'framer-motion'

const Gallery = () => {

  const photos = [
    {
      url: `${import.meta.env.BASE_URL}box-images/20f31088-0675-4117-8a24-556761862982.jpg`,
      alt: 'CrossFit Cidra',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5730.PNG`,
      alt: 'Entrenamiento en CrossFit Cidra',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5731.PNG`,
      alt: 'Clase Grupal',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5732.PNG`,
      alt: 'Comunidad CrossFit Cidra',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5733.PNG`,
      alt: 'Entrenamiento Funcional',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5734.PNG`,
      alt: 'Nuestro Box',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5747.jpg`,
      alt: 'Entrenamiento CrossFit',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5758.jpg`,
      alt: 'Atletas de CrossFit Cidra',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5765.jpg`,
      alt: 'Sesión de Entrenamiento',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5770.jpg`,
      alt: 'Comunidad en Acción',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5782.jpg`,
      alt: 'Entrenamiento de Fuerza',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5786.jpg`,
      alt: 'CrossFit Cidra Box',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/IMG_5804.jpg`,
      alt: 'Clase de CrossFit',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/facilities/WhatsApp Image 2025-12-22 at 11.56.36 AM.jpeg`,
      alt: 'Instalaciones CrossFit Cidra',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/facilities/WhatsApp Image 2025-12-22 at 11.56.36 AM (1).jpeg`,
      alt: 'Nuestras Instalaciones',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/facilities/WhatsApp Image 2025-12-22 at 11.56.36 AM (2).jpeg`,
      alt: 'Área de Entrenamiento',
    },
    {
      url: `${import.meta.env.BASE_URL}box-images/facilities/WhatsApp Image 2025-12-22 at 11.56.36 AM (3).jpeg`,
      alt: 'Equipamiento del Box',
    },
  ]

  // Videos section hidden for future deployment
  // const videos = [
  //   {
  //     thumbnail: `${import.meta.env.BASE_URL}box-images/IMG_5730.PNG`,
  //     title: 'Clase de CrossFit',
  //     url: '#',
  //   },
  //   {
  //     thumbnail: `${import.meta.env.BASE_URL}box-images/IMG_5731.PNG`,
  //     title: 'Testimonios de Miembros',
  //     url: '#',
  //   },
  //   {
  //     thumbnail: `${import.meta.env.BASE_URL}box-images/IMG_5732.PNG`,
  //     title: 'Tour del Box',
  //     url: '#',
  //   },
  // ]

  return (
    <section id="galeria" className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            <span className="text-primary">Galería</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mira nuestra comunidad en acción
          </p>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Videos Grid - Hidden for future deployment */}
        {/* {activeTab === 'videos' && (
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.a
                key={index}
                href={video.url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
                  <p className="text-white font-semibold">{video.title}</p>
                </div>
              </motion.a>
            ))}
          </div>
        )} */}
      </div>
    </section>
  )
}

export default Gallery

