import { createClient } from '@supabase/supabase-js'
// i am aware of putting this public is going to be an issue but im doing it for a school project so i dont mind if you see it
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://noethlsrutxvlcgumqsh.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZXRobHNydXR4dmxjZ3VtcXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTY0MjQsImV4cCI6MjA4OTQ5MjQyNH0.Iu1q2bjWDkWMTb2F_kiNNb8Za95mHczrgTZuBmXRGpI'
)
