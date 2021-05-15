import SiteHeader from "../src/components/SiteHeader";
import { Gallery } from "../src/components/gallery";
import SiteFooter from "../src/components/SiteFooter";
import "tailwindcss/tailwind.css";

import IndexGallery from "../src/gallery/index";

function IndexPage() {
  return (
    <>
      <SiteHeader />
      <main class="container mx-auto bg-gray-200 p-2">
        <Gallery {...IndexGallery} />
      </main>
      <SiteFooter />
    </>
  );
}

export default IndexPage;
