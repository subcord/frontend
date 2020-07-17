const workboxBuild = require("workbox-build");

const buildSW = () => {
    return workboxBuild
        .injectManifest({
            swSrc: "src/sw-custom.js", // custom sw rule

            swDest: "build/sw.js", // sw output file (auto-generated

            globDirectory: "build",

            globPatterns: ["**/*.{js,css,html,png,svg}"],

            maximumFileSizeToCacheInBytes: 5 * 1024 * 102,
        })
        .then((data) => {
            data.warnings.forEach(console.warn);
            console.info(`${data.count} files will be precached,
                  totaling ${data.size / (1024 * 1024)} MBs.`);
        });
};

buildSW();
