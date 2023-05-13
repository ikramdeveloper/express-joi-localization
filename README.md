# Localization with Express & Joi using i18next

A sample project using ExpressJS for creating web server and Joi for validating route schemas. Adding internationalization/localization using i18next that works flawlessly with express and joi

# Setup

After cloning, run `yarn` or `npm install` to install dependencies, then run `yarn start` or `npm run start` to start the server.

# Examples

## Basic Translation

On sending GET request to the `/greeting` endpoint, it will return a message in English (`en`) or Spanish (`es`) based on the `Accept-Language` header.

To get a message in Spanish, in request headers add:

```
"Accept-Language": "es"
```

To get a message in English, in request headers add:

```
"Accept-Language": "es"
```

or pass no accept-language property as English is set as default language

### POST Request

Send POST request to the `/greeting` endpoint and pass name as request body to get a greeted message with the name.
On passing invalid request body, it will return error message in the language passed as request headers.

## Default Language

English is configured as the default language. The message returned by the `/no-translation` endpoint does not have a translation. No matter what value is passed in the `Accept-Language` header, only the default (English) message will be returned.

```
"Accept-Language": "es"
"Accept-Language": "fr"
```

---

## Acknowledgment

- [express-i8n-example](https://dev.to/bmanley91/express-i18n-made-easy-2d2o)
- [joi-validation-in-javascript](https://dev.to/pestrinmarco/joi-validation-in-javascript-how-to-translate-the-errors-35p7)

Any recommendations or customizations are appreciated
