import type { Animelist, AnimelistOutput } from "../types/animelist";

export default class AnimelistMapper {
  static fromApi(animelist: Animelist): AnimelistOutput {
    let nextOffset = 0;
    let previousOffset = 0;

    if (animelist.paging.next) {
      const url = new URL(animelist.paging.next);
      nextOffset = Number(url.searchParams.get("offset"));
    }

    if (animelist.paging.previous) {
      const url = new URL(animelist.paging.previous);
      previousOffset = Number(url.searchParams.get("offset"));
    }

    return {
      ...animelist,
      paging: {
        next: nextOffset
          ? {
              offset: nextOffset,
            }
          : undefined,
        previous: previousOffset
          ? {
              offset: previousOffset,
            }
          : undefined,
      },
    };
  }
}
