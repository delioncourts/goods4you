import logo from '../../assets/images/logo.svg';

type TLogo = {
    className?: string;
}

const Logo: React.FC<TLogo> = (props) => {

    return (
        <a href="/mainpage" target="_blank" rel="noopener noreferrer">
            <img {...props} src={logo} alt="white logo Goods4you" />
        </a>
    )
}

export default Logo;