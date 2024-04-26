import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization:
        "https://accounts.google.com/o/oauth2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub; // Assuming token.sub is defined and a string
      } else {
        // Optionally handle the case where session or session.user is undefined
        console.log("Session or session.user is undefined");
      }
      return session;
    },
  },
});
