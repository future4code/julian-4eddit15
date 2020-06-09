import { useState } from "react";
import { createMuiTheme } from "@material-ui/core";

export const useTheme = () => {
  const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0079d3",
      },
    },
  });

  return MyTheme;
};

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};
