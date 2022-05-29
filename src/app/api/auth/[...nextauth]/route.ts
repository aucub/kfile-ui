import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials ?? {}
                if (!username || !password) {
                    throw new Error("Missing username or password");
                }
                const res = await fetch(process.env.BASE_URL + '/user/login?username=' + username + '&password=' + password, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const { user, token } = await res.json();

                if (res.ok && user) {
                    return { ...user, token: token }
                }
                return null
            },
        }),
    ],
    secret: 'c77dd91406032672c0414af8ebc58199',
    session: { strategy: "jwt" },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.token = user.token.token
    //             token.maxAge = user.token.maxAge
    //         }
    //         return token
    //     },
    //     async session({ session, token, user }) {
    //         return session
    //     }
    // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
