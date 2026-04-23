import Link from "next/link"

const navLinks = [
  { href: "#origin", label: "My Story" },
  { href: "#services", label: "Work With Me" },
  { href: "#projects", label: "My Projects" },
  { href: "#podcast", label: "The Podcast" },
]

const socialLinks = [
  { href: "https://www.instagram.com/rhavynn/", label: "Instagram" },
  { href: "https://www.youtube.com/@RADMediaStudios", label: "YouTube" },
  { href: "#podcast", label: "Podcast" },
  { href: "mailto:info@radmediastudios.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-black py-14 sm:py-16 md:py-20 lg:py-[100px] border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-12 md:gap-[60px] lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-serif text-[22px] sm:text-[24px] md:text-[28px] mb-3 text-white">
              RHAVYNN<span className="text-gold">DRUMMER</span>
            </div>
            <p className="text-gold text-[12px] sm:text-[13px] uppercase tracking-[0.15em] mb-5">
              Filmmaker &bull; Coach &bull; Studio Founder
            </p>
            <p className="text-gray-400 max-w-[440px] text-[14px] sm:text-[15px] md:text-base leading-relaxed">
              I create bold stories and help others find the courage to do the same.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-5 sm:mb-6 lg:mb-8 text-gold font-sans font-semibold">
              Navigate
            </h4>
            <ul className="list-none">
              {navLinks.map((link) => (
                <li key={link.href} className="mb-3 sm:mb-4">
                  <Link
                    href={link.href}
                    className="text-gray-400 no-underline transition-all duration-500 text-[14px] sm:text-[15px] hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-5 sm:mb-6 lg:mb-8 text-gold font-sans font-semibold">
              Connect
            </h4>
            <ul className="list-none">
              {socialLinks.map((link) => (
                <li key={link.label} className="mb-3 sm:mb-4">
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-400 no-underline transition-all duration-500 text-[14px] sm:text-[15px] hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center pt-8 sm:pt-10 lg:pt-[50px] border-t border-white/5 text-gray-700 text-[12px] sm:text-[13px]">
          <p>&copy; 2026 Rhavynn Drummer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
