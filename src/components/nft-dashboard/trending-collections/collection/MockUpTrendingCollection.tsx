import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { TrendingActivity } from '@app/api/activity.api';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import * as S from './TrendingCollection.styles';

export const MockUpTrendingCollection: React.FC<TrendingActivity> = ({ title, owner, usd_value, image, avatar }) => {
  const { t } = useTranslation();

  return (
    <S.Card padding={0} $img={image}>
      <S.CollectionImage src={image} alt="nft" />
      {/*<S.BidButton type="ghost">{t('nft.bid')}</S.BidButton>*/}
      <S.NftCollectionInfo>
        {/*<S.AuthorAvatarWrapper>*/}
        {/*  <BaseAvatar shape="circle" size={64} src={avatar} alt={owner} />*/}
        {/*</S.AuthorAvatarWrapper>*/}
        <S.InfoRow>
          <S.Title level={5}>{title}</S.Title>
        </S.InfoRow>
        <S.InfoRow>
          <S.USDText>{getCurrencyPrice(formatNumberWithCommas(usd_value), CurrencyTypeEnum.USD)}</S.USDText>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </S.Card>
  );
};
