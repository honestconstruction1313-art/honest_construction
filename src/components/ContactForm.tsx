import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { sendInquiryEmail } from '@/lib/emailjs';
import { supabase } from '@/lib/supabase';
import { CONTACT_INFO, SERVICE_OPTIONS, URGENCY_OPTIONS } from '@/data/services';

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  postcode: string;
  service: string;
  preferredContact: string[];
  urgency: string;
  projectBrief: string;
};

const INITIAL_FORM: FormState = {
  fullName: '',
  phone: '',
  email: '',
  postcode: '',
  service: '',
  preferredContact: [],
  urgency: '',
  projectBrief: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleContactMethod = (method: string) => {
    setForm((prev) => ({
      ...prev,
      preferredContact: prev.preferredContact.includes(method)
        ? prev.preferredContact.filter((m) => m !== method)
        : [...prev.preferredContact, method],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const preferredContact = form.preferredContact.join(', ');
      const message = [
        `Customer name: ${form.fullName}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Project postcode/location: ${form.postcode}`,
        `Required service: ${form.service}`,
        `Preferred contact method: ${preferredContact}`,
        `Project urgency: ${form.urgency}`,
        `Project brief: ${form.projectBrief || 'Not provided'}`,
      ].join('\n');

      // EmailJS is the primary delivery path so enquiries reach the company inbox
      // even when the optional Supabase database is not configured on GitHub Pages.
      await sendInquiryEmail({
        from_name: form.fullName,
        name: form.fullName,
        full_name: form.fullName,
        from_email: form.email,
        email: form.email,
        reply_to: form.email,
        phone: form.phone,
        postcode: form.postcode,
        location: form.postcode,
        service: form.service,
        preferred_contact: preferredContact,
        urgency: form.urgency,
        project_brief: form.projectBrief || 'Not provided',
        message,
      });

      // Keep the existing Supabase logging as a secondary/optional path.
      if (supabase) {
        const { error } = await supabase.from('inquiries').insert({
          full_name: form.fullName,
          phone: form.phone,
          email: form.email,
          postcode: form.postcode,
          service: form.service,
          preferred_contact: preferredContact,
          urgency: form.urgency,
          project_brief: form.projectBrief || null,
        });

        // Database logging should never prevent a successfully emailed enquiry.
        if (error) console.warn('Supabase enquiry logging failed:', error.message);
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  const inputClass =
    'w-full rounded-xl border-2 border-sky-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-accent-steel/50 transition-all focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100';
  const labelClass = 'mb-1.5 block text-sm font-semibold text-navy-800';

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-8xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-sky-300">
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Get Your Free, No-Obligation Site Survey &amp; Quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sky-100/80">
            Fill out the form below and our team will get back to you within 24 hours to arrange your
            free on-site survey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-sky-400/15 bg-navy-800/60 p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-white">Contact Details</h3>
              <div className="mt-5 flex flex-col gap-5">
                <a href={CONTACT_INFO.phoneLink} className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/15 transition-colors group-hover:bg-sky-500/25">
                    <Phone className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">Phone</p>
                    <p className="text-base font-bold text-white">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/15 transition-colors group-hover:bg-sky-500/25">
                    <MessageCircle className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">WhatsApp</p>
                    <p className="text-base font-bold text-white">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={CONTACT_INFO.emailLink} className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/15 transition-colors group-hover:bg-sky-500/25">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">Email</p>
                    <p className="text-sm font-bold text-white break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500/15">
                    <MapPin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">Address</p>
                    <p className="text-sm font-bold text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="rounded-2xl border border-sky-400/15 bg-navy-800/60 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-sky-400" />
                <h3 className="font-display text-lg font-bold text-white">Working Hours</h3>
              </div>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between border-b border-sky-400/10 pb-2.5">
                  <span className="font-semibold text-sky-100">Monday – Saturday</span>
                  <span className="text-sky-200/70">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-sky-100">Sunday</span>
                  <span className="text-red-300/80 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-navy-950/30 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Quote Request Received!</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-accent-steel">
                    Thank you for reaching out to Honest Constructions. Our team will contact you within
                    24 hours to arrange your free on-site survey. For urgent enquiries, please call{' '}
                    <a href={CONTACT_INFO.phoneLink} className="font-bold text-sky-600">
                      {CONTACT_INFO.phone}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-xl border-2 border-sky-200 px-6 py-3 text-sm font-bold text-navy-700 transition-colors hover:bg-sky-50"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Contact Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="07495 731134"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email + Postcode */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="Rs2543461@gmail.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="postcode">
                        Project Postcode / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        required
                        value={form.postcode}
                        onChange={(e) => updateField('postcode', e.target.value)}
                        placeholder="WA11 0QX / Penny Lane"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service + Urgency */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="service">
                        Required Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="urgency">
                        Project Urgency <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="urgency"
                        required
                        value={form.urgency}
                        onChange={(e) => updateField('urgency', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select urgency...</option>
                        {URGENCY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred contact checkboxes */}
                  <div>
                    <label className={labelClass}>
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Phone Call', 'WhatsApp', 'Email'].map((method) => {
                        const checked = form.preferredContact.includes(method);
                        return (
                          <button
                            key={method}
                            type="button"
                            onClick={() => toggleContactMethod(method)}
                            className={`flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                              checked
                                ? 'border-sky-500 bg-sky-50 text-sky-700'
                                : 'border-sky-100 text-accent-steel hover:border-sky-300'
                            }`}
                          >
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-all ${
                                checked ? 'border-sky-500 bg-sky-500' : 'border-sky-200'
                              }`}
                            >
                              {checked && <CheckCircle2 className="h-3 w-3 text-white" />}
                            </div>
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project brief */}
                  <div>
                    <label className={labelClass} htmlFor="projectBrief">
                      Project Brief
                    </label>
                    <textarea
                      id="projectBrief"
                      rows={4}
                      value={form.projectBrief}
                      onChange={(e) => updateField('projectBrief', e.target.value)}
                      placeholder="Briefly describe your requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                      <p className="text-sm font-medium text-red-700">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/30 transition-all hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        SUBMIT &amp; REQUEST FREE QUOTE
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
