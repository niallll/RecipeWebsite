import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import Burger from '../images/Burger.png';

const MyImage = (props) => {
    // const {id} = useParams();

    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(`image`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                data[0].url = Burger;
                setImage(data[props.id]);
            })
            .catch(e => { console.log(e); })
    }, []);

 
    return (
        <main>
            {image != null && <img src={image.url} alt={image.title}/>}


        </main>
    ) 
}
export default MyImage;