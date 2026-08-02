"use client";

import React, { createContext, useContext, useState } from "react";

interface ConsultationModalContextType {
  isOpen: boolean;
  defaultService: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType>({
  isOpen: false,
  defaultService: "Website Development",
  openModal: () => {},
  closeModal: () => {}
});

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("Website Development");

  const openModal = (service?: string) => {
    if (service) {
      setDefaultService(service);
    } else {
      setDefaultService("Website Development");
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationModalContext.Provider value={{ isOpen, defaultService, openModal, closeModal }}>
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  return useContext(ConsultationModalContext);
}
