export default function MarqueeBar() {
  const notices = `
    महत्वपूर्ण सूचना: कक्षा 10वीं एवं 12वीं की परीक्षाएं, जो 30 मार्च 2026 से प्रारंभ होने वाली थीं, अपरिहार्य कारणों से स्थगित कर दी गई हैं।
    अब परीक्षाएं मई 2026 में आयोजित की जाएंगी। नवीन समय-सारणी शीघ्र जारी की जाएगी। |
    ADMISSION OPEN FOR MARCH 2026 EXAM |
    STUDENT DOCUMENT VERIFICATION AVAILABLE AT CENTER PANEL |
  `;

  return (
    <>
      <div className="bg-[#1f4a97] border-b border-blue-800 overflow-hidden">
        <div className="whitespace-nowrap py-1">
          <div className="inline-block animate-marquee text-white text-[10px] md:text-[13px] font-bold tracking-[0.5px] pl-[60%]">
            {notices}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes noticeMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: noticeMarquee 32s linear infinite;
        }

        @media (max-width: 508px) {
          .animate-marquee {
            animation-duration: 5s;
          }
        }
      `}</style>
    </>
  );
}