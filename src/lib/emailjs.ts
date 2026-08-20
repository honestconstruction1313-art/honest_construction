const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export const EMAILJS_CONFIG = {
  serviceId: 'service_scgah7s',
  templateId: 'template_mnxepto',
  publicKey: '465yN1qevb7NiggQR',
  recipient: 'honestconstruction1313@gmail.com',
};

type EmailTemplateParams = Record<string, string>;

export async function sendInquiryEmail(params: EmailTemplateParams) {
  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.serviceId,
      template_id: EMAILJS_CONFIG.templateId,
      user_id: EMAILJS_CONFIG.publicKey,
      template_params: {
        ...params,
        to_email: EMAILJS_CONFIG.recipient,
      },
    }),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new Error(message || `EmailJS request failed (${response.status})`);
  }
}
