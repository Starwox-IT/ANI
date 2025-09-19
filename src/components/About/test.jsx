<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center md:hidden mb-12">
          {/* Logo */}
          <img src={AniLogo} alt="ANI Logo" className="mb-6 w-16 h-16" />

          {/* Quick Links */}
          <div className="mb-6 text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li>Home</li>
              <li>About ANI</li>
              <li>Innovations</li>
              <li>Contact</li>
              <li>Home</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 text-center">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-[#E5E5E5] mb-2">(+234) 89391239219</p>
            <p className="text-sm text-[#E5E5E5]">ani@gmail.com</p>
          </div>

          {/* Email Form */}
          <div className="mb-6 w-full max-w-sm">
            <h4 className="text-lg font-semibold mb-4 text-center">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-black w-full"
              />
              <button
                type="submit"
                className="bg-[#007E3F] text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <FaFacebookF className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaTwitter className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaInstagram className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaYoutube className="text-white hover:text-[#007E3F] cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#E5E5E5] text-center">
            © 2025 ANI. All Right Reserved
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li>Home</li>
              <li>About ANI</li>
              <li>Innovations</li>
              <li>Contact</li>
              <li>Home</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-[#E5E5E5] mb-2">(+234) 89391239219</p>
            <p className="text-sm text-[#E5E5E5]">ani@gmail.com</p>
          </div>

          {/* Email Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-black w-full"
              />
              <button
                type="submit"
                className="bg-[#007E3F] text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Partnership Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Partnership Information</h4>
            <p className="text-sm text-[#E5E5E5] leading-relaxed">
              In partnership with Nigeria's Federal Ministry of Science and Technology
            </p>
          </div>
        </div>

        {/* Bottom Row for Desktop */}
        <div className="hidden md:flex justify-between items-center border-t border-[#4B4B4B] pt-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaTwitter className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaInstagram className="text-white hover:text-[#007E3F] cursor-pointer" />
            <FaYoutube className="text-white hover:text-[#007E3F] cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#E5E5E5]">
            © 2025 ANI. All Right Reserved
          </p>
        </div>
      </div>