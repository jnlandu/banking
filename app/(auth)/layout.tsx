import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Image from "next/image";



export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full">
        {children}
        <div className="auth-asset">
          <Image 
          src = "/icons/auth-image.svg"
          width={500}
          height={500}
          alt="Auth image"

          />
        </div>
    </main>
  );
}
