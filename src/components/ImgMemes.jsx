import React, { useState } from 'react';
// import html2canvas from 'html2canvas';

const ImgMemes = () => {

    // const [imgMeme, setImgMeme] = useState();
    const [textMeme, setTextMeme] = useState('');

    const handleChange = (e) => {
        setTextMeme(e.target.value);
    }

    return (
        <div className='text-center'>
            <h1 className='my-3 text-center'>Editor de memes</h1>

            <h3>Ingrese el texto del meme</h3>
            <input onChange={handleChange} className='form-control w-50 my-50 m-auto d-block' type='text' placeholder='poné tu frase' name='meme' aria-label='' />

            <figure className='text-center'>
            <p>{textMeme}</p>
            {/* <img /> */}
            </figure>


        </div>
    )
}

export default ImgMemes