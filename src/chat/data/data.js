import { useSelector } from "react-redux";

const darkChatBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674147322/chat/chatBox_wfisdy.png';
const lightChatBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675347476/chat/ChatBox-Light_fdjdn5.png';
const darkSendBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674147317/chat/SendMessage_vx0rtu.png';
const lightSendBoxImg = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675347411/chat/SendMessage-Light_mwsjih.png';
const lightButton = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675367115/chat/button-light_ltagxh.png';
const darkButton = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674156478/chat/button_ngxa8w.png'

export const data = () => {
    const { theme } = useSelector( state => state.theme );

    const chatBoxImg = theme === 'Dark' ? darkChatBoxImg : lightChatBoxImg;
    const sendBoxImg = theme === 'Dark' ? darkSendBoxImg : lightSendBoxImg;
    const sendMsg = theme === 'Dark'  ? darkButton : lightButton

    return {
        chatBoxImg,
        sendBoxImg,
        sendMsg
    }
}
