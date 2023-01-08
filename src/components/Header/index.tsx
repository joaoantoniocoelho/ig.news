import styles from './styles.module.scss';
import SignInButton from "./SignInButton";
import {ActiveLink} from "../ActiveLink";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer}>
                <a href="http://localhost:3000">
                    <img src="/images/logo.svg" alt="ig.news"/>
                </a>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/" legacyBehavior>
                        <a>Home</a>

                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" legacyBehavior>
                        <a>Posts</a>

                    </ActiveLink>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}