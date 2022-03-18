import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

type PropsType = {
  children?: ReactNode;
};

export const Main: FC<PropsType> = ({ children }): ReactElement => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
