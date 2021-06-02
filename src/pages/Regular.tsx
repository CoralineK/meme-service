import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MemeType } from "../types";
import Memes from "../components/memes/Memes";
import TabPanel from "../components/memes/TabPanel";
import { selectMemes } from "../redux/reducer";
import { useSelector } from "react-redux";

export default function Regular() {
  const [memes, setMemes] = useState<MemeType[]>([]);

  const history = useHistory();
  const path = history.location.pathname.replace("/", "");
  const getMemes = useSelector(selectMemes);

  useEffect(() => {
    setMemes(getMemes.filter((meme) => !meme.hot));
  }, [getMemes]);

  return (
    <TabPanel value={path} index={"regular"}>
      <Memes memes={memes} />
    </TabPanel>
  );
}
