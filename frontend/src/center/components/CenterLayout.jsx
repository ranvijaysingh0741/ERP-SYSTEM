import Topbar from "./Topbar";
import NavbarCenter from "./NavbarCenter";
import MarqueeBar from "./Marquee";
import "../App.css";

export default function CenterLayout({ children, title }) {
  return (
    <div className="center-shell min-h-screen overflow-x-hidden">
      <Topbar />
      <NavbarCenter />

<div className="center-titlebar w-full">
  <div className="max-w-[1400px] mx-auto px-6 py-2">
    <div className="text-white text-[13px] md:text-[14px] font-extrabold tracking-[1.4px] uppercase">
      {title}
    </div>
  </div>
</div>

      <MarqueeBar />

      <div className="center-content px-3 md:px-6 py-3">{children}</div>
    </div>
  );
}
