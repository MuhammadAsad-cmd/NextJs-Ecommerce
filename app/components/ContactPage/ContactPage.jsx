import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="Popppins container mx-auto my-20 max-w-[1170px] px-3 md:px-5 lg:px-10 xl:px-0">
        <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
          Home <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000]">Cantact</span>
        </p>

        <div className="mt-20 flex flex-col gap-5 lg:flex-row lg:gap-[30px]">
          <div className="Shadow w-full border border-[#0000000D] bg-[#FFFFFF] lg:min-w-[320px] lg:max-w-[340px]">
            <div className="px-3 py-10 md:px-8">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    width={40}
                    height={40}
                    unoptimized
                    src="/images/icons-phone.svg"
                    className="h-10 w-10"
                  />
                  <p className="text-base font-medium leading-6">Call To Us</p>
                </div>

                <p className="mt-6 text-sm font-normal leading-5">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="mt-4 text-sm font-normal leading-5">
                  Phone: +8801611112222
                </p>
              </div>
              <div className="my-8 max-w-[270px] border-t border-[#000000]"></div>
              <div className="mt-10">
                <div className="flex items-center gap-4">
                  <Image
                    width={40}
                    height={40}
                    unoptimized
                    src="/images/icons-mail.svg"
                    className="h-10 w-10"
                  />
                  <p className="text-base font-medium leading-6">Write To US</p>
                </div>

                <p className="mt-6 max-w-[250px] text-sm font-normal leading-5">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mt-4 text-sm font-normal leading-5">
                  Emails: customer@exclusive.com
                </p>
                <p className="mt-4 text-sm font-normal leading-5">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>
          <div className="Shadow  border border-[#0000000D] bg-[#FFFFFF]">
            <form className="px-3 py-10 lg:px-[30px]">
              <div className="mb-6 grid gap-4 lg:grid-cols-3">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none lg:max-w-[235px]"
                    placeholder="Your Name *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none lg:max-w-[235px]"
                    placeholder="Your Email *"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none lg:max-w-[235px]"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
              </div>

              <div className="mt-8">
                <textarea
                  id="message"
                  rows="12"
                  className="block w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50  outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-end">
                <button
                  type="submit"
                  className=" rounded bg-[#DB4444] px-12 py-4 text-center text-sm font-medium text-white "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
