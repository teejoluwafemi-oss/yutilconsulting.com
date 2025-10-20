
'use client'
import React, { useState } from 'react';
import { LineChart, Building2, Shield, Handshake, Mail, Phone, MapPin, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BRAND_BLUE = '#1E40AF';
const BRAND_ORANGE = '#F97316';

const financeItems = [
  { title: 'Financial Reporting Automation', desc: 'Streamlining the financial reporting process' },
  { title: 'SEC Reporting', desc: '10-K and 10-Q preparation' },
  { title: 'Internal Financial Reporting', desc: 'Balance Sheet, Income Statement, Statement of Equity, and Statement of Cash Flow preparation' },
  { title: 'Financial Audit', desc: 'Interim and year-end audits' },
  { title: 'Financial Planning & Analysis' },
  { title: 'Technical Accounting Research' },
  { title: 'General Ledger Accounting Activities' },
  { title: 'Structured Financing' },
  { title: 'Investment Strategies' },
];

const assetItems = ['Construction Services','Dredging Services','Asset Management Services'];

const itRiskItems = [
  'SOX 404 Audit',
  'ITGC Testing - IT General Controls',
  'ITAC Control Testing - IT Application Controls',
  'SOC I Assessment',
  'SOC II Type II Assessment',
  'Operational and Integrated Audit',
  'HIPAA Audit',
  'Other Controls and Testing Areas',
];

const minerals = ['Lithium','Zinc','Iron Ore','Gold','Lead','Copper','Copper Concentrate','Other Raw Mineral Resources'];

export default function Page() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div style={{ ['--brand-blue' as any]: BRAND_BLUE, ['--brand-orange' as any]: BRAND_ORANGE }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Yutil Consulting LLC logo" className="h-9 w-9 rounded-2xl object-contain bg-white p-1 ring-1 ring-neutral-200 shadow-sm" />
            <div>
              <p className="font-semibold tracking-tight">Yutil Consulting LLC</p>
              <p className="text-xs text-neutral-600 leading-none">Finance • IT/Risk • Asset Management • Commodities</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-neutral-800">Home</a>
            <a href="#services" className="hover:text-neutral-800">Services</a>
            <a href="#about" className="hover:text-neutral-800">About</a>
            <a href="#team" className="hover:text-neutral-800">Team</a>
            <a href="#contact" className="hover:text-neutral-800">Contact</a>
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <Button onClick={()=>location.hash='#contact'}>Work with us</Button>
            <Button variant="outline" onClick={()=>location.href='mailto:toluwafemi@yutil.io?cc=admin@yutilconsulting.com'}>Email</Button>
          </div>
        </div>
      </header>

      {/* Home Hero */}
      <section id="home" className="relative">
        <div className="bg-[linear-gradient(135deg,var(--brand-blue),#2158b8_35%,#3b82f6_100%)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Welcome to Yutil Consulting LLC</h1>
            <p className="mt-6 text-lg sm:text-2xl text-white/90">Your Trusted Partner in Finance, Real Estate, IT Audit, and Commodity Trading</p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#services" className="inline-flex items-center rounded-xl px-6 py-3 bg-white text-[color:var(--brand-blue)] font-semibold shadow hover:opacity-95">Our Services</a>
              <a href="#contact" className="inline-flex items-center rounded-xl px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white/10">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-blue)]">Our Services</h2>
            <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-[var(--brand-orange)]" />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white shadow border border-slate-100 p-8">
              <div className="text-[var(--brand-blue)]"><LineChart className="h-8 w-8"/></div>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--brand-blue)]">Finance &amp; Accounting Services</h3>
              <div className="mt-6 space-y-4">
                {financeItems.map((item)=>(
                  <div key={item.title} className="border-b last:border-b-0 border-slate-200 pb-4">
                    <div className="font-semibold text-[var(--brand-blue)]">{item.title}</div>
                    {item.desc && <div className="text-sm text-neutral-600 mt-1">{item.desc}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow border border-slate-100 p-8">
              <div className="text-[var(--brand-blue)]"><Building2 className="h-8 w-8"/></div>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--brand-blue)]">Asset Management &amp; Infrastructural Development</h3>
              <div className="mt-6 space-y-4">
                {assetItems.map((t)=>(<div key={t} className="border-b last:border-b-0 border-slate-200 pb-4 font-semibold text-[var(--brand-blue)]">{t}</div>))}
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow border border-slate-100 p-8">
              <div className="text-[var(--brand-blue)]"><Shield className="h-8 w-8"/></div>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--brand-blue)]">IT, Risk &amp; Compliance Audit Services</h3>
              <div className="mt-6 space-y-4">
                {itRiskItems.map((t)=>(<div key={t} className="border-b last:border-b-0 border-slate-200 pb-4 font-semibold text-[var(--brand-blue)]">{t}</div>))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white shadow border border-slate-100 p-8 lg:col-start-1">
              <div className="text-[var(--brand-blue)] mb-2"><Handshake className="h-8 w-8"/></div>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--brand-blue)]">Commodity Trading Consulting</h3>
              <p className="mt-3 text-neutral-600">We connect sellers of raw mineral resources to qualified buyers, specializing in:</p>
              <div className="mt-6 space-y-4">
                {minerals.map((m)=>(<div key={m} className="border-b last:border-b-0 border-slate-200 pb-4 font-semibold text-[var(--brand-blue)]">{m}</div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed">
              Yutil Consulting LLC is a premier business consulting firm providing comprehensive services across four key sectors: <span className="font-medium text-neutral-900">Finance &amp; Accounting</span>, <span className="font-medium text-neutral-900">IT Risk &amp; Compliance Audit</span>, <span className="font-medium text-neutral-900">Asset Management and Infrastructural Development</span>, and <span className="font-medium text-neutral-900">Commodity Trading Consulting</span>. Our team of certified professionals brings decades of combined experience from leading global institutions.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-white/60 shadow p-8 text-center">
              <div className="text-4xl font-extrabold tracking-tight text-[var(--brand-blue)]">4</div>
              <div className="mt-3 text-neutral-500">Service Sectors</div>
            </div>
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-white/60 shadow p-8 text-center">
              <div className="text-4xl font-extrabold tracking-tight text-[var(--brand-blue)]">3</div>
              <div className="mt-3 text-neutral-500">Office Locations</div>
            </div>
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-white/60 shadow p-8 text-center">
              <div className="text-4xl font-extrabold tracking-tight text-[var(--brand-blue)]">10+</div>
              <div className="mt-3 text-neutral-500">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--brand-blue)]">Leadership Team</h2>
            <span className="text-xs text-neutral-600">Portland • Dallas • Lagos</span>
          </div>
          <p className="mt-3 text-neutral-700 max-w-3xl">Our leaders bring deep finance, operations, audit, and technology expertise—grounded in hands‑on delivery across industries and geographies.</p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/** Tolu */}
            <Card className="overflow-hidden">
              <img src="/team/tolu.jpg" alt="Tolu" className="w-full aspect-square object-cover rounded-2xl border shadow"/>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[var(--brand-blue)]">Tolu Oluwafemi</CardTitle>
                <div className="mt-1 font-semibold text-[var(--brand-orange)]">Chief Executive Officer</div>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-neutral-800">Education:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Bachelor's Degree in Statistics — Covenant University</li>
                  <li>Master's Degree in Finance — University of Dallas</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Professional Experience:</div>
                <p className="mt-2">Tolu has served at Citigroup, Santander, Goldman Sachs, McKesson Corporation, Baxter, Redwood Trust, Apex Financial Services Group, and Double Down Industries.</p>
                <p className="mt-2">Roles include VP of SEC Reporting & Technical Accounting Research, VP of Fund Accounting, Head of Finance & Accounting, Director of SEC Reporting & Technical Accounting, and Associate Director of SEC Reporting.</p>
              </CardContent>
            </Card>

            {/** Babajide */}
            <Card className="overflow-hidden">
              <img src="/team/babajide.jpg" alt="Babajide" className="w-full aspect-square object-cover rounded-2xl border shadow"/>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[var(--brand-blue)]">Babajide Olukoshi</CardTitle>
                <div className="mt-1 font-semibold text-[var(--brand-orange)]">Chief Operations Officer</div>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-neutral-800">Education:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Bachelor's Degree in Building Construction Technology — Covenant University</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Certifications:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Certified Project Manager</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Expertise:</div>
                <p className="mt-2">Extensive experience in construction project management and operations oversight, ensuring efficient delivery of development projects.</p>
              </CardContent>
            </Card>

            {/** Ayodeji */}
            <Card className="overflow-hidden">
              <img src="/team/ayodeji.jpg" alt="Ayodeji" className="w-full aspect-square object-cover rounded-2xl border shadow"/>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[var(--brand-blue)]">Ayodeji Oluwafemi</CardTitle>
                <div className="mt-1 font-semibold text-[var(--brand-orange)]">Chief Financial Officer</div>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-neutral-800">Education:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Bachelor's Degree in Accounting — University of Ado‑Ekiti</li>
                  <li>MBA (Accounting) — Pittsburg State University</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Certifications:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Certified Public Accountant (CPA)</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Professional Experience:</div>
                <p className="mt-2">Early career at JP Morgan Chase Investment Bank and Ernst & Young (Audit); later led international financial audits for global firms and intergovernmental federations.</p>
              </CardContent>
            </Card>

            {/** Anita */}
            <Card className="overflow-hidden">
              <img src="/team/anita.jpg" alt="Anita" className="w-full aspect-square object-cover rounded-2xl border shadow"/>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[var(--brand-blue)]">Anita Iseghohi</CardTitle>
                <div className="mt-1 font-semibold text-[var(--brand-orange)]">Chief IT, Risk & Compliance Audit Officer</div>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-neutral-800">Education:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>B.B.A. — University of Texas at Dallas</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Certifications:</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>CISA</li>
                  <li>CRISC</li>
                </ul>
                <div className="mt-4 font-semibold text-neutral-800">Professional Experience:</div>
                <p className="mt-2">Manager & Senior Manager roles across financial services, insurance, and healthcare — including Truist Bank, Wells Fargo, State Farm, and UnitedHealth Group.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 shadow">
              <h2 className="text-2xl font-semibold tracking-tight">Let’s build something exceptional</h2>
              <p className="mt-3 text-neutral-700">Tell us a bit about your goals and we’ll get back promptly.</p>
              <form className="mt-6 grid gap-4 max-w-xl" onSubmit={(e)=>e.preventDefault()}>
                <div>
                  <label className="text-sm text-neutral-700">Name</label>
                  <Input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Email</label>
                  <Input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Message</label>
                  <Textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="How can we help?" />
                </div>
                <div className="flex gap-3">
                  <Button type="submit">Send message</Button>
                  <Button variant="outline" onClick={()=>location.href='mailto:toluwafemi@yutil.io?cc=admin@yutilconsulting.com'}><Mail className="h-4 w-4 mr-2" />Email us</Button>
                </div>
                <p className="text-xs text-neutral-500">By submitting, you agree to be contacted by Yutil Consulting LLC.</p>
              </form>
            </div>
            <aside className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 shadow">
              <h3 className="font-semibold tracking-tight">Contact</h3>
              <div className="mt-3 space-y-3 text-sm text-neutral-700">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="underline" href="mailto:toluwafemi@yutil.io">toluwafemi@yutil.io</a></p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="underline" href="mailto:admin@yutilconsulting.com">admin@yutilconsulting.com</a></p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" />516-754-1368</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />Portland, Oregon • Dallas, Texas • Lagos, Nigeria</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/60 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Yutil Consulting LLC logo" className="h-8 w-8 rounded-xl object-contain bg-white p-1 ring-1 ring-neutral-200 shadow-sm" />
              <span className="font-medium">Yutil Consulting LLC</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#about" className="hover:text-neutral-900">About</a>
              <a href="#team" className="hover:text-neutral-900">Team</a>
              <a href="#contact" className="hover:text-neutral-900">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-xs">© {new Date().getFullYear()} Yutil Consulting LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
