import{useState} from "react"

const Login = (props) => {
    const [message, setMessage] = useState('Xin chao')
    return (
        <div>
            <h1>{message+" "}{props.name}</h1>
            <button onClick={() => setMessage('Ban da dang nhap thanh cong')}>Dangnhap</button>

        </div>
    )
}
export default Login