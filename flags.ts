import { flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

export const mvpFlag = flag<boolean>({
  key: "mvp",
  description:
    "Show the MVP homepage sections (Quem somos, A nossa história, ...) — hidden until full site launch",
  adapter: vercelAdapter,
});
