const axios = require('axios')
const url = 'https://kcbot.ru/server/api/'

class API {
    constructor({ token }) {
        this.token = token 
    }
    async getMyBalance(action = 'myBalance', token = this.token) {
        const data = await axios.post(url, {
            action,
            token
        })
        .then(data => data?.data)
        .catch(console.error)
        
        return data
    }

    async getUserBalance({ action = 'balance', token = this.token, user_ids = this.user_ids } = {}) {
        const data = await axios.post(url, {
            action,
            token,
            user_ids
        })
        .then(data => data?.data)
        .catch(console.error)

        return data
    }

    async getHistory({ action = 'tx', token = this.token, filter = this.filter, count = this.count, offset = this.offset } = {}) {
        const data = await axios.post(url, {
            action,
            token,
            filter: !filter ? 'ALL' : filter,
            count: !count ? 100 : count,
            offset: !offset ? 0 : offset
        })
        .then(data => data?.data)
        .catch(console.error)

        return data
    }

    async sendCoins({ action = 'transfer', token = this.token, receiver = this.receiver, amount = this.amount, payload = this.payload } = {}) {
        const data = await axios.post(url, {
            action,
            token,
            receiver,
            amount,
            payload: !payload ? 0 : payload
        })
        .then(data => data?.data)
        .catch(console.error)

        return data
    }
}

module.exports = { API }