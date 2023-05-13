const esErrors = {
  "string.empty": "No puede estar vacía",
  "number.base": "Tiene que ser un número",
  "any.invalid": "Valor no válida",
  "domain.invalid": "Dominio no válido",
  "email.invalid": "Correo electrónico no válido",
  "phoneNumber.invalid": "Número de teléfono no válida",
  "array.unique": "contiene un valor duplicado",
  "custom.max11char":
    "Máximo 11 caracteres alfanuméricos. Empezar con una letra",
  "any.required": "se requiere",
  "object.unknown": "No se permite",
};

const enErrors = {
  "string.empty": "Cannot be empty",
  "number.base": "Must be a number",
  "any.invalid": "Value not valid",
  "domain.invalid": "Domain not valid",
  "email.invalid": "Email not valid",
  "phoneNumber.invalid": "Phone Number not valid",
  "array.unique": "contains a duplicate value",
  "custom.max11char": "Maximum 11 alphanumeric characters. Start with a letter",
  "any.required": "is required",
  "object.unknown": "is not allowed",
};

module.exports = { esErrors, enErrors };
