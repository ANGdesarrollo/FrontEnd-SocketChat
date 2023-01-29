import './scss/App.scss'
import { VideoBackground } from "./ui/background/VideoBackground";
import { AppRouter } from "./router/AppRouter.jsx";

export const App = () => {
    return (
        <>
            <VideoBackground/>
            <AppRouter/>
        </>

    )
}

