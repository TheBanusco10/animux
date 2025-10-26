export interface Animelist {
  data: AnimelistData[];
  paging: Paging;
}

export interface AnimelistData {
  node: Node;
  list_status: ListStatus;
}

export type AnimeStatus =
  | "watching"
  | "completed"
  | "on_hold"
  | "dropped"
  | "plan_to_watch"
  | null;

export interface ListStatus {
  status: string;
  score: number;
  num_watched_episodes?: number;
  is_rewatching: boolean;
  updated_at: string;
  num_episodes_watched?: number;
}

export interface Node {
  id: number;
  title: string;
  main_picture: MainPicture;
}

export interface MainPicture {
  medium: string;
  large: string;
}

export interface Paging {
  next: string;
}
