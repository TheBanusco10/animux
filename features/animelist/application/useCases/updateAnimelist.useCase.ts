import type IAnimelistRepository from "~/features/animelist/domain/repositories/animelistRepositoryInterface";
import type { ListStatus } from "~/features/animelist/domain/types/animelist";
import ListStatusMapper from "../../domain/mappers/listStatusMapper";

export default class UpdateAnimelistUseCase {
  constructor(private animelistRepository: IAnimelistRepository) {}

  async execute(animeId: number, animeData: ListStatus) {
    const mappedAnimeData = ListStatusMapper.toApi(animeData);

    return await this.animelistRepository.updateAnimelist(
      animeId,
      mappedAnimeData
    );
  }
}
