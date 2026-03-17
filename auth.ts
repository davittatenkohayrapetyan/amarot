import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
          return { id: 'admin', email };
        }
        return null;
      }
    })
  ],
  callbacks: {
    authorized({ auth, request }) {
      const inAdmin = request.nextUrl.pathname.startsWith('/admin');
      const isLogin = request.nextUrl.pathname === '/admin/login';
      if (!inAdmin) return true;
      if (isLogin) return true;
      return !!auth;
    }
  }
});
