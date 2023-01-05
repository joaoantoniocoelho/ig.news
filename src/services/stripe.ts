import Stripe from 'stripe';
import {version, name} from '../../package.json';

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: name,
        version: version,
    }
})