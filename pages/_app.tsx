import "@/styles/globals.css";
import "highlight.js/styles/night-owl.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
