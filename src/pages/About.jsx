export default function About() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-800">About Blue Export</h1>
        <p className="mt-4 text-slate-600 leading-7">Blue Export is an import-export company specializing in premium rice varieties and spices. Our mission is to build efficient supply chains that elevate quality from farm to port, delivering consistent value to distributors and brands worldwide.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title: 'Mission', desc: 'Enable trustworthy international trade by combining quality sourcing, rigorous inspections, and transparent documentation.'},
            {title: 'Vision', desc: 'Be the most reliable partner for Asian rice and spices across emerging and developed markets.'},
            {title: 'Quality', desc: 'Every shipment goes through moisture control, sorting, grading, and lab tests aligned with destination standards.'},
          ].map(c => (
            <div key={c.title} className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-800">{c.title}</h3>
              <p className="text-slate-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
