import Image from "next/image";

export function Gallery({ paintings }) {
  let images = [];

  paintings.forEach((painting, index) => {
    images.push(
      <Image
        src={`/images/${painting.image}`}
        alt={painting.title}
        key={index}
        width={175}
        height={175}
      />
    );
  })

  return (
    <div className="gallery">
      {images}
    </div>
  );
}
