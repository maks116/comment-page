import { cardsApi } from "../api/api";

const GET_ALL_CARDS = "GET_ALL_CARDS"
const UPDATE_CARDS = "UPDATE_CARDS"

let initialState = {
    success: '',
    cards: []
}

// let initialState = {
//     success: 1,
//     cards: [
//         {
//             id: 1,
//             user_name: 'Вася',
//             user_email: 'vasya@mail.ru',
//             user_comment: 'Сообщение от Василия Пупкина'
//         },
//         {
//             id: 2,
//             user_name: 'Маруся',
//             user_email: 'marysia@mail.ru',
//             user_comment: 'Всем привет, я Маруся'
//         },
//         {
//             id: 3,
//             user_name: 'Вася',
//             user_email: 'vasya@mail.ru',
//             user_comment: 'Сообщение от Василия Пупкина'
//         },
//         {
//             id: 4,
//             user_name: 'Маруся',
//             user_email: 'marysia@mail.ru',
//             user_comment: 'Всем привет, я Маруся'
//         },
//         {
//             id: 5,
//             user_name: 'Вася',
//             user_email: 'vasya@mail.ru',
//             user_comment: 'Сообщение от Василия Пупкина'
//         },
//     ]
// }

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARDS:
            return state;
        case UPDATE_CARDS:
            return action.cards

        default:
            return state;
    }
}

export const getCards = () => ({ type: GET_ALL_CARDS })
export const updateCards = (cards) => ({ type: UPDATE_CARDS, cards })


export const apiGetCards = () => {
    return (dispatch) => {
        cardsApi.getAllCards()
            .then(data => {
                dispatch(updateCards(data))
                dispatch(getCards())
            })
            .catch(error => {
                console.log('error updateAllCity in Reducers')
            })
    }
}

export const apiAddCard = (user_name, user_email, user_comment) => {
    return (dispatch) => {
        cardsApi.addCrad(user_name, user_email, user_comment)
            .then(data => {
                dispatch(apiGetCards())
            })
            .catch(error => {
                console.log('error updateAllCity in Reducers')
            })
    }
}

export default myReducer