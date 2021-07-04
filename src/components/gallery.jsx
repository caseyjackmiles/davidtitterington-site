import Image from "next/image";

export function Gallery({ paintings }) {
  let images = [];

  paintings.forEach((painting, index) => {
    images.push(
      <div className="relative m-auto w-60 h-60 border-8 border-white shadow">
          <Image
            src={`/images/${painting.image}`}
            alt={painting.title}
            title={painting.title}
            key={index}
            layout="fill"
            objectFit="contain"
          />
      </div>
    );
  })

  return (
    <div className="gallery space-y-6" >
      {images}
    </div>
  );
}
