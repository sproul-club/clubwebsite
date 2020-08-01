import { SEARCH_CLUBS } from '../actions/types';
import { catalogData } from '../utils/testApi';

const allClubs = Object.keys(catalogData).map((club) => catalogData[club]);

const initialState = {
  clubs: allClubs,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_CLUBS:
      return { ...state, clubs: payload };
    default:
      return state;
  }
}