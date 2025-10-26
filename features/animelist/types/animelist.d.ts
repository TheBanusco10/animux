import type { AnimeDetails, Status } from "../../shared/domain/types/anime";

export interface AnimeListResult {
  data: Daum[];
  paging: Paging;
}

export interface Daum {
  node: AnimeDetails;
  list_status: ListStatus;
}

export interface ListStatus {
  status: Status;
  score: number;
  num_episodes_watched: number;
  is_rewatching: boolean;
  updated_at: string;
  start_date: string;
  finish_date?: string;
}

export interface Paging {
  next: string;
}
