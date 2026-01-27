const SUPABASE_URL = "https://ctbbstzbkvvlsdqcxydb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YmJzdHpia3Z2bHNkcWN4eWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzODQxMzgsImV4cCI6MjA4NDk2MDEzOH0.l2V3dDf5PyeZsH26OqBx9uNhrP_xbs7G5pETw4NWlGo";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
