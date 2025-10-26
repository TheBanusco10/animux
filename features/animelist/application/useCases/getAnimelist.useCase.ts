import type IAnimelistRepository from "~/features/animelist/domain/repositories/animelistRepositoryInterface";

export default class GetAnimelistUseCase {
  constructor(private animelistRepository: IAnimelistRepository) {}

  async execute() {
    return await this.animelistRepository.getAnimelist();
  }
}
