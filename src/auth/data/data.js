import { useSelector } from "react-redux";

const imgDark = "https://res.cloudinary.com/dwz16rstr/image/upload/v1674147320/chat/login_ch0nnq.png";
const imgLight = "https://res.cloudinary.com/dwz16rstr/image/upload/v1675347409/chat/Login-light_vvpltk.png";

export const data = () => {
    const { theme } = useSelector( state => state.theme );
    const imgAuth = theme === 'Dark' ? imgDark : imgLight

    return {
        imgAuth
    }
}
