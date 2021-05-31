import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MemeType } from "../types";
import Memes from "../components/memes/Memes";
import TabPanel from "../components/memes/TabPanel";
import { selectHotMemes } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addToHotMemes } from "../redux/reducer";

export default function Hot() {
  const [hotMemes, setHotMemes] = useState<MemeType[]>([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");
  const getHotMemes = useSelector(selectHotMemes);

  useEffect(() => {
    setHotMemes(getHotMemes);
  }, [getHotMemes]);

  useEffect(() => {
    dispatch(addToHotMemes());
  }, [dispatch]);

  return (
    <TabPanel value={path} index={"hot"}>
      <Memes memes={hotMemes} />
    </TabPanel>
  );
}
