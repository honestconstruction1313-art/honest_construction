/*
# Create inquiries table for Honest Constructions contact form

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — submitter's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email address
  - `postcode` (text, not null) — project postcode/location
  - `service` (text, not null) — requested service type
  - `preferred_contact` (text, not null) — preferred contact method (phone, whatsapp, email)
  - `urgency` (text, not null) — project urgency level
  - `project_brief` (text, nullable) — optional project description
  - `status` (text, not null, default 'new') — inquiry status for tracking
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `inquiries`.
- Single-tenant no-auth app: allow anon + authenticated to INSERT (form submissions are public).
- No SELECT/UPDATE/DELETE for anon — inquiries are private business data only readable via dashboard.
*/
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  postcode text NOT NULL,
  service text NOT NULL,
  preferred_contact text NOT NULL,
  urgency text NOT NULL,
  project_brief text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
