const cheerio = require('cheerio')
const Page = require('./page')

const readMetaTag = function ($, meta) {
    return $(`meta[property="og:${meta}"]`).attr('content');
}

const ScrapingOG = function (page) {
    const $ = cheerio.load(page.data);
    let data = {
        type: readMetaTag($, 'type'),
        title: readMetaTag($, 'title'),
        image: readMetaTag($, 'image'),
        url: readMetaTag($, 'url'),
        description: readMetaTag($, 'description')
    }
    let pageOg = new Page(data)
    if (!pageOg.isValid()) throw new Error("Página lida não pode ser validada.")
    return pageOg
}

module.exports = ScrapingOG