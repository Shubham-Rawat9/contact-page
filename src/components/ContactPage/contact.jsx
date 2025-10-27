import React from "react";
import Button from "./ButtonComponent/button";
 import { MdMessage } from "react-icons/md";
 import { IoCall } from "react-icons/io5";
 import { FaRegMessage } from "react-icons/fa6";


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

        <div className="flex justify-evenly mt-20">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
                <Button  icons={<MdMessage />} text={"VIA Support Chat"}/>
                <Button  icons={<IoCall />}  text={"VIA CALL"}/>
            </div>
            <div className="flex items-center justify-center">
                <Button  icons={<FaRegMessage />} text={"VIA EMAIL FORM"}/>
            </div>
      </div>
            <div>image</div>

        </div>
      </div>
    </>
  );
};

export default Contact;
