const URLReader = require('./src/botURLReader')
const DownPage = require('./src/botDownPage')
const ScrapingOG = require('./src/botScrapingOG')
const Spider = require('./src/botSpider')

module.exports = {
    download: DownPage,
    scrap: ScrapingOG,
    spider: Spider,
    seeder: URLReader,
    run: async function (url) {
        const pages = []
        try {
            const result = await this.download(url)
            let spiderResult = this.spider(url, result)
            for (let urlPage of spiderResult) {
                console.log(`Lendo ${spiderResult.indexOf(urlPage) + 1} de ${spiderResult.length} ${urlPage}`)
                await this.scrapPage(urlPage, pages)
            }
            return pages
        } catch (err) {
            return null
        }
    },
    scrapPage: async function (urlPage, pages) {
        try {
            let result = await this.download(urlPage)
            let page = this.scrap(result)
            pages.push(page)
        } catch (err) {
            return null
        }
    }
}