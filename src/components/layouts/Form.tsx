import React, { ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, ...rest }: IFormProps) => {
  return (
    <form
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
      }}
    >
      {children}
    </form>
  );
};

export default Form;
