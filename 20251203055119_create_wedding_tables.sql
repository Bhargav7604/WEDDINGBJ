-- /*
--   # Wedding Website Database Schema

--   1. New Tables
--     - `rsvp_responses`
--       - `id` (uuid, primary key) - Unique identifier for each RSVP
--       - `guest_name` (text) - Name of the guest responding
--       - `email` (text) - Email address of the guest
--       - `phone` (text, optional) - Phone number of the guest
--       - `attending` (boolean) - Whether the guest will attend
--       - `number_of_guests` (integer) - Number of people attending (including the respondent)
--       - `dietary_restrictions` (text, optional) - Any dietary requirements or restrictions
--       - `message` (text, optional) - Optional message from the guest
--       - `created_at` (timestamptz) - When the RSVP was submitted
    
--     - `contact_messages`
--       - `id` (uuid, primary key) - Unique identifier for each message
--       - `name` (text) - Name of the person sending the message
--       - `email` (text) - Email address of the sender
--       - `subject` (text, optional) - Subject of the message
--       - `message` (text) - The message content
--       - `created_at` (timestamptz) - When the message was sent

--   2. Security
--     - Enable RLS on both tables
--     - Allow public insert access for RSVP responses (guests can submit)
--     - Allow public insert access for contact messages (guests can send messages)
--     - Only authenticated users can read the data (for the couple to review)

--   3. Notes
--     - Both tables are designed for public submissions but private viewing
--     - Data integrity is maintained with NOT NULL constraints on essential fields
--     - Timestamps track when responses/messages were received
-- */

-- -- Create RSVP responses table
-- CREATE TABLE IF NOT EXISTS rsvp_responses (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   guest_name text NOT NULL,
--   email text NOT NULL,
--   phone text,
--   attending boolean NOT NULL DEFAULT false,
--   number_of_guests integer NOT NULL DEFAULT 1,
--   dietary_restrictions text,
--   message text,
--   created_at timestamptz DEFAULT now()
-- );

-- -- Create contact messages table
-- CREATE TABLE IF NOT EXISTS contact_messages (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   name text NOT NULL,
--   email text NOT NULL,
--   subject text,
--   message text NOT NULL,
--   created_at timestamptz DEFAULT now()
-- );

-- -- Enable RLS
-- ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- -- Allow anyone to insert RSVP responses
-- CREATE POLICY "Anyone can submit RSVP"
--   ON rsvp_responses FOR INSERT
--   WITH CHECK (true);

-- -- Allow anyone to insert contact messages
-- CREATE POLICY "Anyone can send messages"
--   ON contact_messages FOR INSERT
--   WITH CHECK (true);

-- -- Only authenticated users can view RSVPs
-- CREATE POLICY "Authenticated users can view RSVPs"
--   ON rsvp_responses FOR SELECT
--   TO authenticated
--   USING (true);

-- -- Only authenticated users can view contact messages
-- CREATE POLICY "Authenticated users can view messages"
--   ON contact_messages FOR SELECT
--   TO authenticated
--   USING (true);
-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- RSVP responses table (improved)
CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  email text NOT NULL,
  phone text,
  attending boolean NOT NULL DEFAULT false,
  number_of_guests integer NOT NULL DEFAULT 0 CHECK (number_of_guests >= 0),
  dietary_restrictions text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Optional: index for faster lookups by email / ordering
CREATE INDEX IF NOT EXISTS idx_rsvp_email ON rsvp_responses (email);
CREATE INDEX IF NOT EXISTS idx_rsvp_created_at ON rsvp_responses (created_at DESC);

-- Contact messages table (unchanged except created_at NOT NULL)
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_messages (email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages (created_at DESC);

-- Enable RLS
ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous) to insert RSVPs
CREATE POLICY IF NOT EXISTS "Anyone can submit RSVP"
  ON rsvp_responses
  FOR INSERT
  -- no "TO" so applies to all roles (anon + authenticated)
  WITH CHECK (true);

-- Allow anyone to insert contact messages
CREATE POLICY IF NOT EXISTS "Anyone can send messages"
  ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can SELECT RSVPs
CREATE POLICY IF NOT EXISTS "Authenticated users can view RSVPs"
  ON rsvp_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can SELECT contact messages
CREATE POLICY IF NOT EXISTS "Authenticated users can view messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- OPTIONAL: Allow authenticated users to UPDATE/DELETE (so the couple can manage)
CREATE POLICY IF NOT EXISTS "Authenticated can modify RSVPs"
  ON rsvp_responses
  FOR UPDATE, DELETE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Authenticated can modify messages"
  ON contact_messages
  FOR UPDATE, DELETE
  TO authenticated
  USING (true)
  WITH CHECK (true);
