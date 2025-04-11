import logoImg from "../../assets/logo.svg";
import { FormProps } from "../../types/todo";
import { Form } from "../form";
import "./styles.css"

export function Header({onAddTodo}: FormProps) {
  return (
    <header>
      <img src={logoImg} alt="to-do logo" />
      <Form onAddTodo={onAddTodo}/>
    </header>
  );
}
