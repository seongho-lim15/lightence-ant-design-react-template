import React from 'react';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from "@app/components/common/BaseButton/BaseButton";

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MockUpMobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <BaseRow justify="space-between" align="middle">
      <BaseCol>
        <h2>GEN Wave</h2>
      </BaseCol>

      <BaseCol>
        <BaseRow align="middle">
          <BaseCol>
          </BaseCol>

          <BaseCol>
            {/*<HeaderSearch />*/}
          </BaseCol>

          <BaseCol>
            {/*<BaseButton type="default">생성</BaseButton>*/}
          </BaseCol>
        </BaseRow>
      </BaseCol>

      <S.BurgerCol>
        {/*<S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />*/}
      </S.BurgerCol>
    </BaseRow>
  );
};
