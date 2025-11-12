export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1604908554027-7748ac15f8f5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546549039-49ec6f7b71a6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587049352851-c9e6fafe05f0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615484478097-0325e9952932?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519680772-8b3256f05fe0?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800">Gallery</h1>
        <p className="mt-2 text-slate-600">A glimpse into our products and shipments.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i+1}`} className="rounded-lg border border-slate-200 object-cover h-60 w-full" />
          ))}
        </div>
      </section>
    </main>
  )
}
