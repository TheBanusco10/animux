import type IAuthRepository from "~/features/auth/domain/repositories/authRepositoryInterface";
import type { AuthTokenResponse } from "~/features/auth/domain/types/accessToken";
import useApiFetch from "~/features/shared/composables/useApiFetch";

export default class AuthRepository implements IAuthRepository {
  async getAuthorizeUri(): Promise<string> {
    const { data, error } = await useApiFetch<string>("/auth/uri", {
      server: false,
    });

    if (error.value || !data.value) {
      throw error.value;
    }

    return data.value;
  }

  async createAuthorizationToken(code: string): Promise<AuthTokenResponse> {
    const { data, error } = await useApiFetch<AuthTokenResponse>(
      "/auth/create-token",
      {
        method: "POST",
        body: {
          code,
        },
      }
    );

    if (error.value || !data.value) {
      throw error.value;
    }

    return data.value;
  }
}
