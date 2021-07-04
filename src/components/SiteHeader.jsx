import Head from "next/head";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { BACKGROUND } from "../util";

const NAVIGATION_LINKS = [
  { href: "/", text: "Home" },
  { href: "/tragedy-sites", text: "American Tragedy Sites" },
  { href: "/cv", text: "CV" },
  { href: "/contact", text: "Contact" },
];

const Title = () => (
  <h1 className="text-4xl my-3 font-light">
    <Link href="/">
      <a>David Titterington</a>
    </Link>
  </h1>
);

const SubTitle = () => (
  <div className="hidden lg:block">
    <span>|</span><span>&nbsp;</span>
    <span>oil paintings</span>
  </div>
);

const MainNavigation = () => (
  <nav>
    <ul className="uppercase tracking-wide">
      <li className="my-1.5 hidden md:block">
        <Link href={NAVIGATION_LINKS[0].href}>
          <a>{NAVIGATION_LINKS[0].text}</a>
        </Link>
      </li>
      {NAVIGATION_LINKS.slice(1).map(({ href, text }, index) => (
        <li className="my-1.5" key={index}>
          <Link href={href}>
            <a>{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

// This instance of Head should only contain items necessary for all pages.
// E.g., NOT `title` elements
const HTMLHead = () => (
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
  </Head>
)

const HEADER_CLASSES = `p-2 border-b-2 border-gray-300 ${BACKGROUND}`

const SiteHeader = () => (
  <>
    <HTMLHead />
    <header className={HEADER_CLASSES}>
      <Title />
      <SubTitle />
      <MainNavigation />
    </header>
  </>
);

export default SiteHeader;
