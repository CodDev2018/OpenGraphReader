const readline = require('readline-sync');
const URLReader = function () {
    const expression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi;
    const regex = new RegExp(expression);

    const url = readline.question("Qual a URL da pagina a ser processada? ");
    if (url.match(regex)) {
        return url 
    } else {
        throw new Error("A URL informada não é válida");
    }
}

module.exports = URLReader


