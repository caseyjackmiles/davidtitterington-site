import Link from "next/link";

const links = [
  { href: "/", text: "Home" },
  { href: "/tragedy-sites", text: "American Tragedy Sites" },
  { href: "/cv", text: "CV" },
  { href: "/contact", text: "Contact" },
];

const SiteHeader = () => (
  <header className="container mx-auto">
    <h1>
      <Link href="/">
        <a>David Titterington</a>
      </Link>
    </h1>
    <span>| oil paintings</span>
    <nav>
      <ul>
        {links.map(({ href, text }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default SiteHeader;
