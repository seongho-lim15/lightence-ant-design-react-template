import React, { useEffect, useState } from 'react';
import { Header } from '../../../header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MockUpLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useResponsive } from '@app/hooks/useResponsive';
import { References } from '@app/components/common/References/References';
import { MockUpLayoutMaster } from "@app/components/layouts/main/MainLayout/MockUpLayout.styles";
import { MockUpHeader } from "@app/components/header/MockUpHeader";

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop } = useResponsive();
  const location = useLocation();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsTwoColumnsLayout([MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH].includes(location.pathname) && isDesktop);
  }, [location.pathname, isDesktop]);

  return (
    <S.MockUpLayoutMaster>
      {/*<MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />*/}

      <S.MockUpLayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <MockUpHeader toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} />
        </MainHeader>

        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
          {/*{!isTwoColumnsLayout && <References />}*/}
        </MainContent>
      </S.MockUpLayoutMain>
    </S.MockUpLayoutMaster>
  );
};

export default MainLayout;
