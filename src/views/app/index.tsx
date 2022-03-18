import { FC, ReactElement, ReactNode } from 'react';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

type PropsType = {
  children?: ReactNode;
};

export const AppView: FC<PropsType> = ({ children }): ReactElement => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);
