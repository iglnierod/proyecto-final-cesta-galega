'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogOutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick() {
    setLoading(true);
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      console.log(res.json());
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <button className={'btn btn-text btn-error'} onClick={handleClick}>
      {loading ? <span className="loading loading-dots"></span> : 'Cerrar sesión'}
    </button>
  );
}
