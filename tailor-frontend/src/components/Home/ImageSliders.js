import React from 'react'


export const ImageSliders = () => {
    // const [index , setIndex] = useState(0);

    const images = [
        'images/slider/t.jpg',
        'images/slider/slide_2.png',
        'images/slider/slide_3.jpg',
        'images/slider/slide_4.jpg'

    ]
    // const slideLeft = () =>{
    //     const nextIndex =  index -1;
    //     if(nextIndex < 0){
    //         setIndex(images.length - 1);
    //     }
    //     else{
    //         setIndex(nextIndex);
    //     }
    // }


    // const slideRight = () =>{
    //     setIndex((index + 1)% images.length);
    // }

    return (
        <div className="images-Slider">
           
            {/* <p onClick={slideLeft}>{"<"}</p> */}
            <img src={images[0]} alt="slide_2"></img>
            {/* <p onClick={slideRight}>{">"}</p> */}
           
        </div>
    )
}
