import React from "react";
import Button from "./ButtonComponent/button";


const Contact = () => {
  return (
    <>
      <div className="container w-full border-2 m-auto space-y-6 mt-24 ">
        <h1 className="text-6xl font-bold font-serif">CONTACT US :</h1>
        <p className="font-serif">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR <br/> JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>

        <div className="flex justify-evenly">

            <div>
                <Button/>
            </div>
            <div>image</div>

        </div>
      </div>
    </>
  );
};

export default Contact;
