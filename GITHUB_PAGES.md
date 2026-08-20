# GitHub Pages deployment

This is a Vite + React site. The included GitHub Actions workflow builds `dist/` and deploys it to GitHub Pages.

## GitHub settings

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Push to `main` or run the workflow manually.
4. For a personal domain, add the domain under **Custom domain** and configure the DNS records GitHub shows.

The Vite build uses relative asset paths, so it works on both a GitHub Pages project URL and a custom domain.

## Contact form

EmailJS is configured in `src/lib/emailjs.ts` with the supplied service ID, template ID, public key, and recipient email. The form sends the full customer enquiry (name, phone, email, postcode/location, service, preferred contact, urgency, and project brief).

The EmailJS template should have its **To Email** set to `honestconstruction1313@gmail.com`. The form also sends `to_email` with that same address for templates that use `{{to_email}}`.
