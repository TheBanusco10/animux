import type IAnimelistRepository from "~/features/animelist/domain/repositories/animelistRepositoryInterface";
import type { Animelist, ListStatus } from "../../domain/types/animelist";

export class AnimeListRepository implements IAnimelistRepository {
  async getAnimelist() {
    const { data, error } = await useApiFetch<Animelist>("/animelist", {
      server: false,
    });

    if (error.value || !data.value) {
      throw new Error("Failed to get user animelist");
    }

    return data.value;
  }

  async updateAnimelist(
    animeId: number,
    animeData: { score: number; num_watched_episodes: number }
  ): Promise<ListStatus> {
    const { data, error } = await useApiFetch<ListStatus>(
      `/animelist/${animeId}`,
      {
        method: "PATCH",
        body: animeData,
      }
    );

    if (error.value || !data.value) {
      throw new Error("Failed to update anime");
    }

    return data.value;
  }
}
