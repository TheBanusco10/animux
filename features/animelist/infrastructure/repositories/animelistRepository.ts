import type IAnimelistRepository from "~/features/animelist/domain/repositories/animelistRepositoryInterface";
import type { Animelist } from "../../domain/types/animelist";

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
}
