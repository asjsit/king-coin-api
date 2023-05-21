const { post } = require('axios')
const url = 'https://kcbot.ru/server/api/'

exports.KingCoinApi = class {
    constructor({ token } = {}) {
        this.token = token 
    }
    callApi(data = {}) {
        return post(url, data).then(data => data?.data).catch((err) => err)
    }

    getMyBalance({ action = 'myBalance', token = this.token } = {}) {
        return this.callApi({ action, token })
    }

    getUserBalance({ action = 'balance', token = this.token, user_ids = this.user_ids } = {}) {
        return this.callApi({ action, token, user_ids })
    }

    getHistory({ action = 'tx', token = this.token, filter = this.filter, count = this.count, offset = this.offset } = {}) {
        return this.callApi({ 
            action,
            token,
            filter: !filter ? 'ALL' : filter,
            count: !count ? 20 : count,
            offset: !offset ? 0 : offset
        })
    }
    
    sendCoins({ action = 'transfer', token = this.token, receiver = this.receiver, amount = this.amount, payload = this.payload } = {}) {
        return this.callApi({
            action,
            token,
            receiver,
            amount,
            payload: !payload ? 0 : payload
        })
    }
}