import styles from './styles.module.scss';
import {signIn, useSession} from "next-auth/react";

interface SubscribeButtonProps {
    priceId: string;
}

export default function SubscribeButton({priceId}: SubscribeButtonProps) {
    const {data: session} = useSession();

    function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        // Create checkout session
    }

    return (
        <button type="button" className={styles.subscribeButton}>
            Subscribe now
        </button>
    )
}