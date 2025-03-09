import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className="dark min-h-screen flex flex-col bg-gradient-to-b from-gray-950 to-gray-900">
        <Navigation />

        <div className="grow container mx-auto max-w-7xl py-10 p-4">
          <Main />
        </div>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
