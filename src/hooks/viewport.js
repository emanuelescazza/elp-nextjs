import { useState, useEffect } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      handleWindowResize();
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  // Return the width so we can use it in our components
  return { width };
}