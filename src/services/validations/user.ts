import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(128, "Tamanho máximo: 128 caracteres!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(6, "Mínimo de 6 caracteres!"),
});

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(128, "Tamanho máximo: 128 caracteres!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(6, "Mínimo de 6 caracteres!")
    .max(64, "Tamanho máximo: 64 caracteres!"),
  confirmPassword: yup
    .string()
    .required("Senha obrigatória!")
    .min(6, "Mínimo de 6 caracteres!")
    .max(64, "Tamanho máximo: 64 caracteres!"),
  name: yup
    .string()
    .min(5, "Mínimo de 5 caracteres!")
    .max(26, "Máximo de 26 Caracteres!")
    .required("Nome obrigatório!"),
});

export { loginSchema, registerSchema };
