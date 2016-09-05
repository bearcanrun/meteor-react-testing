module.exports = {
    camelCase: function(string) {
        return string.replace(/-[a-z,0-9]/g, function(match) {
            return match[1].toUpperCase() + match.slice(2);
        });
    },

    dashSeparated: function(string) {
        return string.replace(/([A-Z]|[0-9]+)/g, function(match) {
            return '-' + match.toLowerCase();
        });
    }
};
