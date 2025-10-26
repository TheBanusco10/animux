import type IAuthRepository from "~/features/auth/domain/repositories/authRepositoryInterface";
import type { AuthTokenResponse } from "~/features/auth/domain/types/accessToken";

export default class CreateAuthorizationTokenUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(code: string): Promise<AuthTokenResponse> {
    return await this.authRepository.createAuthorizationToken(code);
  }
}
