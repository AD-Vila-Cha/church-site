import type { NextConfig } from "next";
import createWithVercelToolbar from "@vercel/toolbar/plugins/next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // my.ptisp buttons link to these paths; the panels stay on PTisp.
      // Keep them as redirects: a rewrite would proxy logins through Vercel.
      {
        source: "/webmail/:path*",
        destination: "https://webmail.advc.pt",
        permanent: false,
      },
      {
        source: "/cpanel/:path*",
        destination: "https://cpanel.advc.pt",
        permanent: false,
      },
    ];
  },
};

const withVercelToolbar = createWithVercelToolbar();

export default withVercelToolbar(nextConfig);
