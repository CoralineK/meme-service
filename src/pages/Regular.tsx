import { useEffect, useState } from "react";
import { selectMemes } from "../redux/reducer";
import { useSelector } from "react-redux";
import { MemeType } from "../types";
import Memes from "../components/memes/Memes";

export default function Regular() {
  const [memes, setMemes] = useState<MemeType[]>([]);
  const [start, setStart] = useState(5);
  const [end, setEnd] = useState(10);

  const getMemes = useSelector(selectMemes);

  useEffect(() => {
    setMemes(getMemes.slice(0, 5));
  }, [getMemes]);

  useEffect(() => {}, []);

  function getMoreMemes() {
    setTimeout(() => {
      setMemes(memes.concat(getMemes.slice(start, end)));
    }, 1500);

    setStart(start + 5);
    setEnd(end + 5);
  }

  return (
    <>
      <Memes memes={memes} getMoreMemes={getMoreMemes} />
    </>
  );
}
