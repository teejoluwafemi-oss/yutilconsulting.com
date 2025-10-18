'use client'
import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Services — YUTIL Consulting</title>
        <meta name="description" content="Explore YUTIL Consulting service pillars and capabilities." />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
          <Link href="/" className="text-sm text-blue-700">Home</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <a href="/services/finance-accounting" className="block rounded-2xl p-6 border bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold">Finance & Accounting Consulting</h2>
            <p className="mt-2 text-sm text-neutral-700">Financial reporting automation, audits, FP&A, technical accounting, GL, structured financing, and investment strategies.</p>
            <p className="mt-3 text-sm text-blue-700">Learn more →</p>
        </a>
          <a href="/services/real-estate-development" className="block rounded-2xl p-6 border bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold">Real Estate Development</h2>
            <p className="mt-2 text-sm text-neutral-700">Construction & dredging delivery with disciplined asset management across the project lifecycle.</p>
            <p className="mt-3 text-sm text-blue-700">Learn more →</p>
        </a>
          <a href="/services/commodity-trading" className="block rounded-2xl p-6 border bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold">Commodity Trading Advisory</h2>
            <p className="mt-2 text-sm text-neutral-700">Connecting institutional buyers and verified sellers of lithium, zinc, iron ore, gold, lead, copper, copper concentrate, and other raw minerals.</p>
            <p className="mt-3 text-sm text-blue-700">Learn more →</p>
        </a>
          <a href="/services/it-risk-compliance-audit" className="block rounded-2xl p-6 border bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold">IT, Risk & Compliance Audit</h2>
            <p className="mt-2 text-sm text-neutral-700">Independent IT reviews, technology risk assessment, compliance testing, and continuity/data protection controls.</p>
            <p className="mt-3 text-sm text-blue-700">Learn more →</p>
        </a>
        </div>
      </div>
    </main>
  )
}
