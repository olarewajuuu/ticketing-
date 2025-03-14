import { Link } from "react-router-dom";

const TermsPrivacy = () => {
  return (
    <p className="text-xs text-gray-500 text-center mt-4">
      By signing in or creating an account, you agree with our{" "}
      <Link to="/terms" className="text-[#55BFEA] hover:underline">Terms & Conditions</Link> and{" "}
      <Link to="/privacy" className="text-[#55BFEA] hover:underline">Privacy Statement</Link>.
    </p>
  );
};

export default TermsPrivacy;
