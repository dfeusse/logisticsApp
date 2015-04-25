function text01() {

var data = [
        {"id": 0, "date": "11:15:45 12.16.13", "username": "HuffingtonPost", "displayname": "Huffington Post", "text": "Walmart.com  is selling 'Occupy Wall Street' posters http://huff.to/1cMxeti"},
        {"id": 1, "date": "11:15:43 12.16.13", "username": "upwithsteve", "displayname": "Up w/ Steve Kornacki", "text": 'For more on this history, check out "THE RETAIL REVOLUTION: How Wal-Mart Created a Brave New World of Business" pic.twitter.com/bC7VrfJTqD'},
        {"id": 2, "date": "11:15:41 12.16.13", "username": "Angel Casamiro", "displayname": "angelcasimiro", "text": "Got that Urban Outfitters taste with a Walmart budget."},
        {"id": 3, "date": "11:15:41 12.16.13", "username": "adage", "displayname": "Ad Age", "text": "Facebook, Walmart to help write rules on use of facial recognition technology http://bit.ly/Jz0ucY "},
        {"id": 4, "date": "11:15:40 12.16.13", "username": "HuffPostImpact", "displayname": "v", "text": "WOW! Real-life Santa pays off $20,000 of Walmart layaway bills http://huff.to/1cLZFHO"},
        {"id": 5, "date": "11:15:39 12.16.13", "username": "mrickel", "displayname": "Mark Rickel", "text": "#ShopWithAJock at #Walmart w/Bengals @mo_12_sanu to make Christmas brighter for kids in need. pic.twitter.com/1IsbMta5vK"},
        {"id": 6, "date": "11:15:37 12.16.13", "username": "jdgreear", "displayname": "J.D. Greear", "text": "Per latest trip to #walmart,I'm pretty sure there's not 1 square in of the commercial cosmos over which the Duck Dynasty has not said “mine"},
        {"id": 7, "date": "11:15:37 12.16.13", "username": "AbbeyNiezgoda", "displayname": "Abbey Niezgoda", "text": "About a dozen shoppers braving the weather to make it to Walmart in Milford. Watch for ice! #FirstAlertCT pic.twitter.com/VN5QVsEnaN"},
        {"id": 8, "date": "11:15:36 12.16.13", "username": "CNBC", "displayname": "CNBC", "text": "Wal-Mart announced Apple's newest iPhones will be available for sale at its stores without a contract: http://cnb.cx/1czpkDJ • $AAPL $WMT"},
        {"id": 9, "date": "11:15:36 12.16.13", "username": "videogamedeals", "displayname": "Cheap Gamer", "text": "PlayStation 4 bundle in stock at Walmart http://ow.ly/rMbcK "},
        {"id": 29, "date": "11:15:45 12.16.13", "username": "HuffingtonPost", "displayname": "Huffington Post", "text": "Walmart.com  is selling 'Occupy Wall Street' posters http://huff.to/1cMxeti"},
        {"id": 17, "date": "11:15:43 12.16.13", "username": "upwithsteve", "displayname": "Up w/ Steve Kornacki", "text": 'For more on this history, check out "THE RETAIL REVOLUTION: How Wal-Mart Created a Brave New World of Business" pic.twitter.com/bC7VrfJTqD'},
        {"id": 12, "date": "11:15:41 12.16.13", "username": "Angel Casamiro", "displayname": "angelcasimiro", "text": "Got that Urban Outfitters taste with a Walmart budget."},
        {"id": 13, "date": "11:15:41 12.16.13", "username": "adage", "displayname": "Ad Age", "text": "Facebook, Walmart to help write rules on use of facial recognition technology http://bit.ly/Jz0ucY "},
        {"id": 44, "date": "11:15:40 12.16.13", "username": "HuffPostImpact", "displayname": "Huffington Post Impact", "text": "WOW! Real-life Santa pays off $20,000 of Walmart layaway bills http://huff.to/1cLZFHO"},
        {"id": 37, "date": "11:15:39 12.16.13", "username": "mrickel", "displayname": "Mark Rickel", "text": "#ShopWithAJock at #Walmart w/Bengals @mo_12_sanu to make Christmas brighter for kids in need. pic.twitter.com/1IsbMta5vK"},
        {"id": 9, "date": "11:15:37 12.16.13", "username": "jdgreear", "displayname": "J.D. Greear", "text": "Per latest trip to #walmart,I'm pretty sure there's not 1 square in of the commercial cosmos over which the Duck Dynasty has not said “mine"},
        {"id": 1, "date": "11:15:37 12.16.13", "username": "AbbeyNiezgoda", "displayname": "Abbey Niezgoda", "text": "About a dozen shoppers braving the weather to make it to Walmart in Milford. Watch for ice! #FirstAlertCT pic.twitter.com/VN5QVsEnaN"},
        {"id": 18, "date": "11:15:36 12.16.13", "username": "CNBC", "displayname": "CNBC", "text": "Wal-Mart announced Apple's newest iPhones will be available for sale at its stores without a contract: http://cnb.cx/1czpkDJ • $AAPL $WMT"},
        {"id": 6, "date": "11:15:36 12.16.13", "username": "videogamedeals", "displayname": "Cheap Gamer", "text": "PlayStation 4 bundle in stock at Walmart http://ow.ly/rMbcK "}
        ];

    var tweetsBox = d3.select("#tweets");


    function updateList(data) {
        /*
        var data = data.sort(function(a,b) {
            return d3.descending(a.id, b.id);
        });
        */
        var ri = Math.floor(Math.random() * data.length); // Random Index position in the array
        var rs = data.splice(ri, 1); // Splice out a random element using the ri var

        //var data = newdata.slice(0,10)

        tweetsBox.selectAll('.tweetdiv').remove()

        var tweet = tweetsBox.selectAll('.tweetdiv')
            .data(rs, function(d) {return d.id; });

        var enterDiv = tweet.enter()
            .append("div")
            .attr("class", "tweetdiv")
            .style("opacity", 0)
            //.style("opacity", 1)

        enterDiv.append("div")
            .attr("class", "username")
            .text(function(d) {return "@" + d.username});

        enterDiv.append("div")
            .attr("class", "displayname")
            .text(function(d) {return d.displayname});

        enterDiv.append("div")
            .attr("class", "date")
            .text(function(d) {return d.date});

        enterDiv.append("div")
            .attr("class", "text")
            .text(function(d) {return d.text});

        tweet.transition()
            .duration(1000)
            .style("opacity", 1)
    };

    //call function initially
    updateList(data)

    //call function every 1.5 seconds
    setInterval(function() {
        updateList(data)
        console.log('flashinglights')
    }, 2500);

/*
d3.select('body').on('click', function() {
    console.log('pone emma')
    updateList(data)
})
*/


} //end of function wrapper
text01()