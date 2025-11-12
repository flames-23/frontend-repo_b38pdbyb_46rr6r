import { useEffect, useState } from 'react'

export default function Products() {
  const [catalog, setCatalog] = useState({ rice: [], spices: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setCatalog(data)
      } catch (e) {
        setError('Unable to load products at the moment.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800">Products</h1>
        <p className="mt-2 text-slate-600">Selected rice varieties and spices with essential specifications.</p>

        {loading && <p className="mt-6 text-slate-500">Loading...</p>}
        {error && <p className="mt-6 text-red-600">{error}</p>}

        {!loading && !error && (
          <>
            <h2 className="mt-10 text-2xl font-semibold text-slate-800">Rice Varieties</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalog.rice.map((p) => (
                <div key={p.name} className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800">{p.name}</h3>
                    <ul className="mt-2 text-sm text-slate-600 space-y-1">
                      <li>Origin: {p.origin}</li>
                      <li>Grain: {p.grain_length}</li>
                      <li>Moisture: {p.moisture}</li>
                      <li>Broken: {p.broken}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold text-slate-800">Spices</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalog.spices.map((p) => (
                <div key={p.name} className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800">{p.name}</h3>
                    <ul className="mt-2 text-sm text-slate-600 space-y-1">
                      <li>Grade: {p.grade}</li>
                      <li>Admixture: {p.admixture}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
