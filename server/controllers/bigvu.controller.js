import { fetchAPI } from "../services/fetchAPI.js";

const getAllCourses = async (req, res) => {
  try {
    const data = await fetchAPI("course/list");
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCourseDataByID = async (req, res) => {
  try {
    const data = await fetchAPI(`course/${req.params.id}`);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getAllCourses, getCourseDataByID };
