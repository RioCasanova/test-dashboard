// login.tsx in your pages directory
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return <p>Welcome, {session.user.name}!</p>;
  } else if (session && !session.user) {
    return <p>User not found</p>;
  }

  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
};

export default LoginPage;
