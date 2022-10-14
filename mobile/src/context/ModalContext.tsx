import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  handleOpenModalDuo: () => void;
  handleCloseModalDuo: () => void;
  modalOpen: boolean;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalDuoProvider({ children }: ModalProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModalDuo() {
    setModalOpen(true);
  }

  function handleCloseModalDuo() {
    setModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{ handleCloseModalDuo, handleOpenModalDuo, modalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}
