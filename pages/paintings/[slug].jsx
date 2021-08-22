import Image from 'next/image';
import { useRouter } from 'next/router';
import { paintingData } from '../../src/painting/allPaintings';
import SiteHeader from '../../src/components/SiteHeader';
import SiteFooter from '../../src/components/SiteFooter';

export default function Painting(props) {
  const {
    title,
    date,
    dimensions,
    medium,
    image,
    sold
  } = props;

  return (
    <>
      <SiteHeader />
      <main>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{dimensions}</p>
        <p>{medium}</p>
        <p>{sold ? 'Sold' : 'Available'}</p>
        <Image
          src={`/images/${image}`}
          alt={title}
          title={title}
          width={175}
          height={175}
        />
      </main>
      <SiteFooter />
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(paintingData).map(slug => (
    { params: { slug } }
  ))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const painting = paintingData[slug];

  return {
    props: { ...painting }
  }
}
