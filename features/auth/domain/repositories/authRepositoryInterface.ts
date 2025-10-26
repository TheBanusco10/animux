import type { AuthTokenResponse } from "~/features/auth/domain/types/accessToken";

export default interface IAuthRepository {
  getAuthorizeUri(): Promise<string>;
  createAuthorizationToken(code: string): Promise<AuthTokenResponse>;
}
