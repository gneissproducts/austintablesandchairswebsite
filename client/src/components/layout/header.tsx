import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Guides",
      href: "#",
      children: [
        { name: "How Rentals Work", href: "/how-rental-companies-work" },
        { name: "Pricing & Budgeting", href: "/pricing-budgeting" },
        { name: "Equipment Guide", href: "/equipment-options" },
        { name: "Local Resources", href: "/local-resources" },
      ],
    },
    { name: "Planning Tools", href: "/planning-tools" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary" data-testid="site-logo">
                Austin Tables & Chairs
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger 
                        className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        data-testid={`nav-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                              data-testid={`nav-sub-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${
                        location === item.href ? 'text-primary' : ''
                      }`}
                      data-testid={`nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <div className="font-medium text-foreground mb-2">
                            {item.name}
                          </div>
                          <div className="ml-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block text-sm text-muted-foreground hover:text-primary"
                                onClick={() => setIsOpen(false)}
                                data-testid={`mobile-nav-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-foreground hover:text-primary font-medium"
                          onClick={() => setIsOpen(false)}
                          data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
