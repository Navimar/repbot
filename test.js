const handle = require('./handle');

module.exports = {
    start: () => {

        let Reply = function (author) {
            this.sendtext = (text) => {
                console.log(author + ":", text)
            }
        }
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext, }, "@Happycatfish")
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext }, "+ @test983475 крутой перец, жжот")
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext }, "+ @test234513 крутой перец, жжот")
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext, }, "@test983475")
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext, }, "@test234513")
        handle.text({ from: { username: "test983475" }, reply: new Reply('test983475').sendtext  }, "+ @testMakarbodar commentт")
        handle.text({ from: { username: "Happycatfish" }, reply: new Reply('Happycatfish').sendtext,}, "@testMakarbodar")
    }
}

