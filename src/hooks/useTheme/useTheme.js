import { useSelector } from "react-redux";
import { gsap } from "gsap";

export const useTheme = () => {
    const { theme } = useSelector( state => state.theme );

    const animationTheme = ( ref, refInput ) => {
        if ( theme === 'Dark' ) {
            gsap.fromTo( ref.current, {
                opacity: 0,
            }, { opacity: 1, duration: 3, } )
        } else {
            gsap.fromTo( ref.current, {
                opacity: 0,
            }, { opacity: 1, duration: 3, } )
        }

    }

    const animationInput = ( refInput ) => {
        if ( theme === 'Dark' ) {
            gsap.fromTo( refInput.current, {
                backgroundColor: '#99B4F3'
            }, { background: "rgba(163, 176, 204, 0.5)", duration: 1, } )
        } else {
            gsap.fromTo( refInput.current, {
                backgroundColor: 'rgba(163, 176, 204, 0.5)'
            }, { background: "rgba(153,180,243,0.35)", duration: 1, } )
        }
    }

    const animationButton = ( refInput ) => {
        if ( theme === 'Dark' ) {
            gsap.fromTo( refInput.current, {
                backgroundColor: '#f2f2f2f2',
                color: '#99B4F3'
            }, { background: "#194166", color: '#F2F2F2F2', duration: 1, } )
        } else {
            gsap.fromTo( refInput.current, {
                backgroundColor: '#194166',
                color: '#F2F2F2F2'
            }, { background: "#F2F2F2F2", color: "#99CCFF", duration: 1, } )
        }
    }

    return {
        animationTheme,
        animationInput,
        animationButton,
        theme
    }
}
