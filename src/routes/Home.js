import React, { useState } from "react";

const Home = () => {
        const [tweet, setTweet] = useState(""); 
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const { 
            target: {value},
    } = event; // event안 target의 value를 달라고 하는 것?
    setTweet(value);
    }
return (
<div>
    <form>
        <input type={tweet} onChange={onChange}  placeholder="What's on your mind" maxLength={120} />
        <input type="submit" value="Tweet" />
    </form>
</div>
    );
};
export default Home;