import { Box, Button, TextField } from "@mui/material";
import Form from "./Form";
import { useFormData } from "../reducers/FormReducer";

const Login = () => {
  const [{ email, password }, dispatch] = useFormData({
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submited");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <Box>
      <Form onSubmit={onSubmit}>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={onChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={onChange}
        />
        <Button type="submit">Log In</Button>
      </Form>
    </Box>
  );
};

export default Login;
