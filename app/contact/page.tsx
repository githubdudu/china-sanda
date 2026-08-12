import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Address } from "@/sanity/sanity.types";
import { client } from "@/sanity/client";
import { defaultAddressData } from "@/data/address";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | 联系我们 - China Sanda Club",
  description: "Get in touch to start your martial arts journey. Visit our training center in Beijing or send us a message. 联系我们，开始您的武术之旅。",
};

const ADDRESS_QUERY = `*[_type == "address"][0]`;

async function ContactPage() {
  let addressData: Address | null = null;
  try {
    addressData = await client.fetch<Address>(ADDRESS_QUERY);
    console.log("Fetched address data successfully");
    if (!addressData) {
      throw new Error("No address data found");
    }
  }
  catch (error) {
    addressData = defaultAddressData;
    console.error("Error fetching address data from Sanity.io", error);
  }
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Get in touch to start your martial arts journey or learn more about our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Visit us</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="opacity-70">
                  {addressData.streetNumber}
                  {" "}
                  {addressData.streetName}
                </p>
                <p className="opacity-70">
                  {addressData.suburb}
                </p>
                <p className="opacity-70">
                  {addressData.city}
                  {" "}
                  {addressData.postcode }
                </p>
                <p className="opacity-70">
                  {addressData.country}
                </p>
                <p className="opacity-70 mb-3">
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Location Map</h4>
                <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1596.053697706782!2d174.75729580470875!3d-36.863848120016755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4904e497e6d9%3A0xea3341c13700036c!2sChina Sanda Club!5e0!3m2!1sen!2snz!4v1761477743108!5m2!1sen!2snz"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="China Sanda Club Location"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="opacity-70">
                  {addressData.phone}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="opacity-70">
                  {addressData.email}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <div className="opacity-70 space-y-1">
                  <p>
                    Please refer to my class schedule page.
                  </p>
                  <Link
                    href="/classes#schedule"
                    className="inline-block underline"
                  >
                    <div>Go to Class Schedule</div>
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="px-4 py-2 rounded-lg border border-foreground/20 hover:border-primary transition-colors">
                    WeChat
                  </a>
                  <a href="#" className="px-4 py-2 rounded-lg border border-foreground/20 hover:border-primary transition-colors">
                    Weibo
                  </a>
                  <a href="#" className="px-4 py-2 rounded-lg border border-foreground/20 hover:border-primary transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
