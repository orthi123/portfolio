import Container from "../components/Container"
import Flex from "../components/Flex";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../components/Button";
const Contact = () => {
  return (
    <section>
      <Container>
        <h2 className="text-[#FEFEFE] text-[40px] font-bold text-center">
          Contact me
        </h2>
        <p className="text-[#707070] text-[20px]  font-medium text-center mb-[50px]">
          Cultivating Connections: Reach Out and Connect with Me
        </p>

        <div className="w-[1012px] h-[408px] mb-[200px] mx-auto">
          <Flex className="gap-x-5 mb-4 h-full">
            <div className="w-[50%]  h-full">
              <div className="h-[54px] bg-[rgb(255,255,255,4%)]  mb-8 text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl">
                Name
              </div>
              <div className="h-[54px] bg-[rgb(255,255,255,4%)]  mb-8 text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl">
                Phone Number
              </div>
              <div className="h-[54px] bg-[rgb(255,255,255,4%)]  text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl">
                Timeline
              </div>
            </div>

            <div className="w-[50%]  h-full">
              <div className="h-[54px] bg-[rgb(255,255,255,4%)]  mb-8 text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl">
                Email
              </div>
              <Flex className="h-[54px] bg-[rgb(255,255,255,4%)] mb-8 pr-6 text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl justify-between">
                Service of Interest
                <IoIosArrowDown />
              </Flex>
              <div className="h-[162px] bg-[rgb(255,255,255,4%)]  text-[#959595] font-medium text-[16px] pl-5 pt-4 rounded-xl">
                Project Details...
              </div>
            </div>
          </Flex>
        </div>
            
         <div className="mb-40 flex mr-64 justify-end">

        <Button
          text={"Send"}
          bgShow={false}
          className="rounded-3xl border-2"
        />
          
         </div>
      </Container>
    </section>
  );
}

export default Contact
