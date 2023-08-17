import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
