import { randomUUID } from 'node:crypto';
import { supabaseAdmin } from '@/app/lib/supabase/supabaseAdmin';

export async function uploadImage(file: File, folder: string = 'uploads') {
  const ext = file.name.split('.').pop();
  const fileName = `${folder}/${randomUUID()}.${ext}`;

  const { data, error } = await supabaseAdmin.storage.from('images').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) throw new Error(error.message);

  const { data: urlData } = supabaseAdmin.storage.from('images').getPublicUrl(fileName);

  return urlData.publicUrl;
}
