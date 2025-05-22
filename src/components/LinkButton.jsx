
import './LinkButton.scss';

export default function LinkButton( {children, className =""} ) {


    return (
        <>
        <a href="#formular" className={`button-link ${className}`}>
            {children}
        </a>
        </>
    )
}