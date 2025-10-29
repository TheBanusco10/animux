export interface TokenData {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export type TokenStorage = TokenData | null;

export interface AuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
}

export type AuthTokenResponse = APIResponse<AuthToken>;
