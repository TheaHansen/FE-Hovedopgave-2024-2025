// jest.setup.ts
import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from "util";
import "@testing-library/jest-dom/extend-expect";

// Polyfill the global environment for TextEncoder and TextDecoder
(globalThis as any).TextEncoder = NodeTextEncoder; // Force the type to 'any'
(globalThis as any).TextDecoder = NodeTextDecoder; // Force the type to 'any

// This is important: import jest-dom after polyfill to ensure setup works
import "@testing-library/jest-dom";
import { JSDOM } from "jsdom";

// Optionally, create a custom jsdom environment if needed
const { window } = new JSDOM("");
//globalThis.window = window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
