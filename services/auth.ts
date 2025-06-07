const AUTHORIZE_URI = "https://myanimelist.net/v1/oauth2/authorize?";

const CLIENT_ID = "c5ecc7507c1492b1600122da648f745d";
const CLIENT_SECRET =
  "3f90d220e912e8fa489e98c3af8b619490a6a82b74c43de5d08938904542d41b";

const CODE_CHALLENGE = "kt0dsxDfqmXsluVsnDLq1w_MyWBbmuMFQJn3HhBM1ho";

export class Auth {
  getAuthorizeUri(): string {
    return `${AUTHORIZE_URI}response_type=code&client_id=${CLIENT_ID}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=plain`;
  }

  async createAuthToken(code: string): Promise<{
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }> {
    const response = await fetch("https://myanimelist.net/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: "authorization_code",
        code,
        code_verifier: CODE_CHALLENGE,
        client_secret: CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to create auth token");
    }

    return await response.json();
  }
}
