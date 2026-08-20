import { Phone, ClipboardList, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/data/services';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Modern construction steel framework"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/70" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pt-32 pb-20 lg:pt-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <MapPin className="h-4 w-4 text-sky-300" />
            <span className="text-sm font-semibold text-sky-100">Merseyside & WA11 | Penny Lane</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.15] text-white text-balance animate-fade-up sm:text-5xl lg:text-6xl">
            Structural Excellence &amp;{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">
              Multi-Trade Renovations
            </span>{' '}
            Across Merseyside &amp; WA11
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky-100/90 animate-fade-up [animation-delay:0.1s]">
            Trust Honest Constructions for Home Extensions, Loft Conversions, Electrical, Plumbing,
            and High-Quality Tiling. Fully Guaranteed Workmanship.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up [animation-delay:0.2s]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/30 transition-all hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <ClipboardList className="h-5 w-5 transition-transform group-hover:scale-110" />
              REQUEST FREE SURVEY &amp; QUOTE
            </a>
            <a
              href={CONTACT_INFO.phoneLink}
              className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
              CALL NOW: {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Mini trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up [animation-delay:0.3s]">
            <div className="flex items-center gap-2 text-sm text-sky-100">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">10-Year Structural Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-sky-100">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-sky-100">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">Verified Local Tradesmen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="h-16 w-full">
          <path d="M0,60 C240,100 480,100 720,70 C960,40 1200,40 1440,70 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
