import Button from "../components/Button";
import { LuDownload } from "react-icons/lu";
import Flex from "../components/Flex";
import BannerImg from "../assets/images/ORTHI.png";
import Container from "../components/Container";
const About = () => {
  return (
    <section className="mt-20  mb-20 ">
      <Container>
        <h2 className="font-bold text-[#FEFEFE] text-[40px] text-center">
          About Me
        </h2>
        <p className="text-[#959595] text-center mb-10 font-medium text-[20px]">
          "Design. Develop. Animate."
        </p>

        <Flex className="flex-col ">
          <p className="text-[#959595] w-[900px] m-auto font-medium text-[30px]">
            As a front-end developer, I blend creativity with code to design
            dynamic and responsive web interfaces. My toolkit includes HTML,
            CSS, JavaScript, and React—technologies I use to turn complexity
            into simplicity and friction into flow. I’m passionate about
            delivering intuitive digital experiences, thrive in team settings,
            and embrace new challenges as opportunities to grow. Beyond coding,
            I delve into emerging design trends and actively support the
            open-source community.
          </p>
          <div className="mt-16 mx-auto">
            <Flex className="">
              <Button
                text={"Download CV"}
                link={
                  "https://drive.google.com/file/d/1da2d97JtCvqamU5RC94qqHe35SOsHQfM/view?usp=drive_link"
                }
                className="relative"
              />
              <LuDownload className="absolute bg-[rgb(255,255,255,4%)] mt-4 ml-4" />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
