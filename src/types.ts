export type MemeType = {
  id: string;
  name: string;
  url: string;
  upvote: number;
  downvote: number;
  width: number;
  height: number;
};

export type VoteType = {
  meme: MemeType;
  vote: string;
};
