import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mwvdzumvqygrdvmamnqw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dmR6dW12cXlncmR2bWFtbnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMzQ5ODYsImV4cCI6MjA4ODYxMDk4Nn0.cNofWUOmOw3CkChvYwRPoDH3fNjy6EAfFzRN1uBonuE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
