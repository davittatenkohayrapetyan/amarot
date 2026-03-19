import { signIn } from '@/auth';

export default function AdminLogin() {
  return <div className="container-pad py-20 max-w-md"><h1 className="h2 mb-6">Admin login</h1><form action={async (formData) => { 'use server'; await signIn('credentials', { email: formData.get('email'), password: formData.get('password'), redirectTo: '/admin' }); }} className="grid gap-3"><input name="email" type="email" placeholder="Email" className="border rounded-xl p-2" required/><input name="password" type="password" placeholder="Password" className="border rounded-xl p-2" required/><button className="bg-ink text-paper rounded-xl py-2">Sign in</button></form></div>;
}
