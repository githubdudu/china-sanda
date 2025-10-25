import { NavBar } from "@/sanity/sanity.types";

export const defaultNavBarData: NavBar = {
  _createdAt: "2025-10-25T00:00:00Z",
  _id: "default-navbar",
  _rev: "default",
  _type: "navBar",
  _updatedAt: "2025-10-25T00:00:00Z",
  logo: {
    _type: "image",
    asset: {
      _ref: "image-logo",
      _type: "reference",
    },
  },
  name: "Default Navigation Bar",
  siteName: "中国散打",
  siteName2: "China Sanda Club",
  navItems: [
    {
      _key: "nav-home",
      _type: "buttonContent",
      name: "Home",
      nameCN: "首页",
      url: "/",
    },
    {
      _key: "nav-classes",
      _type: "buttonContent",
      name: "Classes",
      nameCN: "课程安排",
      url: "/classes",
    },
    {
      _key: "nav-coaches",
      _type: "buttonContent",
      name: "Coaches",
      nameCN: "教练团队",
      url: "/coaches",
    },
    {
      _key: "nav-pricing",
      _type: "buttonContent",
      name: "Pricing",
      nameCN: "学费价格",
      url: "/pricing",
    },
    {
      _key: "nav-gallery",
      _type: "buttonContent",
      name: "Gallery",
      nameCN: "精彩回顾",
      url: "/gallery",
    },
    {
      _key: "nav-contact",
      _type: "buttonContent",
      name: "Contact",
      nameCN: "联系方式",
      url: "/contact",
    },
  ],
};
