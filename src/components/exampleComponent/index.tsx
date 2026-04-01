import React from "react";
import { ExampleWorkStyledButton } from "./styles";

interface ExampleWorkButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

const ExampleWorkButton: React.FC<ExampleWorkButtonProps> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <ExampleWorkStyledButton variant="contained" onClick={onClick} type={type}>
      {label}
    </ExampleWorkStyledButton>
  );
};

export default ExampleWorkButton;
