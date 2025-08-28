import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import HowRentalCompaniesWork from "@/pages/how-rental-companies-work";
import PricingBudgeting from "@/pages/pricing-budgeting";
import EquipmentOptions from "@/pages/equipment-options";
import LocalResources from "@/pages/local-resources";
import PlanningTools from "@/pages/planning-tools";
import Blog from "@/pages/blog";
import FAQ from "@/pages/faq";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Article from "@/pages/article";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-rental-companies-work" component={HowRentalCompaniesWork} />
          <Route path="/pricing-budgeting" component={PricingBudgeting} />
          <Route path="/equipment-options" component={EquipmentOptions} />
          <Route path="/local-resources" component={LocalResources} />
          <Route path="/planning-tools" component={PlanningTools} />
          <Route path="/blog" component={Blog} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog/:slug" component={Article} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
