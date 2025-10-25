import type { AnimeListResult } from "~/features/animelist/types/animelist";

const ANIME_LIST_URI =
  "https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=4";

export class AnimeListRepository {
  static async getAnimeList(token: string): Promise<AnimeListResult> {
    const response = await fetch(ANIME_LIST_URI, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get anime list");
    }

    return await response.json();
  }
}
