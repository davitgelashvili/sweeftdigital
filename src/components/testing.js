import React, {useState, useEffect} from 'react';
import Item from './item';

function Testing(){
    // const value = JSON.parse(localStorage.value);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])
    
    // console.log(items.results)

    localStorage.setItem("baza", JSON.stringify(items.results));

    // const data = JSON.parse(localStorage.value);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {
                    setTimeout(function(){ 
                        JSON.parse(localStorage.baza).map( (item)=>{
                            <div>item.question</div>
                            console.log(item.question)
                        } )
                    }, 2000)
                }
            </div>
        );
    }
}

export default Testing