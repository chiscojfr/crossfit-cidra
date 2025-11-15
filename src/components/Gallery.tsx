import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
      alt: 'CrossFit Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070',
      alt: 'Group Class',
    },
    {
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070',
      alt: 'Weightlifting',
    },
    {
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070',
      alt: 'Box Jump',
    },
    {
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069',
      alt: 'Kettlebell Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069',
      alt: 'Community',
    },
  ]

  const videos = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070',
      title: 'Clase de CrossFit',
      url: '#',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
      title: 'Testimonios de Miembros',
      url: '#',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070',
      title: 'Tour del Box',
      url: '#',
    },
  ]

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Mira nuestra comunidad en acción
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                activeTab === 'photos'
                  ? 'bg-primary text-white'
                  : 'bg-dark-lighter text-gray-400 hover:text-white'
              }`}
            >
              Fotos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-primary text-white'
                  : 'bg-dark-lighter text-gray-400 hover:text-white'
              }`}
            >
              Videos
            </button>
          </div>
        </motion.div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
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
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
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
        )}
      </div>
    </section>
  )
}

export default Gallery

