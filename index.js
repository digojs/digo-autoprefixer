var postcss = require("postcss");
var autoPrefixer = require("autoprefixer");

module.exports = function AutoPrefixer(file, options, done) {

    // 设置默认值。
    options = Object.assign({
        from: file.srcPath,
        to: file.srcPath,
        map: file.sourceMap && {
            prev: file.sourceMapObject,
            from: file.srcPath,
            annotation: false
        }
    }, options);

    // 生成。
    postcss([autoPrefixer(options)]).process(file.content, options).then(function (result) {
        var warnings = result.warnings();
        if (warnings.length) {
            for (var i = 0; i < warnings.length; i++) {
                file.warning({
                    plugin: AutoPrefixer.name,
                    message: warnings[i].text || warnings[i].reason || warnings[i].message,
                    line: warnings[i].line - 1,
                    column: warnings[i].column - 1,
                });
            }
        }

        // 保存。
        file.content = result.css;
        if (result.map) {
            file.sourceMapObject = result.map;
        }
    }, function (error) {
        file.error({
            plugin: AutoPrefixer.name,
            message: error.text || error.reason || error.message,
            line: error.line - 1,
            column: error.column - 1,
        });
    }).then(done, done);

};
