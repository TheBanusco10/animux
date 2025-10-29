import type { TokenStorage } from "~/features/auth/domain/types/accessToken";

export default class TokenValidationService {
  static validate(token: TokenStorage): boolean {
    if (!token) return false;

    return !this.isTokenExpired(token.expires_in);
  }

  private static isTokenExpired(expiresIn: number): boolean {
    const now = Date.now() / 1000;

    return now < expiresIn;
  }
}
