
-- Allow admin updates (for now, allow any update on partners for the admin dashboard)
CREATE POLICY "Allow updating partner status" ON public.partners
  FOR UPDATE TO public
  USING (true)
  WITH CHECK (true);

-- Also allow selecting all partners (not just approved) for admin view
CREATE POLICY "Allow selecting all partners for admin" ON public.partners
  FOR SELECT TO public
  USING (true);
