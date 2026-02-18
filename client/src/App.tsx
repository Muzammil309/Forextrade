import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function AppRouter() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  // Debugging logs for production deployment
  if (import.meta.env.PROD) {
    console.log("Vite Base URL:", import.meta.env.BASE_URL);
    console.log("Wouter Base:", base);
    console.log("Current Pathname:", window.location.pathname);
  }

  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
