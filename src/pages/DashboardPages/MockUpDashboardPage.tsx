import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from '@app/components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import {
  MockUpTrendingCollections
} from "@app/components/nft-dashboard/trending-collections/MockUpTrendingCollections";
import { BaseCard } from "@app/components/common/BaseCard/BaseCard";
import { ValidationForm } from "@app/components/forms/ValidationForm/ValidationForm";
import { MockUpValidationForm } from "@app/components/forms/ValidationForm/MockUpValidationForm";
import styled from "styled-components";

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const ImgContainer = styled.img`
      animation: imgOut 0.5s;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  `


  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>

      <BaseCol span={12}>
          <ImgContainer src={'/img/ploonet.svg'}></ImgContainer>
      </BaseCol>

      <BaseCol span={12}>
        <BaseCard id="validation form" padding="1.25rem">
          <MockUpValidationForm />
        </BaseCard>
      </BaseCol>

      <BaseCol span={24}>
        <MockUpTrendingCollections />
      </BaseCol>

    </BaseRow>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
