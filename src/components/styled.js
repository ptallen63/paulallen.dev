import styled from 'styled-components';
import theme from '../styles/theme';

export const P = styled.p`
  font-size: 18px;
  ${theme.breakpoints.mobile}{
    font-size: 22px;
  }
`;

export default {
  P,
};
