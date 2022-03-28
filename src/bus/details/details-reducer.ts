import { ICurrentCountryType, STATUS } from '../../types';
import { IAction } from '../../types/commonTypes';
import { detailsTypes } from './details-types';

export type InitialStateDetailsReduserType = {
  currentCountry: ICurrentCountryType | null;
  status: STATUS;
  error: string | null;
  neighbors: string[];
};

const initialState: InitialStateDetailsReduserType = {
  currentCountry: null,
  status: STATUS.idle,
  error: null,
  neighbors: [],
};

export const detailsReduser = (
  state = initialState,
  action: IAction<any>
): InitialStateDetailsReduserType => {
  switch (action.type) {
    case detailsTypes.SET_LOADING:
      return {
        ...state,
        error: null,
        status: STATUS.loading,
      };
    case detailsTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        status: STATUS.rejected,
      };
    case detailsTypes.SET_COUNTRY:
      return {
        ...state,
        error: null,
        status: STATUS.received,
        currentCountry: action.payload,
      };
    case detailsTypes.CLEAR_DETAILS:
      return initialState;
    case detailsTypes.SET_NEIGHBORS:
      return {
        ...state,
        status: STATUS.received,
        neighbors: action.payload,
      };

    default:
      return state;
  }
};
