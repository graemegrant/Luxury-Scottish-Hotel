import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { faqs } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import { hotelConfig } from '@/hotel.config';
import SectionLabel from '@/components/SectionLabel';
import ContactClient from './ContactClient';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with Craigmore House, Perthshire. Reservations, dining enquiries, weddings and events — we respond to every message personally.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-[#1C3A2B] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel color="parchment">Get in Touch</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Contact Us</h1>
          <p className="text-[#F2EDE4]/50 text-lg max-w-md mx-auto" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            We respond to every enquiry personally. Please allow up to 24 hours during busy periods.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form — client component handles submission */}
            <ContactClient />

            {/* Static contact details */}
            <div>
              <h2 className="text-[#1C3A2B] text-3xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>Direct Contact</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: 'Address', content: `${hotelConfig.name}\n${hotelConfig.location.region}\n${hotelConfig.location.postcode}` },
                  { icon: Phone, label: 'Telephone', content: hotelConfig.contact.phone, href: `tel:${hotelConfig.contact.phone.replace(/\s/g, '')}` },
                  { icon: Mail, label: 'Email', content: hotelConfig.contact.email, href: `mailto:${hotelConfig.contact.email}` },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1C3A2B] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#C4924A]" />
                    </div>
                    <div>
                      <div className="text-[#1C3A2B] text-sm font-medium mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>{label}</div>
                      {href ? (
                        <a href={href} className="text-[#2C2C2C]/60 text-sm hover:text-[#C4924A] transition-colors whitespace-pre-line" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{content}</a>
                      ) : (
                        <div className="text-[#2C2C2C]/60 text-sm whitespace-pre-line" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?w=800&q=80" alt="Perthshire Location" fill className="object-cover opacity-60" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 text-xs tracking-widest uppercase text-[#1C3A2B]" style={{ fontFamily: 'Jost, sans-serif' }}>
                    {hotelConfig.location.region} — {hotelConfig.location.postcode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-12" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Frequently Asked Questions
          </h2>
          {/* FAQ accordion — client for interactivity */}
          <ContactClient faqs={faqs} faqsOnly />
        </div>
      </section>
    </>
  );
}
