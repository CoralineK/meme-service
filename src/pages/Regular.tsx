import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getMemes } from "../API";
import { MemeType, VoteType } from "../types";
import Memes from "../components/memes/Memes";
import TabPanel from "../components/memes/TabPanel";
import { selectMemes } from "../redux/reducer";

export default function Regular() {
  const [memes, setMemes] = useState<MemeType[]>([]);

  const history = useHistory();
  const path = history.location.pathname.replace("/", "");

  useEffect(() => {
    getMemes().then((result) => {
      setMemes(result);
    });
  }, []);

  console.log(selectMemes);

  function handleVote({ meme, vote }: VoteType) {
    const updateMemes = memes.map((m) =>
      m.id === meme.id
        ? vote === "upvote"
          ? { ...m, upvote: m.upvote + 1 }
          : { ...m, downvote: m.downvote + 1 }
        : m
    );
    setMemes(updateMemes);
  }

  return (
    <TabPanel value={path} index={"regular"}>
      <Memes
        memes={memes}
        handleUpvoteClick={handleVote}
        handleDownvoteClick={handleVote}
      />
    </TabPanel>
  );
}
