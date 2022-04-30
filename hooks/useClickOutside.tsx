import React from "react";

type ContainerRef = React.RefObject<HTMLElement>;

const useClickOutside = (
  container: ContainerRef | ContainerRef[],
  callback: () => void
) => {
  const handler = React.useCallback(
    (e: MouseEvent) => {
      const isClickingOutside = Array.isArray(container)
        ? container.every((ref) => !ref.current?.contains(e.target as Node))
        : !container.current?.contains(e.target as Node);

      if (isClickingOutside) {
        callback();
      }
    },
    [container, callback]
  );

  React.useEffect(() => {
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, [callback, container, handler]);
};

export default useClickOutside;
