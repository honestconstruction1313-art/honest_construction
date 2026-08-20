import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '@/data/services';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Guarantee', href: '#guarantee' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-9 opacity-100'} bg-navy-950`}>
        <div className="mx-auto flex h-9 max-w-8xl items-center justify-between px-6 text-xs text-sky-100">
          <span className="font-medium tracking-wide">Serving Merseyside & WA11 | Mon–Sat: 09:00–18:00</span>
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.emailLink} className="transition-colors hover:text-white">{CONTACT_INFO.email}</a>
            <span className="text-sky-700">|</span>
            <span className="font-semibold text-white">{CONTACT_INFO.address}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-3.5">
        <button onClick={() => handleNavClick('#home')} className="flex-shrink-0">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                scrolled ? 'text-navy-700 hover:text-sky-600 hover:bg-sky-50' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT_INFO.phoneLink}
            className="hidden sm:flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now: {CONTACT_INFO.phone}</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden rounded-lg p-2 transition-colors ${scrolled ? 'text-navy-900 hover:bg-sky-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white shadow-xl animate-slide-down">
          <nav className="mx-auto flex max-w-8xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center py-3 text-base font-semibold text-navy-700 transition-colors hover:text-sky-600 border-b border-sky-50 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href={CONTACT_INFO.phoneLink}
              className="mt-4 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/30"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now: {CONTACT_INFO.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
