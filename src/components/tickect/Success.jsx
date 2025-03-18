import { useNavigate } from "react-router-dom";
import successIcon from "../../assets/images/success.png"; // save that checkmark/star icon as success-icon.png

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f2f2f2] p-4 mt-20">
            <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
                <img
                    src={successIcon}
                    alt="Success Icon"
                    className="w-20 h-20 mx-auto mb-6"
                />
                <h2 className="text-2xl font-semibold mb-2">Thanks for your order!</h2>
                <p className="text-gray-600 mb-6">An email will be sent to you shortly</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-[#55BFEA] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-500"
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default Success;
