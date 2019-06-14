class Page {
    constructor(data) {
        this.url = data.url
        this.title = data.title
        this.image = data.image
        this.type = data.type
        this.dateTime = data.dateTime
        this.description = data.description
    }

    isValid() {
        if (this.type && this.type != 'article') return false

        return this.title && this.type && this.image && this.url && this.description
    }
}

module.exports = Page