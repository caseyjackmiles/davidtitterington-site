import SiteHeader from "../src/components/SiteHeader";
import { Gallery } from "../src/components/gallery";
import SiteFooter from "../src/components/SiteFooter";

import IndexGallery from "../src/gallery/index";

function IndexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Gallery {...IndexGallery} />
      </main>
      <SiteFooter />
    </>
  );
}

export default IndexPage;
