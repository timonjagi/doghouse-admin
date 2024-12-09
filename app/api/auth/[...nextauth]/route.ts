import { authOptions } from "@/lib/auth-options";
import NextAuth from "next-auth/next";

import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  })
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
