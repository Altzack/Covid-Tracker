import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import {
//   SIDE_MARGIN_WIDTH_SMALL,
//   SIDE_MARGIN_WIDTH_MEDIUM,
//   SIDE_MARGIN_WIDTH,
// } from '../../components/Layout/LayoutConstants';

export const BigScreenOnly = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  return isDesktop ? children : null;
};

export const SmallScreenOnly = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};

export const useIsTabletOrMobile = () => {
  return useMediaQuery({ maxDeviceWidth: 768 });
};

export const useIsDesktop = () => {
  return useMediaQuery({ minDeviceWidth: 768 });
};

export const useIsSmallScreen = () => {
  const { isXS, isXXS } = useScreenClass();
  return isXS || isXXS;
};

const sceenClassToBreakpoint = {
  xxs: 576,
  xs: 768,
  sm: 992,
  md: 1200,
  lg: 1600,
  xl: 69420,
};

export const useScreenClass = () => {
  function getScreenClass() {
    const windowWidth = window.innerWidth;
    if (windowWidth < sceenClassToBreakpoint.xxs) return 'xxs';
    if (windowWidth < sceenClassToBreakpoint.xs) return 'xs';
    if (windowWidth < sceenClassToBreakpoint.sm) return 'sm';
    if (windowWidth < sceenClassToBreakpoint.md) return 'md';
    if (windowWidth < sceenClassToBreakpoint.lg) return 'lg';
    return 'xl';
  }

  const [screenClass, setScreenClass] = useState(getScreenClass());

  useEffect(() => {
    const handleResize = () => {
      setScreenClass(getScreenClass());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isXXS = screenClass === 'xxs';
  const isXS = screenClass === 'xs';
  const isSM = screenClass === 'sm';
  const isMD = screenClass === 'md';
  const isLG = screenClass === 'lg';
  const isXL = screenClass === 'xl';

  return { screenClass, isXXS, isXS, isSM, isMD, isLG, isXL };
};

export const useGetContentWidth = () => {
  const { screenClass } = useScreenClass();

  if (screenClass === 'xl') return '1200px';
  if (screenClass === 'lg') return '1000px';
  if (screenClass === 'md') return '800px';
  return '100%';
};

export const useIsGreaterThan = (screenClassToCheck) => {
  const [isGreater, setIsGreater] = useState(
    window.innerWidth > sceenClassToBreakpoint[screenClassToCheck]
  );
  useEffect(() => {
    const handleResize = () =>
      setIsGreater(
        window.innerWidth > sceenClassToBreakpoint[screenClassToCheck]
      );
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenClassToCheck]);
  return isGreater;
};

// export const useSideMargin = () => {
//   const { isXXS, isXS, isSM, isMD } = useScreenClass();

//   if (isXXS || isXS || isSM) {
//     return SIDE_MARGIN_WIDTH_SMALL;
//   }
//   if (isMD) {
//     return SIDE_MARGIN_WIDTH_MEDIUM;
//   }
//   return SIDE_MARGIN_WIDTH;
// };
