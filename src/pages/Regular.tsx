import { useSelector } from "react-redux";
import Memes from "../components/memes/Memes";
import { selectMemes } from "../redux/reducer";

export default function Regular() {
  const getMemes = useSelector(selectMemes);

  return <Memes memes={getMemes} />;
}
