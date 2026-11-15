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
