import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Austin Tables & Chairs</h3>
            <p className="text-muted-foreground mb-4">
              Your unbiased guide to event rentals in Austin, Texas. We provide research-based 
              recommendations without sponsored content or sales pitches.
            </p>
            <p className="text-sm text-muted-foreground">
              All information is for advisory purposes only. We are not affiliated with any 
              rental companies featured on this site.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/how-rental-companies-work" className="hover:text-primary" data-testid="footer-link-how-rentals-work">
                  How Rentals Work
                </Link>
              </li>
              <li>
                <Link href="/pricing-budgeting" className="hover:text-primary" data-testid="footer-link-pricing">
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/equipment-options" className="hover:text-primary" data-testid="footer-link-equipment">
                  Equipment Guide
                </Link>
              </li>
              <li>
                <Link href="/planning-tools" className="hover:text-primary" data-testid="footer-link-planning-tools">
                  Planning Tools
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary" data-testid="footer-link-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-primary" data-testid="footer-link-contact">
                  Contact Us / Suggest a Topic
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <span className="text-muted-foreground" data-testid="footer-disclaimer">
                  Disclaimer: Information is advisory only
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 Austin Tables & Chairs. All rights reserved. This site provides 
            advisory information only and is not affiliated with any rental companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
