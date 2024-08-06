"use client";

import React, { useRef } from "react";
import ContactForm from "../forms/contact_form";
import { BiEnvelope, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import ContactBadge from "../globals/contact_badge";
import { motion, useScroll, useTransform } from "framer-motion";
import BgWrapper from "../globals/bg_wrapper";
import InBetween from "./in_between";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import { navbarElementsList } from "@/utils/constants";

const ContactSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[4],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const scaleContent = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateContent = useTransform(scrollYProgress, [0, 1], [-2, 0]);

  return (
    <section
      ref={transitionRef}
      className="flex flex-col dark:bg-[#303030] bg-white min-h-screen max-w-[100vw] justify-center items-center"
    >
      <InBetween
        iconType="chat"
        title="Let's talk?"
        overallYprogress={scrollYProgress}
      />

      <motion.div
        ref={contentRef}
        id="contact"
        className="w-full"
        style={{ scale: scaleContent, rotate: rotateContent }}
      >
        <BgWrapper
          customClassName={
            "pt-14 relative z-10 max-w-[100vw] min-h-screen flex flex-1 justify-center items-center"
          }
        >
          <div className="flex md:gap-14 gap-10 max-sm:flex-col-reverse items-start max-sm:items-center justify-center w-[min(800px,100%)] px-6">
            <div className="flex flex-col gap-3 max-sm:mb-32 w-full">
              <h3 className="mb-4 mt-1 text-sm font-semibold">
                To get in touch with me, you can easily find me here:
              </h3>

              <ContactBadge
                title="Email"
                link="mailto:gaetanroyalpro@gmail.com"
                icon={
                  <div>
                    <BiEnvelope color="#F31260" size={"1.2em"} />
                  </div>
                }
              />

              <ContactBadge
                title="LinkedIn"
                link="https://linkedin.com/in/royalg"
                icon={
                  <div>
                    <BiLogoLinkedin color="#F31260" size={"1.2em"} />
                  </div>
                }
              />

              <ContactBadge
                title="Github"
                link="https://github.com/royalgaetan"
                icon={
                  <div>
                    <BiLogoGithub color="#F31260" size={"1.2em"} />
                  </div>
                }
              />
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default ContactSection;
