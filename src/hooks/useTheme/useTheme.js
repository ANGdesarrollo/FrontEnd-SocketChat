import { useSelector } from "react-redux";
import { gsap } from "gsap";

export const useTheme = () => {
    const { theme } = useSelector( state => state.theme );

    let letterMenu = theme === 'Dark' ? '#F2F2F2F2' : '#194166';
    let buttonBackground = theme === 'Dark' ? 'rgb(25, 65, 102)' : '#F2F2F2F2'
    let buttonColor = theme === 'Dark' ? '#F2F2F2F2' : 'rgb(25, 65, 102)'
    let inputBackground = theme === 'Dark' ? 'rgba(163, 176, 204, 0.5)' : 'rgba(153, 180, 243, 0.35)'

    const animationTheme = ( ref ) => {
        if ( theme === 'Dark' ) {
            gsap.fromTo( ref.current, {
                color: '#f2f2f2',
                opacity: 0,
            }, { opacity: 1, duration: 3, } )
        } else {
            gsap.fromTo( ref.current, {
                color: '#194166',
                opacity: 0,
            }, { opacity: 1, duration: 3, } )
        }

    }

    return {
        animationTheme,
        theme,
        letterMenu,
        buttonBackground,
        buttonColor,
        inputBackground
    }
}
