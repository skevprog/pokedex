import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchFromArray } from '../utils/helpers';

enum FetchActions {
  FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
  FETCH_ERROR = 'FETCH_ERROR',
}

const initialState = {
  isPending: true,
  error: '',
  data: [],
};

export interface FetchHook<T> {
  data?: T;
  isPending: boolean;
  error?: string;
}

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FetchActions.FETCHING:
      return { ...state, isPending: true };
    case FetchActions.FETCHED:
      return { ...state, isPending: false, data: action.payload };
    case FetchActions.FETCH_ERROR:
      return { ...state, isPending: false, error: action.payload.error };
    default:
      return state;
  }
};

const useFetch = <T>(url: string): FetchHook<T> => {
  const [fetchState, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    dispatch({ type: FetchActions.FETCHING });
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!response) throw Error('Something went wrong');
        if (response.data?.results?.length) {
          const results = await fetchFromArray(response.data.results, 'url');
          dispatch({ type: FetchActions.FETCHED, payload: { count: response.data.count, results } });
          return;
        }
        dispatch({ type: FetchActions.FETCHED, payload: response.data });
      } catch (e: unknown) {
        dispatch({ type: FetchActions.FETCH_ERROR, payload: { error: (e as Error).message } });
      }
    };
    fetchData();
  }, [url]);

  return fetchState;
};

export default useFetch;
