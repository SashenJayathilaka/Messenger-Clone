import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg-px-8 bg-gray-100">
      <ClientOnly>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            alt=""
            height="58"
            width="58"
            className="mx-auto w-auto"
            src="https://dl.dropboxusercontent.com/s/lx1m3kzfl8hell3/Facebook-Messenger-logo-2020.webp"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your Account
          </h2>
        </div>
        <AuthForm />
      </ClientOnly>
    </div>
  );
}
