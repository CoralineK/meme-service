import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MemeType } from "../types";
import Memes from "../components/memes/Memes";
import TabPanel from "../components/memes/TabPanel";
import { selectMemes } from "../redux/reducer";
import { useSelector } from "react-redux";

export default function Hot() {
  const [hotMemes, setHotMemes] = useState<MemeType[]>([]);
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");
  const getHotMemes = useSelector(selectMemes);

  useEffect(() => {
    setHotMemes(getHotMemes.filter((meme) => meme.hot));
  }, [getHotMemes]);

  return (
    <TabPanel value={path} index={"hot"}>
      <Memes memes={hotMemes} />
    </TabPanel>
  );
}
