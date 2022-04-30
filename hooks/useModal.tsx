import React from "react";

const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(initialState);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useModal;
