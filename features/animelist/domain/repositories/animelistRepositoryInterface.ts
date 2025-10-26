import type { Animelist } from "~/features/animelist/domain/types/animelist";

export default interface IAnimelistRepository {
  getAnimelist(): Promise<Animelist>;
}
