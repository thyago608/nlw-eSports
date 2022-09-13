import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json({
    message: "is running",
  });
});

app.listen(3333, () => console.log("Server is running"));
