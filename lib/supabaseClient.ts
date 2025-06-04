import { createBrowserClient } from '@supabase/ssr'   // next >=14
// o  import { createClient } from '@supabase/supabase-js'  // universal

export const supabaseClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
