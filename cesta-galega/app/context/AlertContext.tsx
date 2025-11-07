'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Tipos de alerta
type AlertType = 'success' | 'error' | 'warning' | 'info';

// Tipo de contexto para las alertas
interface AlertContextType {
  showAlert: (message: string, type: AlertType) => void;
  clearAlert: () => void;
  alert: { message: string | null; type: AlertType | null };
}

// Crea contenido para las alertas, inicializado como undefined
const AlertContext = createContext<AlertContextType | undefined>(undefined);

// Componente que envuelve la app para proporcionar el contexto global de alertas
export const AlertProvider = ({ children }: { children: ReactNode }) => {
  // Estado de la alerta
  const [alert, setAlert] = useState<{ message: string | null; type: AlertType | null }>({
    message: null,
    type: null,
  });

  // Mostrar una alerta
  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: null, type: null }), 5000);
  };

  // Borrar alerta
  const clearAlert = () => {
    setAlert({ message: null, type: null });
  };

  return (
    <AlertContext.Provider value={{ showAlert, clearAlert, alert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Hook personalizado para consumir el contexto de alertas
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('usealert error');
  }
  return context;
};
