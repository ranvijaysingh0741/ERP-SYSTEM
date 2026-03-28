import Topbar from "./Topbar";
import NavbarCenter from "./NavbarCenter";
import MarqueeBar from "./Marquee";

export default function CenterLayout({ children, title }) {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
  backgroundColor: "#e7e4dc",
  backgroundImage: `
    radial-gradient(circle at 12% 22%, rgba(120,144,180,0.14) 0, rgba(120,144,180,0.14) 13%, transparent 13%),
    radial-gradient(circle at 78% 68%, rgba(120,144,180,0.12) 0, rgba(120,144,180,0.12) 11%, transparent 11%),
    radial-gradient(circle at 48% 18%, rgba(120,144,180,0.08) 0, rgba(120,144,180,0.08) 17%, transparent 17%),
    linear-gradient(140deg, rgba(255,255,255,0.16) 10%, transparent 10%),
    linear-gradient(35deg, rgba(0,0,0,0.03) 8%, transparent 8%)
  `,
  backgroundSize: "520px 520px, 560px 560px, 620px 620px, 420px 420px, 520px 520px",
  backgroundPosition: "left top, right bottom, center top, left center, right center"
}}
    >
      <Topbar />
      <NavbarCenter />

<div className="w-full bg-gradient-to-r from-[#1d4b9a] via-[#285ab0] to-[#315fa8]">
  <div className="max-w-[1400px] mx-auto px-6 py-2">
    <div className="text-white text-[13px] md:text-[14px] font-extrabold tracking-[1.4px] uppercase">
      {title}
    </div>
  </div>
</div>

      <MarqueeBar />

      <div className="px-3 md:px-6 py-3">{children}</div>
    </div>
  );
}