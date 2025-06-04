// /app/api/requests/route.ts 

import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseClient } from '@/lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const supabase = supabaseClient()
  const { data, error } = await supabase
    .from('requests')
    .insert([
      {
        requester_name: req.body.name,
        requester_email: req.body.email,
        requester_phone: req.body.phone,
        property_id: req.body.propertyId,
        general_notes: req.body.notes,
        tracking_code: `TRK-${Date.now()}`
      }
    ])
    .select()
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
}
