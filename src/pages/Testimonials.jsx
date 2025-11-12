export default function Testimonials() {
  const items = [
    {
      quote: 'Consistent quality and timely deliveries. Blue Export has been a reliable sourcing partner for our Middle East operations.',
      author: 'Procurement Lead, Food Distributor - UAE'
    },
    {
      quote: 'Clear documentation and smooth customs clearance every time. Highly recommended for rice shipments.',
      author: 'Logistics Manager, Import House - Kenya'
    },
    {
      quote: 'Their spice grades matched our brand’s standards perfectly. Great communication and service.',
      author: 'Owner, Specialty Foods - Germany'
    },
  ]

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-800">Testimonials</h1>
        <p className="mt-2 text-slate-600">What our clients say about us.</p>

        <div className="mt-10 grid gap-6">
          {items.map((t, i) => (
            <blockquote key={i} className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <p className="text-slate-800">“{t.quote}”</p>
              <footer className="mt-2 text-sm text-slate-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  )
}
