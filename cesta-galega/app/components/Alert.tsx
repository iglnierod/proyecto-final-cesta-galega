'use client';
import { useAlert } from '@/app/context/AlertContext';

export default function Alert() {
  const { alert } = useAlert();

  if (!alert.message) return null;

  const alertStyles = {
    success: 'alert alert-success',
    error: 'alert alert-error',
    warning: 'alert alert-warning',
    info: 'alert alert-info',
  };

  return (
    <div
      className={`fixed top-10 w-full md:top-auto md:bottom-5 md:right-5 md:w-lg ${alertStyles[alert.type || 'success']} shadow-lg z-50`}
      role="alert"
    >
      <p>{alert.message}</p>
    </div>
  );
}
