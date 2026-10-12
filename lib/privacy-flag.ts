import { mvpFlag, privacyFlag } from "@/flags";

// The privacy policy is only visible when both the MVP and its own flag are on.
// (Not in `flags.ts`: the flags discovery route exports every export of that file.)
export async function isPrivacyPolicyVisible() {
  const [mvp, privacy] = await Promise.all([mvpFlag(), privacyFlag()]);
  return mvp && privacy;
}
