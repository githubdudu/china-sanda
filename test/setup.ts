import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

// jsdom has no IntersectionObserver; motion/react needs it for whileInView.
// Children always render (only opacity animates), so no-ops are enough.
class MockIntersectionObserver {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
  takeRecords = () => [];
  root = null;
  rootMargin = "";
  thresholds = [];
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});
globalThis.IntersectionObserver
  = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock window.matchMedia for jsdom environment
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
