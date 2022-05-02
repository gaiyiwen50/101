
import Header from '../../components/header/Header'
import './reference.css'

const links = [
  {
    url: 'https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-,A%20typical%20passenger%20vehicle%20emits%20about%204.6%20metric%20tons%20of,8%2C887%20grams%20of%20CO2',
    label: 'Greenhouse Gas Emissions from a Typical Passenger Vehicle',
  },
  {
    url: 'https://onetreeplanted.org/blogs/stories/how-much-co2-does-tree-absorb',
    label: 'How Much CO2 Does A Tree Absorb?',
  },
  {
    url: 'https://www.vitalsigns.mtc.ca.gov/greenhouse-gas-emissions',
    label: 'Bay Area Greenhouse Gas Emissions',
  },
  {
    url: 'https://escholarship.org/uc/item/2sn7m83z',
    label: 'A Consumption-Based Greenhouse Gas Inventory of San Francisco Bay Area Neighborhoods, Cities and Counties: Prioritizing Climate Action for Different Locations',
  },
  {
    url: 'https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references',
    label: 'Greenhouse Gases Equivalencies Calculator',
  },
]

export default function Reference() {
  const linkComponents = links.map((link, index) => {
    return (
      <li key={index}>
        <a href={link.url} target='_blank' rel='noopener noreferrer'>{link.label}</a>
      </li>
    )
  })
  return (<>
    <Header />
    <div className='home'>
      <div className='posts reference'>
        <ul className=''>
          {linkComponents}
        </ul>
      </div>  
    </div>
  </>);
}
