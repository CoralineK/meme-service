import styled from "styled-components";
import Meme from "./Meme";
import { MemeType, VoteType } from "../../types";

const Container = styled.div`
  margin-top: 30px;
`;

type Props = {
  memes: MemeType[];
  handleUpvoteClick: ({ meme, vote }: VoteType) => void;
  handleDownvoteClick: ({ meme, vote }: VoteType) => void;
};

export default function Memes({
  memes,
  handleUpvoteClick,
  handleDownvoteClick,
}: Props) {
  return (
    <Container>
      {memes &&
        memes.map((meme, index) => (
          <Meme
            key={index}
            url={meme.url}
            name={meme.name}
            upvote={meme.upvote}
            downvote={meme.downvote}
            handleUpvoteClick={() =>
              handleUpvoteClick({ meme, vote: "upvote" })
            }
            handleDownvoteClick={() =>
              handleDownvoteClick({ meme, vote: "downvote" })
            }
          />
        ))}
    </Container>
  );
}
