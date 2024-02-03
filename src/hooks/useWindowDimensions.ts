import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants/breakpoints';

const useWindowDimensions = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let newScreenSize;

      if (width <= BREAKPOINTS.medium) {
        newScreenSize = 'small';
      } else if (width > BREAKPOINTS.medium && width <= BREAKPOINTS.large) {
        newScreenSize = 'medium';
      } else if (width > BREAKPOINTS.large && width <= BREAKPOINTS.xlarge) {
        newScreenSize = 'large';
      } else if (width > BREAKPOINTS.xlarge && width <= BREAKPOINTS.xxlarge) {
        newScreenSize = 'xlarge';
      } else {
        newScreenSize = 'xxlarge';
      }

      setScreenSize(newScreenSize);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useWindowDimensions;