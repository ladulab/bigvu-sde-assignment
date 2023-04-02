import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const BIGVU_ID = process.env.SECRET_ID;
const BIGVU_PASSWORD = process.env.SECRET_PASSWORD;
const BIGVU_BASE_URL = process.env.BIGVU_BASE_URL;

const fetchAPI = async (endpoint) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(
      `${BIGVU_ID}:${BIGVU_PASSWORD}`
    ).toString("base64")}`,
  };

  const response = await axios.get(`${BIGVU_BASE_URL}/${endpoint}`, {
    headers,
  });
  return response.data;
};

export { fetchAPI };
