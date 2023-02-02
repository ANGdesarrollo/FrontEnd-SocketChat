import { useTheme } from "../../../hooks/useTheme/useTheme.js";

export const Button = ( { data } ) => {
    const { buttonColor, buttonBackground } = useTheme();
    return (
        <button style={ { backgroundColor: buttonBackground, color: buttonColor } }>{ data }</button>
    );
};
