module.exports = {
    version: '0.0.1',
    init: function (pluginContext) {
        pluginContext.registerPolicy(require('../ApiGateway/policies/auth0policy.js'));
    }
};