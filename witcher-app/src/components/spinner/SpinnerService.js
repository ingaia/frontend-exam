import PubSub from 'pubsub-js';

export const GLOBAL_SPINNER = "GLOBAL_SPINNER";

export default class SpinnerService { 

    static get spinner() {
        return PubSub;
    }

    static on(id) {
        PubSub.publish(id ? id : GLOBAL_SPINNER, true);
    }

    static off(id) {
        PubSub.publish(id ? id : GLOBAL_SPINNER, false);
    }

}