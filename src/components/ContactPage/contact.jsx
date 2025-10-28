import React from "react";
import Button from "../ButtonComponent/button";
import Form from "../FormComponent/form";
 import { MdMessage } from "react-icons/md";
 import { IoCall } from "react-icons/io5";
 import { FaRegMessage } from "react-icons/fa6";
 import contactimg from "../../assets/images/service-image.png"


const Contact = () => {

  // const onSubmitForm = (e) =>{
  //   e.preventDefault();

  //   const [name , setName] = useState('')
  //   const [mail , setEmail] = useState('')
  //   const [text , setText] = useState('')
  // }

  return (
    <>
      <div className="container w-full  m-auto space-y-6 mt-15 ">
        <h1 className="text-6xl font-bold font-serif">CONTACT US :</h1>
        <p className="font-serif">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR <br/> JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>

        <div className="flex justify-evenly items-center mt-20">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
                <Button  icons={<MdMessage />} text={"VIA Support Chat"}/>
                <Button  icons={<IoCall />}  text={"VIA CALL"}  />
            </div>
            <div className="flex items-center justify-center">
                <Button  icons={<FaRegMessage />} text={"VIA EMAIL FORM"}/>
            </div>

            <div>
              <Form/>
            </div>
      </div>
            <div className=""><img src={contactimg} alt="contact image" className="max-w-full h-auto"/></div>

        </div>
      </div>
    </>
  );
};

export default Contact;
