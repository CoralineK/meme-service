import { useSelector } from "react-redux";
import Memes from "../components/memes/Memes";
import { selectHotMemes } from "../redux/reducer";

export default function Hot() {
  const getMemes = useSelector(selectHotMemes);

  return <Memes memes={getMemes} />;
}
