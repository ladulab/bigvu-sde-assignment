import express from "express";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";

import bigvuRoutes from "./routers/bigvu.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(compression());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from Backend!",
  });
});

app.use("/api/v1", bigvuRoutes);

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
