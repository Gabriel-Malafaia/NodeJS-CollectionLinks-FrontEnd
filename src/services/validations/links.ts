import * as yup from "yup";

const createCardSchema = yup.object().shape({
  title: yup
    .string()
    .required("Título obrigatório!")
    .max(26, "Máximo de 26 caracteres!"),
  description: yup.string().notRequired().max(156, "Máximo de 156 caracteres!"),
  url: yup.string().required("Url obrigatório!"),
});

export { createCardSchema };
