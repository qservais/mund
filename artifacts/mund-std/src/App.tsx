import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Floral from "@/pages/Floral";
import Abonnements from "@/pages/Abonnements";
import Past from "@/pages/Past";
import About from "@/pages/About";
import ProjectDetail from "@/pages/ProjectDetail";
import Contact from "@/pages/Contact";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/floral" component={Floral} />
        <Route path="/abonnements" component={Abonnements} />
        <Route path="/past" component={Past} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projets/:slug" component={ProjectDetail} />
        {/* Legacy redirects */}
        <Route path="/work"><Redirect to="/floral" /></Route>
        <Route path="/studio"><Redirect to="/about" /></Route>
        <Route path="/projets"><Redirect to="/past" /></Route>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
