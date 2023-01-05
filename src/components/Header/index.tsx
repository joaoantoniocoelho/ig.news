import styles from './styles.module.scss';
import SignInButton from "./SignInButton";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer}>
                <img src="/images/logo.svg" alt="logo ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}