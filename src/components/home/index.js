import {Component} from 'react'
import Navbar from '../navbar'
import Population from '../populationChart';
import Bitcoin from '../bitcoinChart';

import './index.css'

class Home extends Component{
    state={populationData:[]}

    componentDidMount(){
        this.getData()
    }

    getData = async () => {
        const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const formattedData = data.data.map(entry => ({
                nation: entry.Nation,
                year: entry.Year,
                population: entry.Population,
            }));
            this.setState({ populationData: formattedData });
        } else {
            console.error('Failed to fetch data from the API');
        }
    };
    


    render(){
        const{populationData}=this.state
        console.log(populationData,'data')
        
        return(
            <>
          <Navbar/>
          <div className='home-container'>
            <div className='about-image-text-container'>
                <img src='//images.ctfassets.net/c5bd0wqjc7v0/2gsOMm2A5SOFiZiFUefQfd/147484f67bf9a19519d53ee1c54103b4/Unsplash-xE5SAT0WeTQ.jpg' className='about-image'/>
                <div className='about-text-container'>
                    <h1 className='about-crypto-heading'>About Carbon Cell</h1>
                <p className='about-crypto-para'>Crypto creates economic freedom by ensuring that people can participate fairly in the economy, and Carbon Cell is on a mission to increase economic freedom for more than 1 billion people. We’re updating the century-old financial system by providing a trusted platform that makes it easy for people and institutions to engage with crypto assets, including trading, staking, safekeeping, spending, and fast, free global transfers. We also provide critical infrastructure for onchain activity and support builders who share our vision that onchain is the new online. And together with the crypto community, we advocate for responsible rules to make the benefits of crypto available around the world.</p>
                </div>
            </div>
            <div className='about-crypto-container'>
                <div>
                <h1 className='about-crypto-heading-2'>What is Cryptocurrency ?</h1>
                <p className='about-crypto-para'>
                Cryptocurrency is any form of currency that exists digitally or virtually and uses cryptography to secure transactions.Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units. 
                </p>
                <p className='about-crypto-para'>It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.</p>
                </div>
                <img src='https://www.cryptimi.com/wp-content/uploads/2019/05/AdobeStock_225584330-1170x780.jpeg' className='about-image'/>
            </div>


          <h1 className='populaiton-heading'>Us Population and Crypto Users</h1>
          <p className='population-para'>The population of the United States has grown by an average of 2,273,610.88 people annually between 2013 and 2021. In the last year (2021), the US population grew by 2,570,490.00 people. The latest population estimate for the United States is 329,725,481 in 2021.</p>
          <p className='population-para'>The population of the United States has been steadily increasing over the past decade. 
          From 2013 to 2021, the population has grown by approximately 2% and the  Average Population Growth Rate is 0.58% per year.</p>
          <p className='population-para'>While the population growth of usa is 0.58% each year.The crypto adoption rate among usa is 12% each Year. Usa is the one of the largest crypto owners. Usa holds rougly the 13% of crypto owners.</p>
          <p className='population-para'>In the year 2013 price of 1 bitcoin is $13. In 2024 it is more than $65,000 growing at the average annual growth rate of 64%  </p>
          <Population populationData={populationData}/>
          </div>
          </>
        )
    }

} 

export default Home
