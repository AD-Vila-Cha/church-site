import { flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

export const mvpFlag = flag<boolean>({
  key: "mvp",
  description:
    "Show the MVP homepage sections (Quem somos, A nossa história, ...) — hidden until full site launch",
  adapter: vercelAdapter,
});

// Separate from `mvp` so an unfinished privacy policy can never block the MVP launch.
// The policy page and its footer link need BOTH flags on (see `lib/privacy-flag.ts`).
export const privacyFlag = flag<boolean>({
  key: "privacy",
  description:
    "Show the privacy policy page and footer link — also requires the mvp flag; keeps the policy from blocking the MVP launch",
  adapter: vercelAdapter,
});
