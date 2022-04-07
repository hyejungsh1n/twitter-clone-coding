import React, { useState, useEffect } from "react";
import {dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";


const Home = ({ userObj }) => {
        console.log(userObj)
        const [tweet, setTweet] = useState(""); 
        // 트윗들 가져오기
        const [tweets, setTweets] = useState([]);
        const getTweets = async()=> {
            const dbTweets = await dbService.collection("tweets").get() // 컬렉션 가져옴.
        
            dbTweets.forEach((document) => {
                const tweetObject = {
                    ...document.data(), // spread data
                    id : document.id,
                    creatorId : 1212
                }
                setTweets(prev => [tweetObject, ...prev]); 
                // 값대신에 함수를 전달하면 리액트는 이전값에 접근할 수 있다.
                // 리턴하는 것은 배열 
                // 이 배열에서 첫번째 요소는 가장 최근 document. 그 뒤로는 이전 도큐먼트.
            
            });
        };
        useEffect(() => {
            getTweets()
        }, [])
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(dbService, "tweets"),
            {text: tweet, createdAt: Date.now(),
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
    console.log(tweets)
return (
<div>
    <form onSubmit={onSubmit}>
        <input value={tweet} onChange={onChange}  placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Tweet" />
    </form>
    <div key={tweet.id}>
        {tweets.map(tweet => <div>
            <h4>{tweet.tweet}</h4>
        </div>
            )}
    </div>
</div>
    );
};
export default Home;