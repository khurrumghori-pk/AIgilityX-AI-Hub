
CREATE TYPE public.partner_category AS ENUM (
  'ai_solutions', 'experts', 'regulators', 'research_labs', 'certified_partners', 'telcos_cloud'
);

CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category partner_category NOT NULL,
  industry TEXT NOT NULL DEFAULT 'Multiple',
  region TEXT NOT NULL DEFAULT 'GCC & MENA',
  country TEXT NOT NULL DEFAULT 'UAE',
  description TEXT NOT NULL DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  website TEXT,
  logo_url TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  deployments INTEGER DEFAULT 0,
  pricing TEXT DEFAULT 'Contact Sales',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- Anyone can view approved partners
CREATE POLICY "Anyone can view approved partners"
ON public.partners
FOR SELECT
USING (status = 'approved');

-- Anyone can register (insert) as a partner
CREATE POLICY "Anyone can register as partner"
ON public.partners
FOR INSERT
WITH CHECK (true);
