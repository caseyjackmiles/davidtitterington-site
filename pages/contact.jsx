import SiteHeader from "../src/components/SiteHeader";
import SiteFooter from "../src/components/SiteFooter";
import Markdown from 'markdown-to-jsx';

import pageData from '../data/pages/contact.yml';

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Markdown>
          {pageData.content}
        </Markdown>
      </main>
      <SiteFooter />
    </>
  )
}

export default ContactPage;
