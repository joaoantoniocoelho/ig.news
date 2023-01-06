import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";
import styles from './styles.module.scss';
import {signIn, signOut, useSession} from "next-auth/react";

export default function SignInButton() {
    const {data: session} = useSession();


    return session ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#84d361"/>
            {session.user.name}
            <FiX color="#737370" className={styles.closeIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub/>
            Sign in with Github
        </button>
    )
}