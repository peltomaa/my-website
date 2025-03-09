import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className="dark min-h-screen flex flex-col">
        <Navigation />

        <div className="grow">
          <Main />
        </div>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
