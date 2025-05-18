// const Shadow = ({img}) => {
//   return (
//     <div className="bannerShadow">
//       {children}
//       <img src={img} alt="Banner Shade" />
//     </div>
//   );
// };

// export default Shadow;
import React from "react";

const Shadow = ({img}) => {
  return (
    <div>
      <img
        src={img}
        className="w-[520px] h-[543px] bannerShadow"
        alt=""
      />
    </div>
  );
};

export default Shadow;
