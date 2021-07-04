import SiteHeader from "../src/components/SiteHeader";
import SiteFooter from "../src/components/SiteFooter";
import Markdown from 'markdown-to-jsx';
import "tailwindcss/tailwind.css";

import pageData from '../data/pages/contact.yml';
import { BACKGROUND } from "../src/util";

const CLASSES = `${BACKGROUND}`;

function ContactPage() {
  return (
    <div className="grid grid-cols-1">
      <SiteHeader />
      <main className={CLASSES}>
        <Markdown>
          {pageData.content}
        </Markdown>
      </main>
      <SiteFooter />
    </div>
  )
}

export default ContactPage;
