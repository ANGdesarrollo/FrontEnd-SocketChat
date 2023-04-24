import './scss/App.scss'
import { VideoBackground } from "./ui/background/VideoBackground";
import { AppRouter } from "./router/AppRouter.jsx";
import { Music } from "./components/music/Music.jsx";
import { DesignedBy } from "./components/designedBy/DesignedBy";

export const App = () => {

    return (
        <>
            <VideoBackground/>
            <AppRouter/>
            <Music/>
            <DesignedBy/>
        </>

    )
}

