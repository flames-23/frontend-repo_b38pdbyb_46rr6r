export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0" aria-hidden>
          <svg className="absolute -top-24 -right-24 w-[40rem] opacity-30" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="256" cy="256" r="256" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Blue Export</h1>
          <p className="mt-4 max-w-2xl text-blue-100 text-lg">Trusted partner for premium rice and spices. We connect growers to global markets with rigorous quality standards and reliable logistics.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/products" className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 font-semibold px-5 py-2.5 shadow hover:shadow-md transition">Explore Products</a>
            <a href="/inquiry" className="inline-flex items-center justify-center rounded-md border border-white/40 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition">Request a Quote</a>
          </div>
        </div>
      </section>

      {/* Trust and reach */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: 'Global Reach', desc: 'Exports across Asia, Middle East, Africa, Europe and the Americas.'},
              {title: 'Quality Assurance', desc: 'Multi-stage checks for moisture, purity, and packaging integrity.'},
              {title: 'On-time Logistics', desc: 'Reliable shipment schedules with end-to-end documentation.'},
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-lg border border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-800 text-lg">{c.title}</h3>
                <p className="text-slate-600 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Featured Products</h2>
            <a href="/products" className="text-blue-700 hover:underline">View all</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {name: 'Basmati Rice', img: 'https://images.unsplash.com/photo-1546549039-49ec6f7b71a6?q=80&w=800&auto=format&fit=crop'},
              {name: 'Sona Masoori', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop'},
              {name: 'Cardamom', img: 'https://images.unsplash.com/photo-1624860452965-09237b04a647?q=80&w=800&auto=format&fit=crop'},
              {name: 'Black Pepper', img: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=800&auto=format&fit=crop'},
            ].map(p => (
              <div key={p.name} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800">{p.name}</h3>
                  <a href="/inquiry" className="text-sm text-blue-700 hover:underline">Request a quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
