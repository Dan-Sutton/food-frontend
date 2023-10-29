import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Navbar from "../components/navbar";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BurgerIcon from "../components/burgerIcon";
import { Mulish, Space_Mono, Montserrat, Roboto } from "@next/font/google";
import localFont from "@next/font/local";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
const mulish = Mulish({ subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const youngest = localFont({
  src: [
    {
      path: "../public/fonts/youngest.ttf",
      weight: "400",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <style jsx global>{`
        :root {
          --mulish-font: ${mulish.style.fontFamily};
          --spaceMono-font: ${spaceMono.style.fontFamily};
          --montserrat: ${montserrat.style.fontFamily};
          --roboto: ${roboto.style.fontFamily};
          --youngest: ${youngest.style.fontFamily};
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
