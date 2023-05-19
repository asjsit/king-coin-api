const axios = require('axios')
const url = 'https://kcbot.ru/server/api/'

exports.KingCoinApi = class {
    constructor({ token } = {}) {
        this.token = token 
    }
    getMyBalance(action = 'myBalance', token = this.token) {
        return axios.post(url, {
            action,
            token
        }).then(data => data?.data).catch(console.error)
    }

    getUserBalance({ action = 'balance', token = this.token, user_ids = this.user_ids } = {}) {
        return axios.post(url, {
            action,
            token,
            user_ids
        }).then(data => data?.data).catch(console.error)
    }

    getHistory({ action = 'tx', token = this.token, filter = this.filter, count = this.count, offset = this.offset } = {}) {
        return axios.post(url, {
            action,
            token,
            filter: !filter ? 'ALL' : filter,
            count: !count ? 100 : count,
            offset: !offset ? 0 : offset
        }).then(data => data?.data).catch(console.error)
    }
    
    sendCoins({ action = 'transfer', token = this.token, receiver = this.receiver, amount = this.amount, payload = this.payload } = {}) {
        return axios.post(url, {
            action,
            token,
            receiver,
            amount,
            payload: !payload ? 0 : payload
        }).then(data => data?.data).catch(console.error)
    }
}