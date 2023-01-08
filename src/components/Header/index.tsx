import styles from './styles.module.scss';
import SignInButton from "./SignInButton";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer}>
                <a href="http://localhost:3000">
                    <img src="/images/logo.svg" alt="ig.news"/>
                </a>
                <nav>
                    <Link href="/" legacyBehavior>
                        <a className={styles.active}>Home</a>

                    </Link>
                    <Link href="/posts" legacyBehavior>
                        <a>Posts</a>

                    </Link>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}