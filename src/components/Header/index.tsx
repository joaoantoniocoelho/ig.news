import styles from './styles.module.scss';
import SignInButton from "./SignInButton";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer}>
                <a href="http://localhost:3000">
                    <img src="/images/logo.svg" alt="ig.news"/>
                </a>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}