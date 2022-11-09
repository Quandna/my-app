import { useState } from "react";

const LoginHeader = () => {
    const headerStyles = {
        overflow: 'hidden',
        background: "linear-gradient(to left,red,yellow)",
        display: "flex",
        justifyContent: "space-between",
        width:"100%",
        left :0,
        bottom:0,
    };
    const [message, setMessage] = useState("xin chao ban");
    return (
        <div style={headerStyles}>
            <h1>{message}</h1>
            <button onClick={() => setMessage("ban da dang nhap thanh cong")}>
                Dangnhap
            </button>
        </div>
    );
};
export default LoginHeader;