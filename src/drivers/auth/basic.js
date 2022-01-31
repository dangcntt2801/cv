export default {

    request: function(req, token) {
        this.drivers.http.setHeaders.call(this, req, {
            Authorization: token,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    },

    response: function(res) {
        var headers = this.drivers.http.getHeaders.call(this, res),
            token = headers.Authorization || headers.authorization;

        return token;
    }
};