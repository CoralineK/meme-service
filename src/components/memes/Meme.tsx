import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { ThumbDownRounded, ThumbUpRounded } from "@material-ui/icons";
import { MemeType } from "../../types";
import { addUpvote, addDownvote, setHot } from "../../redux/reducer";
import { useDispatch } from "react-redux";

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

  return (
    <Card className={classes.card}>
      <CardHeader title={meme.name} />
      <CardMedia className={classes.media} image={meme.url} title={meme.name} />
      <CardActions className={classes.actions}>
        <IconButton
          onClick={() => {
            dispatch(addUpvote(meme.id));
            dispatch(setHot());
          }}
        >
          <ThumbUpRounded />
        </IconButton>
        <p>{meme.upvote}</p>
        <IconButton
          onClick={() => {
            dispatch(addDownvote(meme.id));
            dispatch(setHot());
          }}
        >
          <ThumbDownRounded />
        </IconButton>
        <p>{meme.downvote}</p>
      </CardActions>
    </Card>
  );
}