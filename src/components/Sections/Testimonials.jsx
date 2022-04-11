import Title from "../Text/Title"
import CardPerson from '../Cards/CardPerson'

const Testimonials = () => {

  const testimonial = [
    {
      name: "Heloise Y.",
      img: "https://dsm01pap001files.storage.live.com/y4mOn34RscvRde9VZMsmSkQRILSEKbfJHmiCmqP8g69TWY77MIGJJDeYnzPGRNwAeaafnC-8x-uj57oaqqusUedZ_SnZENaLaTieAVPKZAaTkc7bT4bwj6VbNlqIiEC3b8bH4q-6RK19ks-itXv5VsoIhm4mbhWBWonSWYubjzIXSkXNCWtDRbiDsflryz2jSTW?width=432&height=411&cropmode=none",
      desc: "Absolutely wonderful! Best. Product. Ever! I will let my mum know about this, she could really make use of web! We were treated like royalty.",
      gitHub: "https://github.com/sindresorhus",
      link: "https://co.linkedin.com/"
    },
    {
      name: "Julius O.",
      img: "https://dsm01pap001files.storage.live.com/y4mOn34RscvRde9VZMsmSkQRILSEKbfJHmiCmqP8g69TWY77MIGJJDeYnzPGRNwAeaafnC-8x-uj57oaqqusUedZ_SnZENaLaTieAVPKZAaTkc7bT4bwj6VbNlqIiEC3b8bH4q-6RK19ks-itXv5VsoIhm4mbhWBWonSWYubjzIXSkXNCWtDRbiDsflryz2jSTW?width=432&height=411&cropmode=none",
      desc: "It's really wonderful. I am so pleased with this product. Web was worth a fortune to my company. I use web often.",
      gitHub: "https://github.com/sindresorhus",
      link: "https://co.linkedin.com/"
    },
    {
      name: "True customer",
      img: "https://dsm01pap001files.storage.live.com/y4mOn34RscvRde9VZMsmSkQRILSEKbfJHmiCmqP8g69TWY77MIGJJDeYnzPGRNwAeaafnC-8x-uj57oaqqusUedZ_SnZENaLaTieAVPKZAaTkc7bT4bwj6VbNlqIiEC3b8bH4q-6RK19ks-itXv5VsoIhm4mbhWBWonSWYubjzIXSkXNCWtDRbiDsflryz2jSTW?width=432&height=411&cropmode=none",
      desc: "You've saved our business! Web is the most valuable business resource we have EVER purchased",
      gitHub: "https://github.com/sindresorhus",
      link: "https://co.linkedin.com/"
    }
  ]

  return (
    <div className='text-center py-16' id='Testimonials'>
        <Title title="Testimonials" />
        <div className='py-3 grid grid-cols-1 gap-5 md:grid-cols-s lg:grid-cols-3 place-items-center justify-center'>
          <CardPerson testimonial={testimonial}/>
        </div>
    </div>
    
  )
}

export default Testimonials