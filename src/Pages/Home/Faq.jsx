import Accordion from "@/components/Accordion/Accordion";
import TitleWIthPera from "@/components/TitleWithPera/TitleWIthPera";
import React from "react";

const Faq = ({accBG}) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div>
          <TitleWIthPera
            text="Frequently Asked Questions"
            pera="A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts."
          ></TitleWIthPera>
        </div>
        <div className="mt-12">
          <Accordion accBG={accBG}></Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
