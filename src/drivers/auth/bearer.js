export default {

    request: function(req, token) {
        this.drivers.http.setHeaders.call(this, req, {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    },

    response: function(res) {
        var headers = this.drivers.http.getHeaders.call(this, res),
            token = headers.Authorization || headers.authorization || res.data.data.token;

        if (token) {
            token = token.split(/Bearer:?\s?/i);
            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};