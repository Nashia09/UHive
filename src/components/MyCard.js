import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { db } from '../firebase';
import './MyCard.css'
import { collection, getDocs, query } from 'firebase/firestore';



const MyCard = () => {



  // useEffect(() => {
     
  //   const fetchData = async () => {
   
  //     let list = [];
  //     try{
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       querySnapshot.forEach((doc) => {
  //           list.push({ id: doc.id, ...doc.data()});
  //       });
  //       setPeople(list);
  //       console.log(list)
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData()
  //  }, [])

  // useEffect(() => {
    
  //      db.collection("users")
  //      .onSnapshot((snapshot) => {
  //       setPeople(snapshot.docs.map((doc) => doc.data()))
  //      });
  // }, []);

  const [people, setPeople] = useState([
    {
       name: "steve kkdd",
       url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
    },
    {
       name: "ray kkdd",
       url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
    },
    {
       name: "vid kkdd",
       url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
    
    
      }
    
      ]);
     
  
  return (
    <div className="tinderCards__cardContainer">

      
     {people && people.map((person) => {

    
        <TinderCard
         className="swipe"
         key={person.name}
         preventSwipe={["up", "down"]}>
          
          
        <div
        style={{backgroundImage: `url(${person.url})`}}
        className="card"
        >
          
    <h3>{person.name}</h3>
        </div>

        </TinderCard>
         })}
    </div>
  )
}

export default MyCard