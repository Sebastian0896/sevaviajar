import Link from "next/link";

export default function BlogLayout({ children }) {
    return (
      <div className="mx-auto p-4 bg-gray-100">
        <header className="mb-8">
          <Link href="/blog"><h1 className="text-4xl font-bold text-[#024383]">Blog</h1></Link>
          <p className="text-gray-700">Explora nuestros artículos más recientes.</p>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  