/*
  # Create enquiries table

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `class_interested` (text, required)
      - `message` (text, optional)
      - `created_at` (timestamptz, default now)
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `enquiries` table
    - Public insert allowed (anyone can submit enquiry)
    - Only authenticated users (admin) can read enquiries
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  class_interested text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);
