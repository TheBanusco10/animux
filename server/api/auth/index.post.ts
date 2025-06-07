import { Auth } from "~/services/auth";

export default defineEventHandler(async (event) => {
    const { code } = getQuery(event);
    const auth = new Auth();
    try {
        const token = await auth.createAuthToken(code as string);
        console.log(token);
        setCookie(event, "auth_token", token.access_token, {
            maxAge: token.expires_in,
        });

        return token;
    }catch (err: any) {
        console.error(err.message);
        throw createError({
            statusCode: 500,
            statusMessage: err.message,
        });
    }
});
