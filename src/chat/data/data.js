import { useSelector } from "react-redux";

const darkChatBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674147322/chat/chatBox_wfisdy.png';
const lightChatBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675347476/chat/ChatBox-Light_fdjdn5.png';
const darkSendBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674147317/chat/SendMessage_vx0rtu.png';
const lightSendBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675347411/chat/SendMessage-Light_mwsjih.png';

export const data = () => {
    const { theme } = useSelector( state => state.theme );

    const chatBoxImg = theme === 'Dark' ? darkChatBoxImg : lightChatBoxImg;
    const sendBoxImg = theme === 'Dark' ? darkSendBoxImg : lightSendBoxImg;

    return {
        chatBoxImg,
        sendBoxImg
    }
}
