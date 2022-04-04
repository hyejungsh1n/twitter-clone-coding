import React, { useState } from "react";
import {dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";


const Home = () => {
        const [tweet, setTweet] = useState(""); 
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(dbService, "tweets"),
            {tweet, createdAt: Date.now(),
            });
            console.log("Document written with ID :", docRef.id); } catch(error) {
                console.log("Error adding document: ", error)
            }
            setTweet("")
    };
    const onChange = (event) => {
        const { 
            target: {value},
    } = event; // event안 target의 value를 달라고 하는 것?
    setTweet(value);
    }
return (
<div>
    <form onSubmit={onSubmit}>
        <input value={tweet} onChange={onChange}  placeholder="What's on your mind" maxLength={120} />
        <input type="submit" value="Tweet" />
    </form>
</div>
    );
};
export default Home;