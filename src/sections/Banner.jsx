import React from "react";
import Container from "../components/Container";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Flex from "../components/Flex";
import Button from "../components/Button";
import BannerImg from "../assets/images/ORTHI.png";
import BannerShade from "../assets/images/bannerShade.png";
const Banner = () => {
  return (
    <section className="mt-8">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <h5 className="text-[#707070] font-semibold text-2xl mb-[10px]">
              Hi I am
            </h5>
            <h4 className="text-[#959595] font-bold text-[28px] mb-6">
              ORTHI DEB SITHI
            </h4>
            <h1 className="bg-gradient-to-r from-[rgb(152,67,0)] via-[rgb(253,111,0)] to-[rgb(202,89,0)] bg-clip-text text-transparent font-black text-[70px]">
              Frontend Developer
            </h1>
            <Flex className="text-[#BABABA] gap-4">
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
            <Flex className="mt-12 gap-5">
              <Button text={"Hire Me"} className="rounded-2xl" />
              <Button
                text={"Downlead CV "}
                bgShow={false}
                className="rounded-3xl border-2"
              />
            </Flex>
          </div>
          <div className="relative">
            <img
              src={BannerImg}
              className="w-[520px] h-[543px]"
              alt=""
            />

            {/* <img src={BannerShade} alt="" className="absolute top-[200px] right-[130px] w-[400px] h-[400px]" /> */}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
