
import './singlePost.css'
import '../../shared.css'
import { useLocation } from 'react-router'

const posts = {
  'electric-vehicles': {
    
    title: 'Guide to Electric Vehicles',
    image: 'https://aaaliving.acg.aaa.com/wp-content/uploads/2021/08/questions-about-electric-car-768x432.jpg',
    imageAlt: 'Electric vehicle charging',
    body: (<>
      <p>What are the advantages of driving electric vehicles? Should I buy an electric vehicle? How do these dang contraptions work? This guide will help answer all these questions and more.</p>
      <br/>
      <p>The key thing to understand is that electric vehicles (EVs) typically lack the internal combustion engine that powers most conventional cars. Instead, EVs contain batteries that power them. Why is this significant to climate change? It's the process of burning gas in a combustion engine that produces the carbon dioxide that you see streaming out of conventional cars' tailpipes — without a combustion engine, an electric car emits no carbon dioxide!</p>
      <br/>
      <p>Because of this, the footprint of an EV is typically <a href='https://www.carboncounter.com/#!/explore' target='_blank' rel='noopener noreferrer'>around one-third</a> of a combustion car. But hold on — doesn't that contradict the statement in the last paragraph? Not quite — we need to consider where EVs get their electricity from. For most places in the US, including the Bay Area, a sizeable portion of the electricity grid is powered by power plants that burn fossil fuels. Thus, when you recharge your EV, you're consuming some amount of dirty electricity. In other words, EVs emit carbon indirectly. As the world shifts away from fossil fuel power plants and invests in renewable energy, the carbon footprint of EVs will approach 0.</p>
      <br/>
      <p>And it's not just that. Since EVs don't produce tailpipe emissions, they help keep the air clean and reduce the <a href='https://www.hsph.harvard.edu/news/press-releases/decreased-vehicle-emissions-linked-with-significant-drop-in-deaths-attributable-to-air-pollution/' target='_blank' rel='noopener noreferrer'>abhorrent rate</a> of premature deaths caused by air pollution.</p>
      <br/>
      <p>If you want to understand EVs simply, just think of them like this: EVs are to combustion cars as smartphones are to rotary phones. It's likely that your grandkids will roll their eyes when you recount how "Back in my day, in the '20s, our cars had tanks full of fossil fuel that the engines burned when we pressed the foot pedals."</p>
      <br/>
      <p>"Yeah, right, grandpa!"</p>
      <br/>
      <br/>
      
      
      <h3>What Kinds of Electric Vehicles Are There?</h3>
      <br/>
      <p>There are three main types of electric vehicles (EVs):</p>
      <br/>
      <ul>
        <li>
          Battery electric vehicles (BEVs), which run purely on electricity and have no internal combustion engine. These EVs are the most climate-friendly, since they burn no fossil fuels, although they tend to cost the most.
        </li>
        <li>
          Plug-in hybrid electric vehicles (PHEVs), which run primarily on electricity and have to be recharged at a power station, but which also contain a combustion engine that can recharge the battery during long drives. Choose one of these vehicles if you want a car that is very green but not too much more expensive than combustion cars.
        </li>
        <li>
          Hybrid electric vehicles (HEVs), which use a battery for extra efficiency but run primarily on fossil fuels and cannot be recharged. These vehicles are the least green EVs, but they do tend to be cheap and convenient to use, since you don't have to worry about finding charging stations.
        </li>
      </ul>
      <br/>
      <p>Dozens of tech companies are racing to develop the best EVs. You've probably heard of Tesla, but other companies such as General Motors, Volkswagen, Ford, and Hyundai are also at the forefront of this innovation craze. Some companies, like Telsa, don't produce hybrids, while others produce all kinds of EVs.</p>
      <br/>
      <br/>
      
      
      <h3>Combatting the Cost</h3>
      <br/>
      <p>If EVs are so much better for the environment than combustion cars, why isn't everyone buying one? The answer for most people lies in the hefty price of the typical EV. While a combustion car might cost something in the area of $25,000, an EV will typically fall in the $40,000+ range, with some manufacturers like Tesla charging upwards of $100,000.</p>
      <br/>
      <p>Certainly, EVs simply aren't an option for many people — at least not yet. But for the people who can afford to pay, the extra cost may turn out not to be such a sting once you factor in the cost savings that EVs provide:</p>
      <br/>
      <ul>
        <li>
          EVs cost much less to recharge than combustion cars cost to refuel. The cost per mile for EVs varies greatly, but on average it's about <a href='https://avt.inl.gov/sites/default/files/pdf/fsev/costs.pdf' target='_blank' rel='noopener noreferrer'>one half</a> of the cost per mile of combustion cars.
        </li>
        <li>
          Choosing an EV lets you avoid dealing with the turbulence of gas prices. We've seen US gas prices skyrocket during the 2022 Russian invasion of Ukraine, and while it is true that electricity prices have also risen, they've increased <a href='https://www.cnbc.com/2022/03/19/cost-of-charging-ev-vs-gas-prices.html' target='_blank' rel='noopener noreferrer'>much less</a> than gas.
        </li>
        <li>
          California, and many other states, provides incentives for EV users. You can view a long list of the incentives <a href='https://afdc.energy.gov/laws/all?state=CA#State%20Incentives' target='_blank' rel='noopener noreferrer'>here</a>. For example, you might be eligible for a <a href='https://ww2.arb.ca.gov/sites/default/files/movingca/cvrp.html' target='_blank' rel='noopener noreferrer'>rebate of up to $7,000</a> towards buying an EV.
        </li>
      </ul>
      <br/>
      <br/>
      
      
      <h3>Further Reading</h3>
      <br/>
      <p>Choosing your next car is a weighty decision, and it's best to research thoroughly whether an EV truly is right for you. Check out these helpful resources to learn more:</p>
      <br/>
      <ul>
        <li>
          <a href='https://www.epa.gov/greenvehicles/electric-vehicle-myths' target='_blank' rel='noopener noreferrer'>Electric Vehicle Myths</a>
        </li>
        <li>
          <a href='https://www.transportation.gov/rural/ev/toolkit/ev-basics/vehicle-types' target='_blank' rel='noopener noreferrer'>Electric Vehicle Types</a>
        </li>
        <li>
          <a href='https://www.nytimes.com/2021/03/02/climate/electric-vehicles-environment.html' target='_blank' rel='noopener noreferrer'>How Green Are Electric Vehicles?</a>
        </li>
      </ul>
    </>),
    
  },
  'carpooling': {
    
    title: 'Guide to Carpooling',
    image: 'https://secureservercdn.net/166.62.112.219/4c5.ccb.myftpupload.com/wp-content/uploads/2017/02/carpool-lane-1.jpg',
    imageAlt: '"Carpool Only" sign',
    body: (<>
      {/* <img src='https://secureservercdn.net/166.62.112.219/4c5.ccb.myftpupload.com/wp-content/uploads/2017/02/carpool-lane-1.jpg' alt='"Carpooling Only" sign'/> */}
      <p>Eager to try carpooling but don't know where to start? Below, we've compiled a list of all the most popular carpooling services to help you find one that is perfect for your needs.</p>
      <br/>
      <ul>
        <li>
          <strong><a href='https://www.uber.com/us/en/ride/uberx-share/' target='_blank' rel='noopener noreferrer'>UberX Share</a>:</strong> a feature in the Uber app that lets you request to share your ride with another customer. When you select this option, Uber's algorithm will try to pair you up with another user whose destination is close to yours. If the match is successful, you can enjoy a 20% discount, and even if the match fails and you instead get a ride all to yourself, you still receive a 5% discount. Yes, that's right — you are guaranteed 5% off just for ticking a box!
        </li>
        <li>
          <strong><a href='https://apps.apple.com/us/app/via-ride/id657777015?xcust=1651708086520jo8x&xs=1' target='_blank' rel='noopener noreferrer'>Via</a>:</strong> a highly rated app that helps you find carpool opportunities quickly. The company describes their service as “a shared shuttle that comes when you want, where you want.” It guarantees quick pickup times and low prices, with most rides costing no more than a typical trip on public transport.
        </li>
        <li>
          <strong><a href='https://apps.apple.com/us/app/scoop-carpool-w-co-workers/id997978145?xs=1&xcust=1651709438715qfa2' target='_blank' rel='noopener noreferrer'>Scoop</a>:</strong> an app specifically for carpooling with your coworkers. It allows you and your colleagues to create a shared weekly commuting schedule. Using this app is a great way to develop deeper connections with your coworkers and have a pleasant start to your day.
        </li>
        <li>
          <strong><a href='http://511.org' target='_blank' rel='noopener noreferrer'>511.org</a>:</strong> a carpool website specific to the Bay Area. It lets you earn rewards, such as $1 per carpool trip completed. It even has bike-sharing services.
        </li>
        <li>
          <strong><a href='https://gocarma.com' target='_blank' rel='noopener noreferrer'>Carma Carpool</a>:</strong> a San Francisco-based company that offers carpooling services among many other services. They claim that their app was the first-ever ridesharing app.
        </li>
        <li>
          <strong><a href='https://www.magicbus.io' target='_blank' rel='noopener noreferrer'>MagicBus</a>:</strong> a vanpooling service that offers in-van WiFi among many other luxuries! It particular, it offers many tools to help companies set up carpooling groups for their employees.
        </li>
      </ul>
      <br/>
      <br/>
      
      <h3>What Are the Advantages of Carpooling?</h3>
      <br/>
      <p>As you might have guessed from the image at the top of this page, carpooling offers many perks. Here are a few of the most significant:</p>
      <br/>
      <ul>
        <li>
          Access to priority lanes. Many freeways have special lanes that only carpoolers can access. Zipping past congestion during rush hour is something to experience! Some carpool riders report having their commute times reduced from 1 hour to 15 minutes.
        </li>
        <li>
          Many toll prices in the Bay Area are <a href='https://511.org/driving/express-lanes/carpools' target='_blank' rel='noopener noreferrer'>either free or reduced</a> for carpoolers.
        </li>
        <li>
          Since the riders split the costs of fuel, you'll end up paying only a fraction of the price. The more people you pack into the car, the less you pay!
        </li>
        <li>
          Carpooling costs much less than a standard drive with a ridesharing company such as Uber and Lyft.
        </li>
        <li>
          Carpooling provides unique opportunities to socialize and make new friends.
        </li>
        <li>
          Parking is often easier. BART, for example, <a href='https://www.bart.gov/guide/parking/carpool' target='_blank' rel='noopener noreferrer'>offers reserved spaces</a> for carpoolers.
        </li>
      </ul>
      <br/>
      <p>Since there are so many advantages, why not give carpooling a try?</p>
    </>),
    
  },
}

export default function SinglePost() {
  
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const post = posts[path]
  
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <h1 className='singlePostTitle'>{post.title}</h1>
        <img className='singlePostImg' src={post.image} alt={post.imageAlt}/>
        <div className='singlePostBody'>
          {post.body}
        </div>
      </div>
    </div>
  )
}
