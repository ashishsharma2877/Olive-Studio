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
                src="/images/logo-full.png"
                alt="FanCortex"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Fan Intelligence for Live Games. Turn fan behavior into revenue
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
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} FanCortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
