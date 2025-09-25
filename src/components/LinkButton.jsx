
import './linkButton.scss';
import { Link } from 'react-router-dom';

export default function LinkButton( {children, className ="", linkto} ) {


    return (
        <Link to={linkto} className={`button-link ${className}`}>
            {children}
        </Link>
    )
}