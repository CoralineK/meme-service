import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { ThumbDownRounded, ThumbUpRounded } from "@material-ui/icons";

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
  name: string;
  url: string;
  upvote: number;
  downvote: number;
  handleUpvoteClick: () => void;
  handleDownvoteClick: () => void;
};

export default function Meme({
  name,
  url,
  upvote,
  downvote,
  handleUpvoteClick,
  handleDownvoteClick,
}: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={url} title={name} />
      <CardActions className={classes.actions}>
        <IconButton onClick={handleUpvoteClick}>
          <ThumbUpRounded />
        </IconButton>
        <p>{upvote}</p>
        <IconButton onClick={handleDownvoteClick}>
          <ThumbDownRounded />
        </IconButton>
        <p>{downvote}</p>
      </CardActions>
    </Card>
  );
}
