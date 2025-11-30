import type IAnimelistRepository from "~/features/animelist/domain/repositories/animelistRepositoryInterface";
import AnimelistMapper from "../../domain/mappers/animelistMapper";

export default class GetAnimelistUseCase {
  constructor(private animelistRepository: IAnimelistRepository) {}

  async execute(offset?: number) {
    const animelist = await this.animelistRepository.getAnimelist(offset);

    return AnimelistMapper.fromApi(animelist);
  }
}
