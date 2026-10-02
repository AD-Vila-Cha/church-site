import { flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

export const whoWeAreFlag = flag<boolean>({
  key: "who-we-are",
  description:
    "Show the 'Quem somos' section on the homepage (hidden until full site launch)",
  adapter: vercelAdapter,
});
