import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "./theme/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Routes from "./routes";
import ErrorFallback from "./components/Error/ErrorFallback";
import store from "./redux/index";
import "react-image-lightbox/style.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  // const history = createBrowserHistory();
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);
  // const myErrorHandler = (error: Error, info: { componentStack: sting }) => {
  //   console.log(error, info);
  // };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        {themeLoaded && (
          <Router>
            <ThemeProvider theme={selectedTheme}>
              <GlobalStyles />
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes />
              </ErrorBoundary>
            </ThemeProvider>
          </Router>
        )}
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
