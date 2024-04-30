import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    const result = await signIn("google", { callbackUrl: "/dashboard" }); // Specify callbackUrl
    if (result && !result.error && result.url) {
      // Check if result.url is not null
      router.push(result.url);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 background-image"></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
      {/*<!-- Overlay -->*/}
      <Header imgLink="/" showLogout={false} />
      <Layout>
        <main className="relative py-60 max-md:px-4">
          <div className="w-full max-w-[659px]">
            <h1 className="text-2xl text-white font-[275]">
              Your Software Specialist
            </h1>
            <h2 className="mt-2 text-6xl font-semibold max-md:text-4xl">
              <span className="text-white">Data</span>
              <span className="text-violet-700">Lynx</span>
            </h2>
            <p className="mt-10 text-xl font-light text-white max-md:max-w-full">
              With our cutting-edge expertise and relentless innovation, we
              craft bespoke software solutions that propel your business into
              the future. From initial concept to flawless execution, we stand
              by your side, guaranteeing smooth integration and unparalleled
              performance.
            </p>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <button
                className="group mt-8 rounded-lg border border-violet-700 px-5 py-4 transition-colors hover:border-white hover:bg-gray-100 hover:dark:bg-neutral-800/30"
                onClick={handleLogin}
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>Login</h2>
              </button>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
