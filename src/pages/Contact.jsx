import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div>
          <div className="flex justify-center mt-20 mb-10 ml-5 lg:ml-0">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact DOBA Intelligence now </h1>
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdAT6RhQqVyNpRJm3STUG8a350aBUqohtsnTn1cLUeS4nCjvQ/viewform?embedded=true"
              width="800"
              height="1087"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
