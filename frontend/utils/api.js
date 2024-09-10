import axios from 'axios';

const API_BASE_URL = 'http://localhost:8888/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export const fetchChartData = async (chartType) => {
  try {
    const response = await axiosInstance.get(`/${chartType}-data/`);
    console.log(`Fetched ${chartType} data:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${chartType} data:`, error);
    throw error;
  }
};
