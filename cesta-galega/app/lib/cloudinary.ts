export async function uploadToCloudinary(file: File) {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    console.error(data);
    throw new Error('Erro ao subir a imaxe');
  }

  return data.secure_url;
}
