import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { MemeType } from "../../types";
import TabPanel from "../../components/memes/TabPanel";
import Meme from "../../components/memes/Meme";

const Container = styled.div`
  margin-top: 30px;
`;

type Props = {
  memes: MemeType[];
  getMoreMemes: () => void;
};

export default function Memes({ memes, getMoreMemes }: Props) {
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");

  return (
    <TabPanel value={path} index={path}>
      <Container>
        {memes.length > 0 && (
          <InfiniteScroll
            dataLength={memes.length}
            next={getMoreMemes}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {memes.map((meme, index) => (
              <Meme key={index} meme={meme} />
            ))}
          </InfiniteScroll>
        )}
      </Container>
    </TabPanel>
  );
}
