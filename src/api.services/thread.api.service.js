import Axios from 'axios';

export default {
    getThreads() {
        return Axios.get('https://private-a171eb-redditthread.apiary-mock.com/questions').catch((error) => {
            console.log(error);
        });
    }
};