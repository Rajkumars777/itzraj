import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "/src/assets/sec-4-p-e-1.png";
import pe2 from "/src/assets/sec-4-p-e-2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });

  return (
    <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-4-p-e-1 rellax" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-4-p-e-2 rellax" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            WORK EXPERIENCE
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
          "Crafting Success, Building Futures: A Chronicle of Expertise and Innovation in Every Project."
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Testimonial 1 */}
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/airos.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                </div>
                <div><b>Software Devloper</b></div>
                <div className=" text-black text-center">
                  At Airosspace R&D pvt ltd
                </div>
             
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
                I have successfully completed my Internship at Airosspace R&D pvt ltd. as a Software Devloper.During my time at Airosspace,I had 
                the incredible opportunity to work on the customizing a mission controller.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>

          {/* Testimonial 2 */}
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/uni.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Web Devloper</b></div>
                <div className=" text-black text-center">
                  At Unified Mentor pvt ltd
                </div>
               
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
                I have successfully completed my Internship at Unified Mentor as a Web Devloper.During my time at Unified Mentor,I had 
                the incredible opportunity to work on the multiple web application creation and developments.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/revil.png"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Design Committee Lead</b></div>
                <div className=" text-black text-center">
                  At REVIL-Symposium,CIT-chennai
                </div>
               
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
                Revil is an integral part of our department's symposium.Within the symposium,i hold the position of the Design and Content Committee Lead.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/gdsc.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>GDSC-Member</b></div>
                <div className=" text-black text-center">
                At Google Devloper Student Club
                </div>
               
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
              I am a Member in Google Devloper Student Club at Chennai Institute Of Technology
        
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/zorphix.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Event Organizer</b></div>
                <div className=" text-black text-center">
                At Zorphix-Symposium,CIT-chennai
                </div>
               
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
              Zorphix is an integral part of our department's symposium.Within the symposium,i hold the position of the Event Organizer.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/tk.png"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Event Organizer</b></div>
                <div className=" text-black text-center">
                At Takshashila'23-Cultural
                </div>
               
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
              Takshashila'23 is an integral part of our college's grand cultural festivel.Within the cultural,i hold the position of the Event Organizer.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/lumo.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Designer</b></div>
                <div className=" text-black text-center">
                  At LUMOS-Hikari No Matsuri
                </div>
             
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
                "LUMOS" is a magazine at Chennai Institute Of Technology,and Lumos is conducting a "Hikari No Matsuri" as a Anime fest event,
                I worked as a Designer.
       
            </div>
            </div>
            {/* SLIDE END */}
          </Div>


          {/* Testimonial 3 */}
          <Div className="testimonial-box bg-[#F2F2F2] w-full md:w-[300px] h-[400px] rounded-[15px] relative mb-[50px]">
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[40px] py-[40px]">
              <div className="mb-[20px]">
                <img
                  src="src/assets/yfest.png"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full text-center"
                  alt="Client Avatar"
                />
                 </div>
                <div><b>Designer</b></div>
                <div className=" text-black text-center">
                  At Youth Empwerment Fest'23
                </div>
             
              <div className="text-[15px] 2xl:text-[12px] leading-[20px] 2xl:leading-[25px] text-black text-center">
              Youth Empowerment Fest'23 is an integral part of our college's event.Within the event,i hold the position of the Designer.
              
            </div>
            </div>
            {/* SLIDE END */}
          </Div>
        </div>
        {/* CAROUSEL END */}
      </Wrapper>
      
    </div>
  );
};

export default Testimonials;
``
