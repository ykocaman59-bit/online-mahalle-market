// Supabase JS Kütüphanesini CDN üzerinden yükler
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// SUPABASE PANELİNİZDEN ALACAĞINIZ BİLGİLER
// Project Settings -> API bölümündeki Project URL ve anon key
const supabaseUrl = 'https://XXXXXXXXXXXXXX.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

export const supabase = createClient(supabaseUrl, supabaseKey);
