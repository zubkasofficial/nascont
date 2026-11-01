import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ktjrwgwdxcomzgmuxdyc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0anJ3Z3dkeGNvbXpnbXV4ZHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1MDczNzYsImV4cCI6MjEwOTA4MzM3Nn0.W6XnRpY81TB4VvZLZy9gEPyU70e4mvKicoPya4zZPFo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});
