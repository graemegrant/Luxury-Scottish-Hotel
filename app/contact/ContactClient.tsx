'use client';

import { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';

interface Faq { question: string; answer: string; }

interface Props {
  faqs?: Faq[];
  faqsOnly?: boolean;
}

export default function ContactClient({ faqs = [], faqsOnly = false }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (faqsOnly) {
    return (
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#F2EDE4]">
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
              <span className="text-[#1C3A2B] text-base pr-4" style={{ fontFamily: 'Georgia, serif' }}>{faq.question}</span>
              <ChevronDown size={16} className={`text-[#C4924A] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
            </button>
            {openFaq === i && (
              <div className="px-6 pb-5">
                <p className="text-[#2C2C2C]/60 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[#1C3A2B] text-3xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>Send an Enquiry</h2>

      {status === 'sent' ? (
        <div className="bg-[#1C3A2B] p-8 text-center">
          <div className="text-[#C4924A] text-3xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>&mdash;</div>
          <h3 className="text-[#F2EDE4] text-xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>Thank you</h3>
          <p className="text-[#F2EDE4]/60 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            We&apos;ve received your message and will be in touch within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Name *</label>
              <input
                required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              />
            </div>
            <div>
              <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Email *</label>
              <input
                type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Phone</label>
              <input
                type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              />
            </div>
            <div>
              <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Enquiry Type</label>
              <select
                value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="w-full border border-[#1C3A2B]/20 bg-[#F2EDE4] px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors appearance-none"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              >
                <option value="">Select...</option>
                {['Room Reservation', 'Dining Reservation', 'Wedding Enquiry', 'Private Event', 'Experience Booking', 'General Enquiry'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Message *</label>
            <textarea
              required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors resize-none"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>Something went wrong. Please try again or email us directly.</p>
          )}

          <button
            type="submit" disabled={status === 'sending'}
            className="inline-flex items-center gap-2 bg-[#1C3A2B] text-[#F2EDE4] text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#2a5040] transition-colors disabled:opacity-60"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
          >
            {status === 'sending' ? 'Sending...' : (
              <><Send size={14} /> Send Enquiry</>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
