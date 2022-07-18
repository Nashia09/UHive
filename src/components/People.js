import React, { useState, useMemo, useRef, useEffect} from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import den from '../assets/dinesh.jpg'
import './People.css'
import { collection, getDocs, query } from 'firebase/firestore';
import {db, storage} from '../firebase'









function People () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()

  const [data, setData] = useState([]);
  const [per, setPer] = useState(null);
  const [file, setFile] = useState();

  const currentIndexRef = useRef(currentIndex)

  useEffect(() => {
     
    const fetchData = async () => {
   
      let list = [];
      try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data()});
            
        });
        setData(list);
        console.log(list)
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData()
   }, [])
   

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < data.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
console.log(data)
  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      
      
      <div className='cardContainer'>
        {data.map(user => (


          <TinderCard
            // ref={childRefs[index]}
            className='swipe'
            key={user.email}
            onSwipe={(dir) => swiped(dir, user.id)}
            onCardLeftScreen={() => outOfFrame(user.email)}
          >
            
            <div style={{ 
        width: 200,
        border: '3 0 solid',
         }}  class="bg-dark-500 rounded-lg relative drop-shadow-2xl hover:bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl">
  
  <div  style={{ 
        width: 240,
        border: '3 0 solid',
        height:100 }} class="flex items-center justify-center rounded  pt-5 flex-col">
    <img alt="user" src={user.img}/>

    
  </div>
    <h3 className="mt-20 text-gray-200">{user.Name}</h3>
    {/* <h3 className="bottom-0 absolute m-10 bg-white ">{user.name}</h3> */}
 
    </div>
           
            
            
          </TinderCard>
  ))}

<div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
      </div>

      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
      </div>
     
    </div>
    </div>

    
  )
}

export default People