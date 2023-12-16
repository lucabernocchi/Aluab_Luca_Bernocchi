import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `https://kukocidwjuksykxubgrq.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1a29jaWR3anVrc3lreHViZ3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyOTgxNzQsImV4cCI6MjAxNjg3NDE3NH0.t9l9qXE24HaCrrtsHV3S6ZQGigNKfq50FkruHHxXkR8`
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;