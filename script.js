const app = Vue.createApp({
    data() {
        return {
            arrMail: [],
        }
    },
    methods: {
        getMailRandom() {
            this.arrMail = [];
            for(let i = 0; i < 10; i++) {
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((server) =>  this.arrMail.push(server.data.response));
            }
        }
    },
    created() {
        this.getMailRandom();
    }
});

app.mount(`#app`);

let request = axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((server) => console.log(`Ecco una mail randomica: ` + server.data.response));