import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader"; // Import normally
import ScrollToTop from "./components/ScrollToTop";

const ASSETS_TO_PRELOAD = [
  "/Hero_new.jpg",
  "/glasseffect.png",
  "/logo.png",
  "/mobile.png",
  "/popup_new.png",
];

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const preloadImages = async () => {
      try {
        const promises = ASSETS_TO_PRELOAD.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image(); // Browser's native Image
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => resolve(); // Resolve even on error to prevent infinite loading
            })
        );

        await Promise.all(promises);
      } catch (e) {
        console.error("Preload failed", e);
      } finally {
        // Short delay for visual smoothness
        setTimeout(() => setLoading(false), 500);
      }
    };

    preloadImages();
  }, []);

  return (
    <>
      {/* 
        Show loader if loading is true. 
        Wrap content in a div that controls visibility 
      */}
      {loading ? (
        <PreLoader />
      ) : (
        <div className="animate-in fade-in duration-700">
          <Component {...pageProps} />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}