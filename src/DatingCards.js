import React, { useState } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
const DatingCards = () => {
    const [people, setPeople] = useState([
    {
            name: "Black Lively", imgUrl: "https://i.pinimg.com/originals/2b/3f/dd/2b3fddc938c3b00cc75dc5b11392a1a6.jpg" },
        {
            name: "Margot Robbie", imgUrl: "https://th.bing.com/th/id/R.755cac74d356b54dbb4f618aa04b7cc4?rik=4mD5on4XKG0jaw&riu=http%3a%2f%2fwww.hawtcelebs.com%2fwp-content%2fuploads%2f2017%2f12%2fmargot-robbie-at-1st-annual-neon-holiday-party-hosted-by-margot-robbie-and-allison-janney-in-new-york-12-12-2017-9.jpg&ehk=RW37PhyabWhALNDlwsyztDglgQ4EEXQMdUcS2vV%2fGV0%3d&risl=&pid=ImgRaw&r=0" },
            {
                name: "Gal Gadot ", imgUrl: "https://th.bing.com/th/id/OIP.-_MAOnpyMyAfMS5mbADpwAHaNK?pid=ImgDet&rs=1" },
                {
                    name: "Jennifer Lawrence", imgUrl: "https://celebmafia.com/wp-content/uploads/2017/09/jennifer-lawrence-mother-premiere-in-london-uk-09-06-2017-24.jpg" }
    ])
    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className="datingCards">
            <div className="datingCards__container">
                {people.map((person) => (
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} >

                        <div style={{
                            backgroundImage: `url(${person.imgUrl})`
                        }} className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </DatingCard>
                ))}
            </div>
        </div>
    )
}
export default DatingCards