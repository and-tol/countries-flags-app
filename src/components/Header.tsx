import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FC, ReactElement, useEffect } from 'react';
import Link from 'next/link';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';
import { AppState } from '../init/root-reducer';
import { setTheme } from '../bus/theme/theme-actions';
import { controlsActions } from '../bus/controls/controls-actions';
import { IAction } from '../types/commonTypes';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: pointer;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

type PropsType = {
  children?: never;
};
export const Header: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const theme = useSelector((state: AppState) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  const cleanUp = (): IAction<any> => dispatch(controlsActions.clearControls());

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Link href='/' passHref>
            <Title onClick={cleanUp}>Where is the world?</Title>
          </Link>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
