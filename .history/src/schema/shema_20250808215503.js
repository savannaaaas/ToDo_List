import * as yup from "yup";
export const schema = yup.object().shape({
  task: yup.string().min(1, ""),
});
