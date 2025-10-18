'use client'
export default function Contact(){
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-sm text-neutral-700">We'd love to hear from you. Use the details below or the form.</p>
        <div className="mt-4 text-sm text-neutral-700 space-y-1">
          <p><strong>Phone:</strong> +1-516-754-1368</p>
          <p><strong>Email:</strong> admin@yutilconsulting.com &nbsp;|&nbsp; toluwafemi@yutil.io</p>
          <p><strong>Offices:</strong> Portland OR • Dallas TX • Lagos NG</p>
        </div>
        <form action="/api/contact" method="post" className="mt-6 space-y-3">
          <input className="w-full border rounded-lg p-2" name="name" placeholder="Your name" required />
          <input type="email" className="w-full border rounded-lg p-2" name="email" placeholder="Your email" required />
          <textarea className="w-full border rounded-lg p-2" name="message" placeholder="How can we help?" rows={5} required></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
        </form>
      </div>
    </main>
  )
}
