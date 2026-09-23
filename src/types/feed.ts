export type Post = {
  id: string;
  author: string;
  role: string;
  time: string;
  location: string;
  avatar: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  views: string;
  replies?: string;
  likedBy?: string;
  media?: {
    url: string;
    urls?: string[];
    label: "For Rent" | "For Sale";
    count?: string;
    video?: boolean;
    videoSrc?: string;
  };
};
