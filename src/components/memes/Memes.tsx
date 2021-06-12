import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Meme from "../../components/memes/Meme";
import TabPanel from "../../components/memes/TabPanel";
import { MemeType } from "../../types";

const Container = styled.div`
  margin-top: 30px;
`;

type Props = {
  memes: MemeType[];
};

export default function Memes({ memes }: Props) {
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentMemes, setCurrentMemes] = useState<MemeType[]>([]);

  useEffect(() => {
    setCurrentMemes(memes.slice(0, 5));
  }, [memes]);

  function getMoreMemes() {
    setTimeout(() => {
      setCurrentMemes(memes.concat(memes.slice(start, end)));
    }, 1500);
    setStart(start + 5);
    setEnd(end + 5);
  }

  return (
    <TabPanel value={path} index={path}>
      <Container>
        {currentMemes.length > 0 && (
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={currentMemes.length}
            next={getMoreMemes}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>You have seen it all</h4>}
          >
            {currentMemes.map((meme, index) => (
              <Meme key={index} meme={meme} />
            ))}
          </InfiniteScroll>
        )}
      </Container>
    </TabPanel>
  );
}
