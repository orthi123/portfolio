import TwoUser from "../assets/images/TwoUser.png";
import Container from "./Container";
import Flex from "./Flex";

const ServiceBox = () => {
  return (
    <Container>
      <div className="bg-[rgba(255,255,255,0.04)] mt-40 w-[340px] h-[300px] rounded-4xl ">
        <div className="mx-auto mb-8 ml-36 pt-14">
          <img src={TwoUser} alt="" />
        </div>

        <h2 className="text-primary-text text-[24px] font-bold mb-4">App Design</h2>
        <p className="text-[#575757] w-[220px] m-auto">
          Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet
          consectetur
        </p>
      </div>
    </Container>
  );
};

export default ServiceBox;
