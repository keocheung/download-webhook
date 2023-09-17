const { download } = require('./utils');

module.exports = (options, callback) => {
    let op = ``;
    let path = '';
    if (options.path) {
        path = `downloads/${options.path}`;
    }
    else {
        path = `downloads`;
    }
    if (options.name) {
        path += `/${options.name}`;
    } else {
        path += '/%(title)s.%(ext)s';
    }
    if (options.extra_options) {
        op += ` ${options.extra_options}`;
    }
    op += ` -o '${path}'`;

    download(`yt-dlp ${op} '${options.url}' >> logs/youtube-dl.log`, callback);
}