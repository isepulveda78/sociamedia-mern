import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export const authOptions =  {
secret: process.env.NEXTAUTH_SECRET,
adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ user , token }) {
      if (user) {  // Note that this if condition is needed
        token.user={...user}
      }
      return token
     },
    async session({ session, token }) {
      if (token?.user) { // Note that this if condition is needed
        session.user = token.user;
      }
      return session
    },
  },
  }
export default NextAuth(authOptions)
