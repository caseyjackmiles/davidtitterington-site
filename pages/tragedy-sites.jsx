import SiteHeader from "../src/components/SiteHeader";
import { Gallery } from "../src/components/gallery";
import SiteFooter from "../src/components/SiteFooter";

import TragedySitesGallery from "../src/gallery/tragedy-sites";

function TragedySitesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Gallery {...TragedySitesGallery} />
      </main>
      <SiteFooter />
    </>
  );
}

export default TragedySitesPage;
