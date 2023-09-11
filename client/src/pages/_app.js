import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ApplicationContextProvider } from "@/context/ApplicationContext";
import ProtectedRoute from "@/components/routes/ProtectedRoutes";
import PostModal from "@/components/modal/PostModal";

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
          <ApplicationContextProvider>
            <ProtectedRoute>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <PostModal />
              <Component {...pageProps} />
            </ProtectedRoute>
          </ApplicationContextProvider>
        </ChakraProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
