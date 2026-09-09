import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://kvfwxwrzupohahybwssm.supabase.co';
const supabaseKey = 'BURAYA_YENI_ANON_KEY_GELECEK';

export const supabase = createClient(supabaseUrl, supabaseKey);
