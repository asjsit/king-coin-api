const { post } = require('axios')

exports.KingCoinApi = class {
    constructor({token} = this) {
        this.token = token 
    }
    callApi(data, token = this.token) {
        return post("https://kcbot.ru/server/api/", {token, ...data}).then(({data}) => data)
    }

    getMyBalance(action = 'myBalance') {
        return this.callApi({ action })
    }

    getUserBalance({action = 'balance', user_ids = this.user_ids} = this) {
        return this.callApi({ action, user_ids })
    }

    getHistory({ action = 'tx', filter = this.filter, count = this.count, offset = this.offset } = this) {
        return this.callApi({ 
            action,
            filter: !filter ? 'ALL' : filter,
            count: !count ? 20 : count,
            offset: !offset ? 0 : offset
        })
    }
    
    sendCoins({action = 'transfer', receiver = this.receiver, amount = this.amount, payload = this.payload} = this) {
        return this.callApi({
            action,
            receiver,
            amount,
            payload: !payload ? 0 : payload
        })
    }
}