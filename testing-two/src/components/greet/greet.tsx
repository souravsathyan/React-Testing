import { GreetProps } from "./greet.types";

const Greet = ({ name }: GreetProps) => {
  return <div>Greet {name ? name : "Group"}</div>;
};

export default Greet;
