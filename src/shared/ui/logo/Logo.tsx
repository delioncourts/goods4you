import logo from '../../assets/images/logo.png';
import styles from './Logo.module.css';

type Props = {
    className?: string;
}

const Logo: React.FC<Props> = (props) => {

    return (
        <>
            <img {...props} src={logo} alt="white logo Goods4you" />
        </>
    )
}

export default Logo;