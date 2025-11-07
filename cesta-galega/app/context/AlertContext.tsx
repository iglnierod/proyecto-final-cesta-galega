'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertContextType {
  showAlert: (message: string, type: AlertType) => void;
  clearAlert: () => void;
  alert: { message: string | null; type: AlertType | null };
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<{ message: string | null; type: AlertType | null }>({
    message: null,
    type: null,
  });

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: null, type: null }), 5000);
  };

  const clearAlert = () => {
    setAlert({ message: null, type: null });
  };

  return (
    <AlertContext.Provider value={{ showAlert, clearAlert, alert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('usealert error');
  }
  return context;
};
