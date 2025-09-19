import React from "react";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import gmail from "../../../assets/gmail.png";
import twitter from "../../../assets/twitter.png";
import AniLogo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#383638] text-white pt-16 pb-8 font-montserrat flex justify-center">
      <div className="footer-wrapper w-[90%] flex flex-col gap-10">
        {/* Top Section */}
        <div className="footer-top flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="logo flex-1 md:text-left">
            <img src={AniLogo} alt="ANI Logo" className="w-[60px]" />
          </div>

          {/* Terms */}
          <div className="terms flex-1">
            <h4 className="text-lg font-semibold mb-4">Terms & policies</h4>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li>Home</li>
              <li>About ANI</li>
              <li>Innovations</li>
              <li>Contact</li>
              <li>Home</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contact flex-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-[#E5E5E5] mb-2">(+234) 89391239219</p>
            <p className="text-sm text-[#E5E5E5]">ani@gmail.com</p>
          </div>

          {/* Update */}
          <div className="update flex-1 flex flex-col gap-3 items-start">
            <h4 className="text-lg font-semibold mb-4 w-max">Stay Updated</h4>
            <form className="flex flex-col gap-5 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 font-open-sans py-2 rounded-3xl text-black w-full bg-[#FFFFFFCC]"
              />
              <button
                type="submit"
                className="bg-[#007E3F] w-full text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>

            {/* Hidden on mobile */}
            <p className="patner font-open-sans hidden md:block">
              In partnership with Nigeria’s Federal Ministry of Science and Technology
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom flex flex-col justify-center items-center gap-3 text-center">
          <div className="footer-icons flex gap-5">
            <img src={facebook} alt="Facebook" className="w-[35px]" />
            <img src={instagram} alt="Instagram" className="w-[35px]" />
            <img src={linkedin} alt="LinkedIn" className="w-[35px]" />
            <img src={gmail} alt="Gmail" className="w-[35px]" />
            <img src={twitter} alt="Twitter" className="w-[35px]" />
          </div>
          <div className="line">
            <div className="min-w-[300px] h-[1.5px] bg-[#EFEFEF]"></div>
          </div>
          <p className="font-quicksand">Copyright @ 2025 ANI. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;