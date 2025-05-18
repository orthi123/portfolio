import Container from "../components/Container";
import ServiceBox from "../components/ServiceBox";
import Flex from "../components/Flex";
const Services = () => {
  return (
    <section className="mt-[150px]">
      <Container>
        <div className="text-center">
          <h2 className="text-[#FEFEFE] text-[40px] font-bold">Services</h2>
          <p className="text-[#707070] text-[20px] font-medium">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam
          </p>
          <div className="">
            <Flex className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-8">
              <ServiceBox />
              <ServiceBox />
              <ServiceBox />

              <ServiceBox />
              <ServiceBox />
              <ServiceBox />
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
