// Pricing plan data types and placeholder data
// Structured to match planned Sanity.io schema

export interface PricingPlan {
  id: string;
  planName: string;
  planNameChinese: string;
  price: number;
  currency: string;
  duration: string; // e.g., "month", "3 months", "year"
  features: string[];
  featuresChinese: string[];
  highlighted?: boolean; // marks the recommended/popular plan
  category: "membership" | "class-package" | "private-training";
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-1",
    planName: "Basic Monthly Membership",
    planNameChinese: "基础月度会员",
    price: 299,
    currency: "CNY",
    duration: "month",
    features: [
      "Access to all beginner classes",
      "4 classes per week",
      "Locker room access",
      "Basic training equipment included",
    ],
    featuresChinese: [
      "可参加所有初级课程",
      "每周4节课",
      "更衣室使用权",
      "包含基础训练装备",
    ],
    category: "membership",
  },
  {
    id: "plan-2",
    planName: "Premium Monthly Membership",
    planNameChinese: "高级月度会员",
    price: 599,
    currency: "CNY",
    duration: "month",
    features: [
      "Unlimited access to all classes",
      "Priority class booking",
      "Free training gear (gloves, wraps)",
      "Access to advanced workshops",
      "Nutrition consultation included",
    ],
    featuresChinese: [
      "无限制参加所有课程",
      "优先预订课程",
      "免费训练装备（手套、缠手带）",
      "参加高级研讨会",
      "包含营养咨询",
    ],
    highlighted: true,
    category: "membership",
  },
  {
    id: "plan-3",
    planName: "Annual Membership",
    planNameChinese: "年度会员",
    price: 5999,
    currency: "CNY",
    duration: "year",
    features: [
      "Unlimited access to all classes",
      "10% discount on private training",
      "Free competition entry (1 per year)",
      "Complete training gear set",
      "Quarterly performance assessment",
      "Guest pass (2 per month)",
    ],
    featuresChinese: [
      "无限制参加所有课程",
      "私教课程九折优惠",
      "免费比赛参赛费（每年1次）",
      "全套训练装备",
      "季度表现评估",
      "访客通行证（每月2次）",
    ],
    category: "membership",
  },
  {
    id: "plan-4",
    planName: "Private Training Package (10 Sessions)",
    planNameChinese: "私教课程套餐（10节）",
    price: 2999,
    currency: "CNY",
    duration: "package",
    features: [
      "10 one-on-one training sessions",
      "Personalized training program",
      "Flexible scheduling",
      "Video analysis of techniques",
      "Valid for 3 months",
    ],
    featuresChinese: [
      "10节一对一训练课",
      "个性化训练计划",
      "灵活安排时间",
      "技术动作视频分析",
      "有效期3个月",
    ],
    category: "private-training",
  },
];
