import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Christina Morales",
    "title": "From Pizza to Dip, Chips and Popcorn: Pickle Is Summer’s Big Flavor - The New York Times",
    "description": "For people with a sweet-and-sour tooth, there’s never been a greater pick of pickle-flavored possibilities, thanks to pickle spice.",
    "url": "https://www.nytimes.com/2022/08/01/dining/pickle-flavor-foods.html",
    "urlToImage": "https://static01.nyt.com/images/2022/08/01/dining/01dill-pickles2/01dill-pickles2-facebookJumbo.jpg",
    "publishedAt": "2022-08-01T23:54:35Z",
    "content": "Its a tanginess that appeals to a lot of consumers, especially younger ones, said Bret Thorn, a senior food and beverage editor at Nations Restaurant News. And I dont think people say, Ive tried a lo… [+800 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Stephen Losey",
    "title": "US Special Operations Command chooses L3Harris’ Sky Warden for Armed Overwatch effort - Yahoo! Voices",
    "description": "AFSOC hopes its Armed Overwatch plane will be able to pressure violent extremist groups in austere places like Africa, where the airspace is largely...",
    "url": "https://news.yahoo.com/us-special-operations-command-chooses-234924553.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/nvszqjxOBlV7IjoY7liFNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/jNTD21idUrdBowkYoitHzQ--~B/aD0zMzMzO3c9NTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/defense_news_499/72e89c47f34b5b820f9047fd36b9e1c0",
    "publishedAt": "2022-08-01T23:49:24Z",
    "content": "WASHINGTON U.S. Special Operations Command on Monday announced it has selected the AT-802U Sky Warden, made by L3Harris Technologies and Air Tractor, for its Armed Overwatch program.\r\nThe indefinite … [+3867 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Abigail Ng",
    "title": "Asia markets fall as South Korea's inflation accelerates - CNBC",
    "description": "Investors are also looking ahead to the Reserve Bank of Australia's interest rate decision.",
    "url": "https://www.cnbc.com/2022/08/02/asia-markets-south-korea-inflation-rba-interest-rates-oil.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106816845-1609213716683-gettyimages-1229866474-JAPAN_JPX.jpeg?v=1659397200&w=1920&h=1080",
    "publishedAt": "2022-08-01T23:40:33Z",
    "content": "SINGAPORE Asia-Pacific stocks fell on Tuesday as South Korea's inflation rose and investors look ahead to the Reserve Bank of Australia's interest rate decision.\r\nThe Nikkei 225 in Japan slipped 0.87… [+1502 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investor's Business Daily"
    },
    "author": "Investor's Business Daily",
    "title": "Dow Jones Futures: 7 Top Stocks To Buy And Watch - Investor's Business Daily",
    "description": "Arista Networks and CF Industries were key earnings movers late Monday.",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-what-to-do-as-stock-market-rally-strengthens-top-stocks-to-buy-and-watch/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2022/04/Stock-bullseye-01-adobe.jpg",
    "publishedAt": "2022-08-01T23:39:00Z",
    "content": "Dow Jones futures were lower following Monday's stock market fall. Despite Monday's slight losses, the market uptrend has been strengthening. And seven top stocks to buy and watch include Dow Jones e… [+7442 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Cramer's game plan for the trading week of Aug 1 - CNBC Television",
    "description": "The \"Mad Money\" host went over this week's slate of earnings and economic data reports on Monday's episode of the show.",
    "url": "https://www.youtube.com/watch?v=iN4OaWKY6yE",
    "urlToImage": "https://i.ytimg.com/vi/iN4OaWKY6yE/hqdefault.jpg",
    "publishedAt": "2022-08-01T23:35:26Z",
    "content": null
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Emma Roth",
    "title": "Tiffany is selling custom CryptoPunk pendants for $50000 - The Verge",
    "description": "Tiffany & Co. is selling a pendant exclusive to CryptoPunk NFT holders. The $50,000 pendant will be modeled after the buyer’s CryptoPunk avatar and will feature an 18K gold chain.",
    "url": "https://www.theverge.com/2022/8/1/23287775/tiffany-custom-cryptopunk-pendants-nfts-nftiff",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/WrK8iWNTVL1_z1BXdhMfskuAz8s=/0x358:1772x1286/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23915914/nft_tiffany_cryptopunks.png",
    "publishedAt": "2022-08-01T23:01:47Z",
    "content": "Yes, that is a CryptoPunk pendant.\r\nImage: Tiffany &amp; Co.\r\nFor about $50,000 (30 Ethereum), CryptoPunk holders can get a handcrafted pendant modeled after their NFT (non-fungible token) from Tiffa… [+2827 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "A top investor warns to stay away from the tech trade - CNBC Television",
    "description": "Dan Suzuki, Richard Bernstein Advisors, warns investors to stay away from tech. With CNBC's Melissa Lee and the Fast Money traders, Tim Seymour, Guy Adami, K...",
    "url": "https://www.youtube.com/watch?v=_9ahL5JbvSY",
    "urlToImage": "https://i.ytimg.com/vi/_9ahL5JbvSY/hqdefault.jpg",
    "publishedAt": "2022-08-01T22:42:05Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Joseph Adinolfi",
    "title": "JP Morgan quant who called summer rebound in stocks says rally could continue even if corporate profits decline - MarketWatch",
    "description": "U.S. equity valuations already are seeing a dramatic 're-rating' lower, even by the standard of a typical recession.",
    "url": "https://www.marketwatch.com/story/jp-morgan-quant-who-called-summer-rebound-in-stocks-says-rally-could-continue-even-if-corporate-profits-decline-11659393877",
    "urlToImage": "https://images.mktw.net/im-491465/social",
    "publishedAt": "2022-08-01T22:42:00Z",
    "content": "Investors worried about the next pullback for stocks might want to pause and consider this: the decline in equity valuations since the start of the year already has exceeded the average pullback of o… [+4285 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kitco NEWS"
    },
    "author": "http://www.facebook.com/kitconews",
    "title": "Gold is seeing a Fed-induced short squeeze, can it last - Kitco NEWS",
    "description": "(Kitco News) - Sentiment is quickly shifting in gold and silver as hedge funds continue to increase their bearish bets ahead of the Federal Reserve's monetary policy decision last week, according to data from the Commodity Futures Trading Commission.",
    "url": "https://www.kitco.com/news/2022-08-01/Gold-is-seeing-a-Fed-induced-short-squeeze-can-it-last.html",
    "urlToImage": "https://www.kitco.com/news/2022-08-01/images/shutterstock_1254532828.jpg",
    "publishedAt": "2022-08-01T21:43:00Z",
    "content": "Editor's Note: With so much market volatility, stay on top of daily news! Get caught up in minutes with our speedy summary of today's must-read news and expert opinions. Sign up here! \r\n(Kitco News) … [+3798 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Justine Calma",
    "title": "Amazon's climate pollution is getting way worse - The Verge",
    "description": "Amazon's pollution continues to grow despite its promises to address climate change. The company's carbon footprint is significantly larger since pledging to reach net-zero emissions.",
    "url": "https://www.theverge.com/2022/8/1/23287351/amazon-climate-change-carbon-emissions-worse-2021",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/JkMBt-vzMAgmRTfBBUGVy7wwbyQ=/0x420:5855x3485/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23915487/1241287513.jpg",
    "publishedAt": "2022-08-01T21:14:41Z",
    "content": "Don't be fooled by the climate PR\r\nA semi truck drives past an Amazon sort center under construction in the Otay Mesa neighborhood of San Diego, California, on Wednesday, March 9th, 2022.\r\nImage: Bin… [+4059 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Jack Stebbins",
    "title": "Family Dollar hit with $1.2 million in OSHA fines for violations at 2 Ohio stores - CNBC",
    "description": "Federal regulators have fined Family Dollar more than $1.2 million in penalties related to safety violations at two Ohio stores.",
    "url": "https://www.cnbc.com/2022/08/01/osha-fines-family-dollar-1point2-million-for-violations-at-2-ohio-stores.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107097043-1659384928451-gettyimages-1205050205-DOLLAR_TREE_EARNS.jpeg?v=1659384992&w=1920&h=1080",
    "publishedAt": "2022-08-01T21:10:55Z",
    "content": "Federal regulators have fined Family Dollar more than $1.2 million in penalties related to safety violations at two Ohio stores, the Department of Labor's Occupational Safety and Health Administratio… [+1677 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investor's Business Daily"
    },
    "author": "Investor's Business Daily",
    "title": "Shale Oil Producer Stocks Drop: Devon, Diamondback Beat Estimates | Investor's Business Daily - Investor's Business Daily",
    "description": "That kicks off a huge week for shale earnings. Shale stocks fell Monday.",
    "url": "https://www.investors.com/news/shale-oil-stocks-drop-ahead-of-quarterly-earnings/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2021/10/Stock-oilderrick-02-adobe.jpg",
    "publishedAt": "2022-08-01T20:54:00Z",
    "content": "Shale producers Devon Energy (DVN) and Diamondback Energy (FANG) beat earnings predictions Monday, after both companies booked losses during market trading. The stocks continued to drop in extended t… [+11646 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Kevin Stankiewicz",
    "title": "Here's what Wall Street expects when 4 of our companies report earnings this week - CNBC",
    "description": "The CNBC Investing Club previews the earnings reports for four companies in Jim Cramer's Charitable Trust that are scheduled to release results this week.",
    "url": "https://www.cnbc.com/2022/08/01/heres-what-wall-street-expects-when-4-of-our-companies-report-earnings-this-week.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106274274-1575319644260gettyimages-1160287351.jpeg?v=1638369920&w=1920&h=1080",
    "publishedAt": "2022-08-01T20:41:29Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Emma Goldberg",
    "title": "What Remote Work Debate? They’ve Been Back at the Office for a While. - The New York Times",
    "description": "Cubicles are largely empty in downtown San Francisco and Midtown Manhattan, but workers in America’s midsize and small cities are back to their commutes.",
    "url": "https://www.nytimes.com/2022/08/01/business/return-to-office-battles.html",
    "urlToImage": "https://static01.nyt.com/images/2022/07/31/business/31office-divide-1/31office-divide-1-facebookJumbo.jpg",
    "publishedAt": "2022-08-01T20:39:08Z",
    "content": "Gabe Tucker, 26, is a lawyer with Fortif Law Partners in Birmingham, Ala., where the share of job listings that permit remote work is roughly half that of New Yorks. Each morning, Mr. Tucker puts on … [+1581 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Kari Paul",
    "title": "Cryptocurrency fraud scheme busted by US securities agency - The Guardian",
    "description": "The pyramid scheme cheated investors out of $300m worldwide over more than two years",
    "url": "https://amp.theguardian.com/technology/2022/aug/01/forsage-cryptocurrency-scheme-fraud-us-sec",
    "urlToImage": null,
    "publishedAt": "2022-08-01T20:37:00Z",
    "content": "CryptocurrenciesThe Forsage pyramid scheme cheated investors out of $300m worldwide over more than two years\r\nUS authorities have busted a huge cryptocurrency pyramid scheme, charging 11 people for t… [+1819 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Jeremy C. Owens",
    "title": "Pinterest stock jumps more than 20% despite earnings miss, as Elliott confirms stake and users stick around - MarketWatch",
    "description": "Pinterest reports same number of users as a quarter before, beating expectations for a decline, as activist investor confirms reports it has largest stake in company that is undergoing a change at the top",
    "url": "https://www.marketwatch.com/story/pinterest-stock-jumps-17-after-elliott-confirms-stake-earnings-miss-but-users-stick-around-11659385474",
    "urlToImage": "https://images.mktw.net/im-273446/social",
    "publishedAt": "2022-08-01T20:24:00Z",
    "content": "Pinterest Inc. missed expectations for earnings and guided for revenue lower than analysts expected in the current quarter, but shares still spiked in after-hours trading as users stuck around in a q… [+6128 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Daniel Howley",
    "title": "Activision Blizzard to report earnings as games industry hits post-COVID slump - Yahoo Finance",
    "description": "Activision Blizzard beat analysts' expectations on revenue in Q2, despite an industry-wide slowdown.",
    "url": "https://finance.yahoo.com/news/activision-blizzard-q2-earnings-2022-185444884.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/q2OE9vFkaKus2yJvk1rEmw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/1b8d90e0-11c7-11ed-ae7f-e803251039d8",
    "publishedAt": "2022-08-01T20:08:30Z",
    "content": "Call of Duty maker Activision Blizzard (ATVI) reported its Q2 earnings after the closing bell Monday, beating analysts' expectations on revenue, but falling short on the bottom line as the industry c… [+4136 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Miranda Devine: 'Democrats are trying to fool the American people' - Fox Business",
    "description": "Fox News contributor Miranda Devine discusses Democrats' inflation reduction bill and accuses the party of lying to the American people in the process. #FOXB...",
    "url": "https://www.youtube.com/watch?v=FyOG8etloQA",
    "urlToImage": "https://i.ytimg.com/vi/FyOG8etloQA/hqdefault.jpg",
    "publishedAt": "2022-08-01T19:45:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Benzinga"
    },
    "author": "Randy Elias",
    "title": "Why Revlon Shares Are Rising - Benzinga",
    "description": "Revlon, Inc.",
    "url": "https://www.benzinga.com/news/small-cap/22/08/28297468/why-revlon-stock-is-skyrocketing",
    "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/08/01/stock_chart_rising.png?width=1200&height=800&fit=crop",
    "publishedAt": "2022-08-01T19:37:19Z",
    "content": "Revlon, Inc. REV shares are trading higher following a Reuters report suggesting a US bankruptcy judge has given the company permission to proceed with a $1.4 billion loan.\r\nAccording to the report, … [+573 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Benzinga"
    },
    "author": "Henry Khederian",
    "title": "Why AMD Shares Are Rising - Benzinga",
    "description": "Advanced Micro Devices, Inc. (NASDAQ: AMD) shares are trading higher by 2.99% to $97.30 Monday afternoon ahead of tomorrow's earnings report. According to analyst consensus estimates, Advanced Micro Devices is expected to report revenue of $6.53 billion on EP…",
    "url": "https://www.benzinga.com/trading-ideas/movers/22/08/28296854/advanced-micro-devices-stock-is-rising-whats-happening",
    "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/08/01/matrix-2953883_0.jpg?width=1200&height=800&fit=crop",
    "publishedAt": "2022-08-01T19:11:30Z",
    "content": "Advanced Micro Devices, Inc.AMD shares are trading higher by 2.99% to $97.30 Monday afternoon ahead of tomorrow's earnings report.\r\nAccording to analyst consensus estimates, Advanced Micro Devices is… [+526 chars]"
    }
    ]

  constructor(){
    super();
    console.log("this is the constructor of news component");
    this.state= {
      articles: this.articles 
    }
      
      
     
  }
 
  render() {
    return (
      <div className="container my3" >
        <h2>Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title} description={element.description} ImageUrl={element.urlToImage} NewsUrl ={element.url}/>
          </div>
          


        })}
            
            
        </div>
      </div>
    )
  }
}
//key={element.url=>is used for unique key pair}
