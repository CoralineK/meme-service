import { useEffect, useState } from "react";
import { selectHotMemes } from "../redux/reducer";
import { useSelector } from "react-redux";
import { MemeType } from "../types";
import Memes from "../components/memes/Memes";

export default function Hot() {
  const [memes, setMemes] = useState<MemeType[]>([]);
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(10);

  const getHotMemes = useSelector(selectHotMemes);

  useEffect(() => {
    setMemes(getHotMemes.slice(0, 5));
  }, [getHotMemes]);

  function getMoreMemes() {
    setTimeout(() => {
      setMemes(memes.concat(getHotMemes.slice(start, end)));
    }, 1500);

    setStart(start + 5);
    setEnd(end + 5);
  }

  return <Memes memes={memes} getMoreMemes={getMoreMemes} />;
}
