import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Freelance Web Designer",
          "I Build Business Websites",
          "Creating Clean & Modern UI",
          "Helping Businesses Go Online",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
