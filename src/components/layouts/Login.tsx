import { Box, Button, TextField } from "@mui/material";
import Form from "./Form";
import { useFormData } from "../../reducers/FormReducer";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [{ email, password }, dispatch] = useFormData({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
    navigate("/dashboard");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <Box
      sx={{
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "300px",
        width: "100%",
      }}
    >
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
        <Button
          type="submit"
          variant="custom"
          color="secondary"
        >
          Log In
        </Button>
      </Form>
    </Box>
  );
};

export default Login;
