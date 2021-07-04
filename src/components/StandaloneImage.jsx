import Image from "next/image";
import "tailwindcss/tailwind.css";

// TODO: Develop this into a main image for a single image page
const StandaloneImageFigure = ({ src, alt, title }) => (
  <figure>
    <Image src={src} alt={alt} title={title}/>
  </figure>
);

export default StandaloneImageFigure;
