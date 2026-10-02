import { flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

export const whoWeAreFlag = flag<boolean>({
  key: "who-we-are",
  description:
    "Show the 'Quem somos' section on the homepage (hidden until full site launch)",
  adapter: vercelAdapter,
});

export const historyFlag = flag<boolean>({
  key: "history",
  description:
    "Show the 'A nossa história' section on the homepage (hidden until full site launch)",
  adapter: vercelAdapter,
});
