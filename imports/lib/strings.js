module.exports = {
  camelCase(string) {
    return string.replace(/-[a-z,0-9]/g, match => `${match[1].toUpperCase()}${match.slice(2)}`);
  },

  dashSeparated(string) {
    return string.replace(/([A-Z]|[0-9]+)/g, (match) => `-${match.toLowerCase()}`);
  },
};
