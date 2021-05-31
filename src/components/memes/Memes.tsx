import styled from "styled-components";
import Meme from "./Meme";
import { MemeType } from "../../types";

const Container = styled.div`
  margin-top: 30px;
`;

type Props = {
  memes: MemeType[];
};

export default function Memes({ memes }: Props) {
  return (
    <Container>
      {memes && memes.map((meme, index) => <Meme key={index} meme={meme} />)}
    </Container>
  );
}
