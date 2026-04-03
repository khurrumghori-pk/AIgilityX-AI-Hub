
-- Fix partners update policy to require admin role
DROP POLICY IF EXISTS "Allow updating partner status" ON public.partners;
CREATE POLICY "Admins can update partners"
ON public.partners FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Fix partners select-all policy to require admin role
DROP POLICY IF EXISTS "Allow selecting all partners for admin" ON public.partners;
CREATE POLICY "Admins can view all partners"
ON public.partners FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
