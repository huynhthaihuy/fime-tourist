const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve("src"),
            "@@": path.resolve(),
            "@constants": path.resolve("src/constants"),
            "@library": path.resolve("src/library"),
            "@components": path.resolve("src/components"),
            "@actions": path.resolve("src/actions"),
            "@reducers": path.resolve("src/reducers"),
            "@sagas": path.resolve("src/sagas"),
            "@pages": path.resolve("src/pages"),
            "@routes": path.resolve("src/routes"),
            "@utils": path.resolve("src/utils")
        }
    },
};