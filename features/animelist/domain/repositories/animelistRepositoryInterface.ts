import type {
  Animelist,
  ListStatus,
} from "~/features/animelist/domain/types/animelist";

export default interface IAnimelistRepository {
  getAnimelist(): Promise<Animelist>;
  updateAnimelist(
    animeId: number,
    animeData: { score: number; num_watched_episodes: number }
  ): Promise<ListStatus>;
}
