import phoneImg from "../assets/images/phone.svg";
import playstoreImg from "../assets/images/playstore.svg";

const MobileAppSection = () => {
  return (
    <div>
      {/* Mobile View: Visible Only on Mobile */}
      <div className="bg-[#55BFEA] text-white py-8 px-4 flex items-center justify-center mt-20 md:hidden relative">
        <img src={phoneImg} alt="Mobile App" className="w-60 absolute left-0 bottom-4" />
        <div className="text-left ml-40">
          <p className="text-sm  mb-6">
          Our free Mobile App will let you book flights, hotels, and event tickets, all while enjoying incredible deals anytime, anywhere! Stay tuned!
          </p>
          <img src={playstoreImg} alt="playstore Img" />
        </div>
      </div>

      {/* Desktop View: Visible Only on Desktop */}
      <div className="hidden md:flex bg-[#55BFEA] text-white p-30 items-center mt-20 justify-center relative">
        <img src={phoneImg} alt="Mobile App" className="w-100 absolute left-40 bottom-14" />
        <div className="ml-50 text-center">
          <h2 className="text-[28px] font-bold mb-4">Get Ready for the Ultimate Mobile Convenience!</h2>
          <p className="text-sm">
            Our free Mobile App will let you book flights, hotels, and event tickets, all while enjoying incredible <br /> deals
            anytime, anywhere! Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
