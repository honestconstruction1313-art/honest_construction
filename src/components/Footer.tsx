import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '@/data/services';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Guarantee', href: '#guarantee' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Home Extensions',
  'Loft Conversions',
  'Electrical Works',
  'Plumbing Services',
  'Tiling & Flooring',
  'Kitchen & Bathroom',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 text-sky-100">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-navy-700 via-sky-500 to-navy-700" />

      <div className="mx-auto max-w-8xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-sky-200/60">
              Solid Builds. Honest Results. Your trusted multi-trade construction specialists across
              Merseyside & WA11.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-md bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-300">
                10-Year Structural Guarantee
              </span>
              <span className="rounded-md bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-300">
                Fully Insured
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-sky-200/70 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-sky-200/70 transition-colors hover:text-sky-400 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Operating Details
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a href={CONTACT_INFO.phoneLink} className="group flex items-center gap-3 text-sm text-sky-200/70 transition-colors hover:text-sky-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-sky-500" />
                {CONTACT_INFO.phone}
              </a>
              <a href={CONTACT_INFO.emailLink} className="group flex items-center gap-3 text-sm text-sky-200/70 transition-colors hover:text-sky-400 break-all">
                <Mail className="h-4 w-4 flex-shrink-0 text-sky-500" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-sky-200/70">
                <MapPin className="h-4 w-4 flex-shrink-0 text-sky-500 mt-0.5" />
                {CONTACT_INFO.address}
              </div>
              <div className="flex items-start gap-3 text-sm text-sky-200/70">
                <Clock className="h-4 w-4 flex-shrink-0 text-sky-500 mt-0.5" />
                <div>
                  <p>Mon – Sat: 09:00 – 18:00</p>
                  <p className="text-red-300/60">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sky-400/10 pt-6 sm:flex-row">
          <p className="text-xs text-sky-200/50">
            &copy; {new Date().getFullYear()} Honest Constructions. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 rounded-lg border border-sky-400/20 px-4 py-2 text-xs font-semibold text-sky-200/70 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
