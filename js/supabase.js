import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://kvfwxwrzupohahybwssm.supabase.co';
const supabaseKey = 'sb_publishable_m4qNy4WXAqQO81XpJEFIWw_a0rze0o0';

export const supabase = createClient(supabaseUrl, supabaseKey);
