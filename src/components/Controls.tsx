import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { selectRegion } from '../bus/controls/controls-selectors';
import { controlsActions } from '../bus/controls/controls-actions';
import { IOptionsMapType, OptionMapValueType } from '../types';

const optionsMap: IOptionsMapType = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

type PropsType = {
  children?: never;
};

export const Controls: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  console.log(region);
  console.log('optionsMap[region]', optionsMap[region]);

  const handleSelect = (reg: OptionMapValueType): void => {
    dispatch(controlsActions.setRegion(reg?.value ?? ''));
  };

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={(reg): void => handleSelect(reg as OptionMapValueType)}
      />
    </Wrapper>
  );
};
