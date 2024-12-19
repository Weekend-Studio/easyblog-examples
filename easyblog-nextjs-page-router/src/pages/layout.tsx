import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} font-sans`}>
  <header className="border-b mx-auto">
    <div className="container flex h-14 items-center">
      <nav className="flex flex-1 items-center gap-6">
        <Link href="/" className="font-bold">
          Brand
        </Link>
        <div className="flex gap-4">
          <Link href="/about" className="text-sm hover:text-foreground/80">
            About
          </Link>
          <Link href="/products" className="text-sm hover:text-foreground/80">
            Products
          </Link>
          <Link href="/contact" className="text-sm hover:text-foreground/80">
            Contact
          </Link>
          <Link href="/blogs" className="text-sm hover:text-foreground/80">
            Blogs
          </Link>
        </div>
      </nav>
      </div>
    </header>
    <div className="container mx-auto flex flex-col items-center justify-center py-10">
      {children}
    </div>
    <footer className="border-t py-6">
        <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
}
