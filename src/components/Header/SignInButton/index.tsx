import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";
import styles from './styles.module.scss';

export default function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#84d361"/>
            João Coelho
            <FiX color="#737370" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub/>
            Sign in with Github
        </button>
    )
}