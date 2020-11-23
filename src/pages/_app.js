import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import theme from "styles/theme";
import SnackbarProvider from "react-simple-snackbar";
export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  );
}
