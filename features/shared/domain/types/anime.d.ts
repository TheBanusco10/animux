export interface MainPicture {
  medium: string;
  large: string;
}

export interface AnimeDetails {
  id: number;
  title: string;
  main_picture: MainPicture;
}

export type Status =
  | "watching"
  | "completed"
  | "on_hold"
  | "dropped"
  | "plan_to_watch"
  | null;
