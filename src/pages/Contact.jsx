import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thank you. We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800">Contact Us</h1>
        <p className="mt-2 text-slate-600">We would love to hear from you. Reach us using the form below.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your Name" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" name="email" placeholder="Email" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input name="phone" placeholder="Phone" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="subject" placeholder="Subject" className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" placeholder="Message" rows="5" className="sm:col-span-2 border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-semibold px-5 py-2.5 hover:bg-blue-700 transition">Send Message</button>
            </form>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800">Blue Export</h3>
              <p className="text-slate-600 text-sm">Premium Rice & Spices Exporter</p>
            </div>
            <div className="text-slate-600 text-sm">
              <p>Phone: +91 98765 43210</p>
              <p>Email: hello@blueexport.com</p>
              <p>Address: Cochin, Kerala, India</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200">
              <iframe title="map" src="https://www.google.com/maps?q=Kochi,%20Kerala&output=embed" className="w-full h-64"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
