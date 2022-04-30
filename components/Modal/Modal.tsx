import clsx from "clsx";
import React, { KeyboardEvent } from "react";
import styles from "~/components/Modal/Modal.module.css";
import useSmallScreen from "~/hooks/useSmallScreen";
import { Close } from "../svg/icons";

type ModalProps = {
  children: React.ReactNode;
  close: () => void;
  readonly id: string;
  initiatorRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  label?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  close,
  id,
  initiatorRef,
  isOpen,
  label,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const isSmallScreen = useSmallScreen(600);

  const debouncedClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (isOpen) {
        close();
        initiatorRef.current?.focus();
      }
    }, 200);
  };

  const backgroundClassNames = clsx(styles.background, {
    [styles.disappear]: isAnimating,
    [styles.visible]: isOpen,
  });

  const modalClassNames = clsx(styles.modal, {
    [styles.hide]: isAnimating,
    [styles.show]: isOpen,
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === "Tab") {
      closeButtonRef.current?.focus();
      e.preventDefault();
    }
  };

  const closeButton = (
    <button
      className={styles.close}
      ref={closeButtonRef}
      onClick={debouncedClose}
      tabIndex={isOpen ? 1 : -1}
      onKeyDown={handleKeyDown}
    >
      <Close size={30} />
    </button>
  );

  React.useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={backgroundClassNames} onClick={debouncedClose}>
      <div
        className={modalClassNames}
        ref={modalRef}
        role="dialog"
        id={`${id}_dialog`}
        aria-labelledby={`${id}_label`}
        aria-modal={true}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 id={`${id}_label`}>{label}</h2>
          {!isSmallScreen && closeButton}
        </header>
        <div className={styles.body} onBlur={(e) => console.log(e)}>
          {children}
        </div>
        {isSmallScreen && closeButton}
      </div>
    </div>
  );
};

export default Modal;
