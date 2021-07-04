import SiteHeader from "../src/components/SiteHeader";
import SiteFooter from "../src/components/SiteFooter";
import Markdown from 'markdown-to-jsx';
import "tailwindcss/tailwind.css";

import pageData from '../data/pages/cv.yml';
import { BACKGROUND } from "../src/util";

const CLASSES = `${BACKGROUND}`;

const CVPage = () => (
  <>
    <SiteHeader />
    <main className={CLASSES}>
      <Markdown>
        {pageData.content}
      </Markdown>
    </main>
    <SiteFooter />
  </>
)

export default CVPage;
