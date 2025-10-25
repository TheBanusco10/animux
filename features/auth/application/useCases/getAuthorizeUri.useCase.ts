import type AuthRepository from "../../infrastructure/repositories/authRepository";

export default class GetAuthorizeUriUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute() {
    return await this.authRepository.getAuthorizeUri();
  }
}
