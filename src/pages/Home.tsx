import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return <button onClick={() => history.push("/regular")}>see memes</button>;
}
