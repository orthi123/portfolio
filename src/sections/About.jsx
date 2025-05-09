import Button from "../components/Button";
import { LuDownload } from "react-icons/lu";
import Flex from "../components/Flex";
import BannerImg from "../assets/images/ORTHI.png";
import Container from "../components/Container";
const About = () => {
  return (
    <section className="mb-20">
      <Container>
        <h2 className="font-bold text-[#FEFEFE] text-[40px] text-center">
          About Me
        </h2>
        <p className="text-[#959595] text-center mb-10 font-medium text-[20px]">
          "Design. Develop. Animate."
        </p>

        <Flex className="items-center">
          <img
            src={BannerImg}
            alt=""
            className="w-[520px] h-[543px] "
          />

          <Flex className="flex-col ">
            <p className="line-height:3 text-[#959595] w-[631px] m-auto font-medium text-[20px]">
              Hello! I'm a front-end developer passionate about creating
              responsive and user-friendly web applications. With experience in
              technologies like HTML, CSS, JavaScript, and framework (React), I
              focus on building intuitive user interfaces that enhance user
              experience. I enjoy collaborating with teams to bring innovative
              ideas to life and am always eager to learn and adapt to new
              technologies. When I'm not coding, I explore design trends and
              contribute to open-source projects.
            </p>
            <div className="mt-16">
              <Flex className="">
                <Button text={"Download CV"} className="relative" />
                <LuDownload className="absolute text-[#FFFFFF] mt-4 ml-4" />
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
