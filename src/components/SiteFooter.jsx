import "tailwindcss/tailwind.css";

const Copyright = () => (
  <p>
    <small>
      All images and text &copy; David Titterington.
    </small>
  </p>
);

const FOOTER_CLASSES = "bg-gray-200 text-center border-t-2 border-gray-300"

const SiteFooter = () => (
  <footer className={FOOTER_CLASSES}>
    <Copyright />
  </footer>
);

export default SiteFooter;
