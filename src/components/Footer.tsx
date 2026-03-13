import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { href: "/product", label: "How It Works" },
    { href: "/use-cases", label: "Use Cases" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-full-gaming.svg"
                alt="Olive Studio"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Player Intelligence for Live Games. Turn player behavior into revenue
              decisions — across monetization, marketing, product, and engagement.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Olive Studio. All rights reserved.
          </p>
          <a 
            href="https://olivelabs.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Image
              src="/olivelabs-icon.svg"
              alt="Olive Labs"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>From Olive Labs</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
