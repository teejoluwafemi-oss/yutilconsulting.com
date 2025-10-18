'use client'
import Head from 'next/head'
import Link from 'next/link'

export default function Service(){
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Finance & Accounting Consulting — YUTIL Consulting</title>
        <meta name="description" content="Finance & Accounting Consulting services from YUTIL Consulting" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Finance & Accounting Consulting", "provider": {"@type": "Organization", "name": "YUTIL Consulting", "url": "https://yutilconsulting.com"}, "areaServed": [{"@type": "Country", "name": "United States"}, {"@type": "Country", "name": "Nigeria"}], "serviceType": ["Financial reporting automation", "Streamlined financial close", "Financial audit (interim & year\u2011end)", "Financial planning & analysis (FP&A)", "Technical accounting research", "General ledger accounting", "Structured financing", "Investment strategies"]})}} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-sm text-blue-700">&larr; Back to Home</Link>
        <h1 className="text-3xl font-semibold tracking-tight mt-4">Finance & Accounting Consulting</h1>
        <p className="mt-3 text-sm text-neutral-700">What we deliver:</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
              <li>Financial reporting automation</li>
              <li>Streamlined financial close</li>
              <li>Financial audit (interim &amp; year‑end)</li>
              <li>Financial planning &amp; analysis (FP&amp;A)</li>
              <li>Technical accounting research</li>
              <li>General ledger accounting</li>
              <li>Structured financing</li>
              <li>Investment strategies</li>
        </ul>
        <div className="mt-6 flex gap-2">
          <Link className="btn-outline" href="/contact">Contact us</Link>
          <Link className="btn-outline" href="/faq">FAQ</Link>
        </div>
      </div>
    </main>
  )
}
