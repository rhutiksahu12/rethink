import React from 'react'
import Card from './card'
import MakeAI from '../assets/makeAI.png'
import Upload from '../assets/upload_maintain.png'
import Beinformed from '../assets/beinformed.png'
import Receive from '../assets/receive.png'
import Publish from '../assets/publish.png'


const cards = [{
  title: 'MakeAI-assisted Content Choices',
  icon: MakeAI,
  details: 'Access and Order from an extensive catalogue in any oanguage and on your budgets terms. If unsure, our AI guides you to the best'
},
{
  title: "Upload and Maintian your Brand Identity",
  icon: Upload,
  details: 'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand assets? We can make for you !'
},
{
  title: "Be informed as we create",
  icon: Beinformed,
  details: ' Your details are translated and sent to the AI, Fp, or both (per your  choice) as you relax and receive continuous updates'
},
{
  title: "Receive and Review",
  icon: Receive,
  details: 'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements'
},
{
  title: "Publish and Moniter your content's progress",
  icon: Publish,
  details: 'The finished content is delivered and you can amke corrections that we will effect to satisfy your requirements'
}
]

const cardlist = () => {
  return <main className='container mx-auto w-3/4 justify-center flex flex-wrap  gap-2 '>

    {cards.map((card) => {
      return (<div className='basis-1/4 '>

        <Card title={card.title} icon={card.icon} details={card.details} />
      </div>
      )
    })}

  </main>
}

export default cardlist