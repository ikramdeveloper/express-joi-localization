require("dotenv").config();
const express = require("express");
const i18next = require("i18next");
const Backend = require("i18next-node-fs-backend");
const i18nextMiddleware = require("i18next-express-middleware");
const validate = require("./middlwares/validate");
const greetingValidator = require("./validation/greeting.validation");

const PORT = process.env.PORT || 8000;

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + "/../resources/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    preload: ["en", "es"],
  });

const app = express();

app.use(express.json());

app.use(i18nextMiddleware.handle(i18next));

app.get("/greeting", (req, res) => {
  const response = req.t("greeting");
  res.status(200).send(response);
});

app.post("/greeting", validate(greetingValidator.greetingPost), (req, res) => {
  const response = `${req.t("greeting")} ${req.body.name}`;
  res.status(200).send(response);
});

app.get("/no-translation", (req, res) => {
  const response = req.t("no-translation");
  res.status(200).send(response);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
