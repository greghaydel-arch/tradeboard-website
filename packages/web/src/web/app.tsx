import { Route, Switch, useLocation, Redirect } from "wouter";
import { useEffect } from "react";
import Index from "./pages/index";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Charts from "./pages/charts";
import Login from "./pages/login";
import ComingSoon from "./pages/coming-soon";
import PreviewGate from "./pages/preview-gate";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";
import { isPreviewUnlocked } from "./lib/preview-auth";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

// Wrapper: redirects to /preview if not unlocked
function Protected({ component: Component }: { component: React.ComponentType }) {
  if (!isPreviewUnlocked()) {
    return <Redirect to="/preview" />;
  }
  return (
    <>
      <Nav />
      <Component />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider>
      <ScrollToTop />
      <Switch>
        {/* Public — coming soon */}
        <Route path="/">
          {isPreviewUnlocked() ? (
            <>
              <Nav />
              <Index />
              <Footer />
            </>
          ) : (
            <ComingSoon />
          )}
        </Route>

        {/* Password gate */}
        <Route path="/preview" component={PreviewGate} />

        {/* Protected full site */}
        <Route path="/features">
          <Protected component={Features} />
        </Route>
        <Route path="/pricing">
          <Protected component={Pricing} />
        </Route>
        <Route path="/charts">
          <Protected component={Charts} />
        </Route>
        <Route path="/login">
          <Protected component={Login} />
        </Route>

        {/* Fallback */}
        <Route>
          {isPreviewUnlocked() ? (
            <>
              <Nav />
              <Index />
              <Footer />
            </>
          ) : (
            <ComingSoon />
          )}
        </Route>
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
