import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export const axiosCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then(res => res.data);
}

export const axiosInfoData = async (coinId:string) => {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then(res => res.data);
}

export const axiosPriceData = async (coinId:string) => {
  return await axios.get(`${BASE_URL}/tickers/${coinId}`).then(res => res.data);
}