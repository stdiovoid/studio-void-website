-- Run this SQL in Supabase SQL Editor only AFTER inviting the admin
-- user from Authentication > Users. This sets a trusted app_metadata role.
-- It does NOT create a user and does NOT change the user's password.
UPDATE auth.users
SET raw_app_meta_data =
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
WHERE lower(email) = lower('stdiovoid5@gmail.com');

-- Verify exactly one admin account was updated:
SELECT id, email, raw_app_meta_data
FROM auth.users
WHERE lower(email) = lower('stdiovoid5@gmail.com');

-- Data API table grants. RLS policies remain responsible for row-level access.
GRANT SELECT ON public.project_categories TO anon, authenticated;
GRANT SELECT ON public.projects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_categories TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT SELECT ON public.announcements TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.announcements TO authenticated;
GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
