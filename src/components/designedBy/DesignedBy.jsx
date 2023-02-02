const pencil = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675041051/chat/lapiz_mklmk7.png'
const linkedin = 'https://www.linkedin.com/in/mariel-torres-front-end/'

export const DesignedBy = () => {
    return (
        <div className={`designed`}>
            <span>Designed by <a target="_blank" href={ linkedin }>Mariel Torres</a></span>
            <img src={ pencil } alt="pencil"/>
        </div>
    );
};
