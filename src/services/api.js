import axios from 'axios';

const BASE_URL = '';

const getRandomWord = () => axios.get(`${BASE_URL}/terms/random`);

export default {
  getRandomWord,
};
