import logo from "../assets/images/LOGO.png";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineSendToMobile } from "react-icons/md";

let menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/Services",
  },
  {
    name: "About me",
    link: "/About me",
  },
  {
    name: "Portfolio",
    link: "/Portfolio",
  },
  {
    name: "Contact me",
    link: "/Contact me",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[rgb(255,255,255,4%)] ">
      <Container>
        <Flex className="mb-20 justify-center">
          <div>
            <div className="w-full mt-14 mb-14">
              <img src={logo} alt="" className="mx-auto" />
            </div>

            <nav>
              <ul className="flex gap-[56px]">
                {menu.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="navItem">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Flex>
        <Flex className="text-[#BABABA] gap-4 justify-center mb-10">
          <a
            href="https://www.linkedin.com/in/orthi-deb-sithi-3b1b96282/"
            className="rounded-full p-2 text-2xl border border-[#575757] hover:bg-[rgb(202,89,0)] hover:text-black transition duration-150"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/orthi123"
            className="rounded-full p-2 text-2xl border border-[#575757] hover:bg-[rgb(202,89,0)]  hover:text-black transition duration-150"
          >
            {" "}
            <FaGithubSquare />
          </a>
          <a
            href="https://www.facebook.com/orthideb.sithi"
            className="rounded-full p-2 text-2xl border border-[#575757] hover:bg-[rgb(202,89,0)] hover:text-black transition duration-150"
          >
            {" "}
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/orthidebsithi/?hl=en"
            className="rounded-full p-2 text-2xl border border-[#575757] hover:bg-[rgb(202,89,0)] hover:text-black transition duration-150"
          >
            {" "}
            <FaInstagramSquare />
          </a>
        </Flex>

        <Flex className=" justify-center pb-10 gap-5 items-center">
          <a
            href="mailto:orthideb123@gmail.com"
            className="rounded-full p-2 text-2xl text-white border border-[#575757] hover:bg-[rgb(202,89,0)] hover:text-black transition duration-150"
          >
            <MdOutlineMail />
          </a>

          <a
            href="01647860875"
            className="rounded-full p-2 text-2xl text-white border border-[#575757] hover:bg-[rgb(202,89,0)] hover:text-black transition duration-150"
          >
            <MdOutlineSendToMobile />
          </a>

          <h4 className="text-white">+880 1647860875</h4>
        </Flex>
        <div className="border-b mb-6"></div>

        <h2 className="text-white text-center pb-20">Designed & Developed by ORTHI DEB SITHI – Frontend Developer</h2>
      </Container>
    </footer>
  );
};

export default Footer;
