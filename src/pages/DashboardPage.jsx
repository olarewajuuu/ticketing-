import { Routes, Route } from "react-router-dom";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import MyEvents from "../components/dashboard/MyEvents";
import Payments from "../components/dashboard/Payments";
import EditProfile from "../components/dashboard/EditProfile";
import Profile from "../components/dashboard/Profile";
import ChangePassword from "../components/dashboard/ChangePassword";
import SignOut from "../components/dashboard/SignOut";
import Notification from "../components/dashboard/Notification";

const DashboardPage = ({ setCurrentUser }) => {
    return (
        <div className="pt-44">
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="my-events" element={<MyEvents />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path="notifications" element={<Notification />} />
                    <Route path="signout" element={<SignOut setCurrentUser={setCurrentUser} />} />
                </Routes>
            </DashboardLayout>
        </div>
    );
};

export default DashboardPage;
