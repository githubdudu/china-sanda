import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | 联系我们 - China Sanda Club",
  description: "Get in touch to start your martial arts journey. Visit our training center in Beijing or send us a message. 联系我们，开始您的武术之旅。",
};

const ContactPage = () => {
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
                <h4 className="font-semibold mb-2">Location / 地址</h4>
                <p className="opacity-70">123 Martial Arts Street</p>
                <p className="opacity-70">Beijing, China 100000</p>
                <p className="opacity-70 mt-1">中国北京市武术街123号</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Phone / 电话</h4>
                <p className="opacity-70">+86 10 1234 5678</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email / 邮箱</h4>
                <p className="opacity-70">info@chinasandaclub.com</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hours / 营业时间</h4>
                <div className="opacity-70 space-y-1">
                  <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  <p className="mt-2">周一至周五：早上6点 - 晚上10点</p>
                  <p>周六至周日：早上8点 - 晚上8点</p>
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
