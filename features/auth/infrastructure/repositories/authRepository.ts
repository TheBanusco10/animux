import type IAuthRepository from "../../domain/repositories/authRepositoryInterface";

export default class AuthRepository implements IAuthRepository {
  async getAuthorizeUri(): Promise<string> {
    const { data, error } = await useFetch<string>(
      "http://localhost:3001/auth/uri"
    );

    if (error.value) {
      throw error.value;
    }

    return data.value as string;
  }
}
