const { FuseBox, WebIndexPlugin, SassPlugin, CSSPlugin } = require("fuse-box");
const fuse = FuseBox.init({
    homeDir: "packages/app",
    output: "dist/$name.js",
    plugins: [
        WebIndexPlugin({ template: "assets/index.html" }),
        [SassPlugin({importer : true}), CSSPlugin()],
    ]
});

fuse.dev();
fuse.bundle("app").hmr().watch()
    .instructions(`>main.js`);


fuse.run()
