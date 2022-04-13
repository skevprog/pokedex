import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchFromArray = async (dataArray: any[], prop: string | number) => {
  const results = await Promise.all(dataArray.map(async (e: { [x: string]: string; }) => {
    const promiseResp = await axios.get(e[prop]);
    return promiseResp.data;
  }));
  return results;
};

export const capitalizeWord = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
