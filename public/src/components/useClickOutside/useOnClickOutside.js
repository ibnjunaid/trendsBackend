import { useEffect } from "react";

function useOnClickOutside(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      if ( !ref.current || !ref.current.contains(event.target)) {
        callback(event);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  });
}

export default useOnClickOutside;
