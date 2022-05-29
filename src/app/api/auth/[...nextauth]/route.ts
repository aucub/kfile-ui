import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials ?? {}
                if (!username || !password) {
                    throw new Error("Missing username or password");
                }
                const res = await fetch(process.env.BASE_URL + '/user/login', {
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
});

export { handler as GET, handler as POST };
