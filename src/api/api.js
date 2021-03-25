
import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://localhost/php'
})

export const cardsApi = {
    getAllCards() {
        return instanse.get('/all-cards.php')
            .then(response => {
                //console.log(response.data)
                return response.data;
            })
            .catch(error => {
                console.log("error getCityByLocation")
            });
    },
    addCrad(user_name, user_email, user_comment) {
        return instanse.post('/add-card.php', {
            user_name: user_name,
            user_email: user_email,
            user_comment: user_comment
        })
            .then(function ({ data }) {
                //console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}