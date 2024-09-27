import React from 'react';
import { DesktopHeader } from './layouts/DesktopHeader';
import { MobileHeader } from './layouts/MobileHeader';
import { useResponsive } from '@app/hooks/useResponsive';
import { MockUpMobileHeader } from "@app/components/header/layouts/MockUpMobileHeader";

interface HeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  isTwoColumnsLayout: boolean;
}

export const MockUpHeader: React.FC<HeaderProps> = ({ toggleSider, isSiderOpened, isTwoColumnsLayout }) => {
  const { isTablet } = useResponsive();

  return <MockUpMobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />

  // return isTablet ? (
  //   <DesktopHeader isTwoColumnsLayout={isTwoColumnsLayout} />
  // ) : (
  //   <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
  // )
};
