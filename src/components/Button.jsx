const Button = ({ text, link = "/", className, bgShow = true }) => {
  return (
    <a
      href={link}
      className={`${
        bgShow ? "btnLinear" : "border border-[#959595]"
      } text-[#FFFFFF]  py-3 px-10 rounded-lg ${className}`}
    >
      {text}
    </a>
  );

};
export default Button;

