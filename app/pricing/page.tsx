import type { Metadata } from "next";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing Plans | 价格方案 - China Sanda Club",
  description: "Choose the perfect membership plan for your training goals. Flexible options for everyone from beginners to competitive fighters. 选择最适合您的会员方案。",
};

const PricingPage = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing Plans
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            价格方案
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Flexible membership options designed to fit your schedule and training goals.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 mt-2">
            灵活的会员选择，适合您的日程安排和训练目标。
          </p>
        </div>

        {/* Placeholder: PricingTable component will be rendered here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg border ${
                plan.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "border-foreground/10"
              }`}
            >
              {/* TODO: Replace with PricingTable component */}
              {plan.highlighted && (
                <div className="mb-4">
                  <span
                    className="px-3 py-1 text-xs rounded-full font-semibold"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "var(--background)",
                    }}
                  >
                    RECOMMENDED
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.planName}</h3>
              <p className="text-lg mb-4" style={{ color: "var(--primary)" }}>
                {plan.planNameChinese}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{`¥${plan.price}`}</span>
                  <span className="text-sm opacity-50">{`/${plan.duration}`}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold uppercase opacity-50 mb-2">Features:</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx}>
                    <p className="text-sm flex items-start gap-2">
                      <span style={{ color: "var(--primary)" }}>✓</span>
                      <span>{feature}</span>
                    </p>
                    <p className="text-xs opacity-50 ml-5 mt-1">
                      {plan.featuresChinese[idx]}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary w-full"
                style={{
                  backgroundColor: plan.highlighted ? "var(--primary)" : "transparent",
                  color: plan.highlighted ? "var(--background)" : "var(--foreground)",
                  border: plan.highlighted ? "none" : "1px solid var(--foreground)",
                }}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm opacity-70">
          <p>All prices include training equipment rental. Custom packages available.</p>
          <p className="mt-1">所有价格包含训练装备租赁。可定制套餐。</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
