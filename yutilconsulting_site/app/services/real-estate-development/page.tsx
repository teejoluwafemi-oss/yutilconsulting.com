'use client'
import Head from 'next/head'
import Link from 'next/link'

export default function Service(){
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Real Estate Development — YUTIL Consulting</title>
        <meta name="description" content="Real Estate Development services from YUTIL Consulting" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Real Estate Development", "provider": {"@type": "Organization", "name": "YUTIL Consulting", "url": "https://yutilconsulting.com"}, "areaServed": [{"@type": "Country", "name": "United States"}, {"@type": "Country", "name": "Nigeria"}], "serviceType": ["Construction & dredging services", "Asset management"]})}} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-sm text-blue-700">&larr; Back to Home</Link>
        <h1 className="text-3xl font-semibold tracking-tight mt-4">Real Estate Development</h1>
        <p className="mt-3 text-sm text-neutral-700">What we deliver:</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
              <li>Construction &amp; dredging services</li>
              <li>Asset management</li>
        </ul>
        <div className="mt-6 flex gap-2">
          <Link className="btn-outline" href="/contact">Contact us</Link>
          <Link className="btn-outline" href="/faq">FAQ</Link>
        </div>
      </div>
    </main>
  )
}
