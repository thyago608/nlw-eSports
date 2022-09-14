import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json({
    message: "success in get method",
  });
});

app.listen(3333, () => console.log("Server is running"));
