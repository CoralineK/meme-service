import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThumbDownRounded, ThumbUpRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addDownvote, addUpvote, setHot } from "../../redux/reducer";
import { MemeType } from "../../types";
import { putMeme } from "../../API";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 500,
      marginBottom: 30,
    },
    media: {
      height: 500,
      backgroundPosition: "center",
      backgroundSize: "contain",
    },
    actions: {
      paddingRight: 30,
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

type Props = {
  meme: MemeType;
};

export default function Meme({ meme }: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentMeme, setCurrentMeme] = useState<MemeType>(meme);

  useEffect(() => {
    putMeme(currentMeme, currentMeme.id);
  }, [currentMeme]);

  return (
    <Card className={classes.card}>
      <CardHeader title={meme.name} />
      <CardMedia className={classes.media} image={meme.url} title={meme.name} />
      <CardActions className={classes.actions}>
        <IconButton
          onClick={(e: any) => {
            dispatch(addUpvote(meme.id));
            dispatch(setHot());
            setCurrentMeme({
              ...meme,
              upvote: meme.upvote + 1,
              hot: meme.upvote + 1 - meme.downvote > 5 ? true : false,
            });
          }}
        >
          <ThumbUpRounded />
        </IconButton>
        <p>{meme.upvote}</p>
        <IconButton
          onClick={() => {
            dispatch(addDownvote(meme.id));
            dispatch(setHot());
            setCurrentMeme({
              ...meme,
              downvote: meme.downvote + 1,
              hot: meme.upvote - (meme.downvote + 1) > 5 ? true : false,
            });
          }}
        >
          <ThumbDownRounded />
        </IconButton>
        <p>{-meme.downvote}</p>
      </CardActions>
    </Card>
  );
}
