import { ShieldCheck, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative bg-accent-grey py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-sky-700">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
            Comprehensive Multi-Trade Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent-steel">
            From foundations to finishing touches — every service carries its own warranty, so your
            project is protected at every stage.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100/40"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                {/* Icon badge */}
                <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 shadow-lg shadow-navy-900/30 transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-sky-300" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 pt-9">
                <h3 className="font-display text-lg font-bold leading-snug text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-accent-steel">
                  {service.description}
                </p>

                {/* Warranty badge */}
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-2.5">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 text-sky-600" />
                  <span className="text-xs font-bold text-sky-800">{service.warranty}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-semibold text-navy-800">
            Don&apos;t see what you need? We handle every construction trade.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 rounded-xl bg-navy-800 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-900 hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Your Free Survey &amp; Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
