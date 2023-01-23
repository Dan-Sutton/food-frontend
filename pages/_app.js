import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Navbar from "../components/navbar";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BurgerMenu from "../components/bugerMenu";
import BurgerIcon from "../components/burgerIcon";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
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
