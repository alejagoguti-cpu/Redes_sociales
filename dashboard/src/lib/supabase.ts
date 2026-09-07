import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://uobglfexvgxeogedthbh.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_t20trpv9gh1D4l4qz86LyA_U5scsSKq'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          scheduled_date: string
          scheduled_time: string
          platform: string
          title: string
          copy_text: string
          description: string
          status: string
          priority: string
          created_at: string
          updated_at: string
          comments?: string
        }
        Insert: Omit<Database['public']['Tables']['posts']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['posts']['Insert']>
      }
      engagement_metrics: {
        Row: {
          id: string
          metric_date: string
          platform: string
          post_title: string
          impressions: number
          engagement_rate: number
          created_at: string
        }
      }
    }
  }
}
