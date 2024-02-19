import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

type TLogo = {
    className?: string;
}

const Logo: React.FC<TLogo> = (props) => {

    return (
        <Link to="/"><img {...props} src={logo} alt="white logo Goods4you" /></Link>
    )
}

export default Logo;