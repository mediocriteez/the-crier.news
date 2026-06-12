import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabasePrivateKey = process.env.SUPABASE_PRIVATE_KEY

// Safety check to ensure env variables are loaded
if (!supabaseUrl || !supabasePrivateKey) {
  throw new Error('Missing Supabase Environment Variables')
}

export const supabaseService = createClient(supabaseUrl, supabasePrivateKey)