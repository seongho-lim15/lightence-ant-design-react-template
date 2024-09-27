import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BREAKPOINTS } from '@app/styles/themes/constants';

export const SectionWrapper = styled.div`
  .slick-slide > div {
    display: flex;
  }

  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  @media only screen {
    //display: flex;
    //flex-direction: column;
    //gap: 1.25rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 0.625rem;
`;

export const ArrowBtn = styled(BaseButton)`
  color: var(--text-nft-light-color);
`;
