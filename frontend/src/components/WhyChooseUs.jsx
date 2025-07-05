import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div data-aos="fade-right" className="flex-shrink-0">
          <div className="rounded-full overflow-hidden w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
            <img
              src="assets/why-1.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" className="flex-1">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
            What Makes Us Different
          </p>
          <p className="text-gray-600 mb-8">
            We offer unique services that set us apart in the industry and ensure our clients' digital success.
          </p>

          {/* Feature Items */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-green-500 text-2xl">⏰</span>
              <div>
                <h4 className="font-bold text-lg">01. ON-TIME DELIVERY</h4>
                <p className="text-gray-600 text-sm">
                  We believe that our timely delivery will create a long-term relationship with customers for business continuity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-2xl">🛠️</span>
              <div>
                <h4 className="font-bold text-lg">02. WEBSITE MANAGEMENT</h4>
                <p className="text-gray-600 text-sm">
                  We face all types of technical complications and resolve them instantaneously to keep your website performing without hassle.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500 text-2xl">🔐</span>
              <div>
                <h4 className="font-bold text-lg">03. CODE SECURITY</h4>
                <p className="text-gray-600 text-sm">
                  Our code security services ensure cyber threat detection and tools for remediation, managing risks from open source components and ensuring policy compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
