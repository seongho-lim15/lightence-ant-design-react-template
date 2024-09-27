import React, { useEffect, useState } from 'react';
import { getTrendingActivities, TrendingActivity } from '@app/api/activity.api';
import * as S from './MockUpTrendingCollections.styles';
import {
  MockUpTrendingCollection
} from "@app/components/nft-dashboard/trending-collections/collection/MockUpTrendingCollection";

export const MockUpTrendingCollections: React.FC = () => {
  const [trending, setTrending] = useState<TrendingActivity[]>([]);

  useEffect(() => {
    getTrendingActivities().then((res) => setTrending(res));
  }, []);

  return (
      <S.SectionWrapper>
        { trending.map(
            (item, index) => <MockUpTrendingCollection key={index} {...item} />
        )}
      </S.SectionWrapper>
  );
};
