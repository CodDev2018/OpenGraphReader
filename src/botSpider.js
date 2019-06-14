const cheerio = require('cheerio')

const readLinks = function ($) {
    return Array.from($('a')).map(link => $(link).attr('href'));
}

const Spider = function (domain, page) {
    const $ = cheerio.load(page.data);
    let ret = readLinks($)
    return ret.filter(link => link.indexOf(domain) >= 0)
}

module.exports = Spider