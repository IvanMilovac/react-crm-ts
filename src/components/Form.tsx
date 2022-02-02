import React, { ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, ...rest }: IFormProps) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
