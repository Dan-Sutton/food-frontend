import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Navbar from "../components/navbar";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BurgerIcon from "../components/burgerIcon";
import { Mulish, Space_Mono } from "@next/font/google";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
const mulish = Mulish({ subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <style jsx global>{`
        :root {
          --mulish-font: ${mulish.style.fontFamily};
          --spaceMono-font: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <StateContext>
        <Provider value={client}>
          <Navbar />
          <BurgerIcon />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
