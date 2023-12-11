import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import clientPromise from "@/mondoDB/mongo/clientPromise";
import User from "@/mondoDB/model/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null
                const user = await User.findOne({ email: credentials.email });
                ;
                if (!user) return null

                const passwordMatched = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword!
                );

                return passwordMatched ? user : null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    }
};