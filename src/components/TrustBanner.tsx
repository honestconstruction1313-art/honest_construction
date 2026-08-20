import { ShieldCheck, BadgeCheck, MapPin } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: '10-Year Structural Guarantee',
    description: 'Our structural workmanship is backed by a decade-long written guarantee on all major structural projects.',
  },
  {
    icon: BadgeCheck,
    title: 'Fully Insured',
    description: 'Comprehensive public liability insurance for complete peace of mind on every job we undertake.',
  },
  {
    icon: MapPin,
    title: 'Verified Local Tradesmen (WA11)',
    description: 'Based in Penny Lane, WA11 — we are your trusted local construction specialists across Merseyside.',
  },
];

export default function TrustBanner() {
  return (
    <section id="guarantee" className="relative -mt-2 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-8xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50/50 to-white p-8 text-center transition-all hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon circle */}
              <div className="relative mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 shadow-lg shadow-navy-900/20 transition-transform group-hover:scale-110">
                  <item.icon className="h-8 w-8 text-sky-300" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-sky-400/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent-steel">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
