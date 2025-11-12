import { useState } from 'react'

export default function Inquiry() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thank you. Our team will contact you with a quote.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800">Inquiry Form</h1>
        <p className="mt-2 text-slate-600">Share your requirements and destination. We’ll respond with specifications and pricing.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Your Name" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="phone" placeholder="Phone" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="product_type" placeholder="Product Type (e.g., Basmati, Cardamom)" required className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="quantity" placeholder="Quantity (e.g., 2 MT, 500 bags)" required className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="destination_country" placeholder="Destination Country" required className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="Additional details" rows="5" className="sm:col-span-2 border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-semibold px-5 py-2.5 hover:bg-blue-700 transition">Submit Inquiry</button>
        </form>

        {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
      </section>
    </main>
  )
}
