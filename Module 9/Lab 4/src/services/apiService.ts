import axios from "axios";

const API_BASE_URL = "https://api.squiggle.com.au";

export const fetchMatches = async (year: number) => {
  const response = await axios.get(`${API_BASE_URL}/?q=games`, {
    params: { year },
  });
  return response.data;
};

export const fetchMatchById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/?q=game&id=${id}`);
  return response.data;
};
