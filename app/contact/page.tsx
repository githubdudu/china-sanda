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
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            联系我们
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Get in touch to start your martial arts journey or learn more about our programs.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 mt-2">
            联系我们，开始您的武术之旅或了解更多关于我们的课程。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <p className="text-lg mb-6" style={{ color: "var(--primary)" }}>发送消息</p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Visit us</h3>
            <p className="text-lg mb-6" style={{ color: "var(--primary)" }}>访问我们</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Address / 地址</h4>
                <p className="opacity-70">
                  {addressData.streetNumber}
                  {" "}
                  {addressData.streetName}
                </p>
                <p className="opacity-70">
                  {addressData.suburb}
                  {" "}
                  {addressData.postcode }
                </p>
                <p className="opacity-70">
                  {addressData.city}
                </p>
                <p className="opacity-70">
                  {addressData.country}
                </p>
                <p className="opacity-70 mb-3">
                </p>
                <p className="opacity-70">
                  {addressData.countryCN}
                  {" "}
                  {addressData.cityCN}
                </p>
                <p className="opacity-70">
                  {addressData.addressCN}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Phone / 电话</h4>
                <p className="opacity-70">
                  {addressData.phone}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email / 邮箱</h4>
                <p className="opacity-70">
                  {addressData.email}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hours / 营业时间</h4>
                <div className="opacity-70 space-y-1">
                  <p>
                    Please refer to my class schedule page.
                  </p>
                  <p>
                    请参考课程安排页面。
                  </p>
                  <Link
                    href="/classes#schedule"
                    className="inline-block underline"
                  >
                    <div>Go to Class Schedule</div>
                    <div>前往课程安排页面</div>
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <h4 className="font-semibold mb-3">Follow Us / 关注我们</h4>
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
