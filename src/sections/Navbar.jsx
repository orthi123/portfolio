import logo from "../assets/images/LOGO.png";
import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { NavLink } from "react-router";

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

const Navbar = () => {
  return (
    <nav className>
      <Container>
        <Flex className="items-center justify-between text-center pt-4 font-primary_font text-xl">
          <div>
            <img src={logo} alt="" />
          </div>
          <menu>
            <ul className="flex gap-[56px]">
              {menu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="navItem"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
          <Flex>
            <Button text={"Hire Me"} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
