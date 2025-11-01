import type { ListStatus } from "~/features/animelist/domain/types/animelist";

export default class ListStatusMapper {
  static toApi(listStatus: ListStatus) {
    return {
      score: listStatus.score,
      num_watched_episodes: listStatus.num_episodes_watched ?? 0,
    };
  }
}
