import SignUp from "../pages/SignUp.jsx"
import SignIn from "../pages/SignIn.jsx"
import ToOrder from "../pages/ToOrder.jsx"
import Main from "./components/Main.jsx"
import Orders from "../pages/MakeOrders.jsx"
import Confirm from "../pages/ConfirmOrder.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PreLoader from "../pages/PreLoader.jsx"
import Menu from "./components/SingatureDishes.jsx"
import Logout from "../pages/Logout.jsx"
import Success from "../pages/OrderSuccess.jsx"

import CheckOut from "../pages/CheckOut.jsx"
import MakePayment from "../pages/MakePayment.jsx"

export default function App() {
    return (
        <div>
            <PreLoader />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/toOrder" element={<ToOrder />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/placeOrder" element={<Orders />} />
                    <Route path="/confirmOrder" element={<Confirm />} />
                    <Route path="/orderSuccess" element={<Success />} />
                    <Route path="/checkOut" element={ <CheckOut />} />
{/*                     <Route path="/makePayment" element={ <MakePayment />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )

}
