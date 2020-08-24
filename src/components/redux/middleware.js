import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php']

const spamWords = ({ dispatch }) => {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Вы спамер. Иди отдыхай'))
                }
            }
            return next(action)
        }
    }
}

export default spamWords;