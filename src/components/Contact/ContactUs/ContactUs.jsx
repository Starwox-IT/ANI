
import { MapPin, Mail, MessageCircle } from "lucide-react";
import JoinNowForm from "../../Join/JoinNow/JoinNowForm";

export default function ContactUs() {
  return (
    <section className="container mx-auto  px-4 py-20 max-w-7xl">
      {/* Heading */}
      <div className="text-center  my-16">
        <h2 className="text-3xl text-[#252525] md:text-5xl lg:text-6xl font-bold mb-6">
          Let’s Build Together
        </h2>
        <p className="text-[#252525CC] max-w-2xl md:text-[18px] lg:text-[24px] font-open-sans mx-auto">
          We’d love to hear from you — whether you have an idea, a question, or
          a partnership proposal
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Form */}
        <div className="border border-gray-200 shadow-sm rounded-2xl">
          <JoinNowForm />
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-xl">ANI Office</h4>
              <p className="text-[#252525CC] md:text-lg">
                Plot 123 Innovation Drive, Abuja, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Email</h4>
              <p className="text-[#252525CC] md:text-lg">info@ani.gov.ng</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Live Chat</h4>
              <p className="text-[#252525CC] md:text-lg">
                Click the chat icon on the bottom right to start talking to us.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 md:mt-12">
            <iframe
              title="ANI Office Location"
              src="https://www.google.com/maps?q=9.058583,7.401806&z=15&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
