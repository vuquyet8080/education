import AppHeader from "@/components/AppHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <AppHeader />
      <Component {...pageProps} />
    </div>
  );
}
