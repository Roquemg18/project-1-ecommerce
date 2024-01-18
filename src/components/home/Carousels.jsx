import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel className="mt-8 w-12/12 xl:w-auto h-12/12  md:ml-16 sm:ml-8 sm:mr-6 ">
      <Carousel.Item>
        <img
          className="w-full h-auto object-contain"
          src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/418e6402-547c-4724-bd37-0904e94777f6___f905c76027dfad5ccf0a923722df8eb9.jpg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-full h-auto object-contain"
          src="https://static.mercadonegro.pe/wp-content/uploads/2020/12/15175722/guerrillapublicidadnike-1024x440.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-full h-auto object-contain"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/6C3RPPZBNJHNXB3P7JM3IS2QYY.jpg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
