import React from "react";
import Button from "../button";
import Mail from "../../assets/icons/mail";
import Phone from "../../assets/icons/phone";
import Copy from "../../assets/icons/copy";
import Github from "../../assets/icons/github";
import Twitter from "../../assets/icons/twitter";
import Figma from "../../assets/icons/figma";

export default function ContactMe() {
  return (
    <div className="py-16 bg-gray50 px-4">
      <div>
        <Button className={"pb-6"}>Get in touch</Button>
        <p className="text-center text-lg text-gray600">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex pt-6 justify-center items-center">
          <Mail />
          <h2 className="px-2 text-lg font-semibold	text-gray900">negarrezazadeh210@gmail.com</h2>
          <Copy />
        </div>
        <div className="flex pb-6 justify-center items-center">
          <Phone />
          <h2 className="px-2 text-lg font-semibold	text-gray900">+98 9198560718</h2>
          <Copy />
        </div>
        <p className="text-center text-base text-gray600">You may also find me on these platforms!</p>
        <div className="flex pt-2 justify-center">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
}
