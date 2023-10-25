import html2canvas from 'html2canvas';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImgMemes = () => {

    const [imgMeme, setImgMeme] = useState();
    const [textMeme, setTextMeme] = useState('');

    const handleText = (e) => {
        setTextMeme(e.target.value);
    }

    const handleSelect = (e) => {
        setImgMeme(e.target.value)
    }

    const downloadMeme = (e) => {
        html2canvas(document.querySelector('#export'))
            .then(function(canvas) {;
            let img = canvas.toDataURL('memes/jpg');
            let link = document.createElement('a');
            link.download = 'memepropio.jpg';
            link.href = img;
            link.click();
        })
    }

    return (
        <div>
            <Link to='/'><button className='btn btn-dark m-2'>Home</button></Link>
            <Link to='/user'><button className='btn btn-dark m-2'>User</button></Link>
            <Link to='/counter'><button className='btn btn-dark m-2'>Counter</button></Link>
            <Link to='/appi'><button className='btn btn-dark m-2'>Appi</button></Link>
            
            <div className='text-center'>
                <h1 className='my-3 text-center'>Editor de memes</h1>

                <h3>Ingrese el texto del meme</h3>
                <input onChange={handleText} className='form-control w-50 mb-5 m-auto d-block' type='text' placeholder='poné tu frase' name='meme' aria-label='' />

                <h3>Elegí tu imagen favorita</h3>
                <select onChange={handleSelect} className='form-select w-50 mx-auto'>
                    <option hidden>Seleccione una imagen...</option>
                    <option value={1}>Futurama</option>
                    <option value={2}>Bob Esponja</option>
                    <option value={3}>Señora</option>
                    <option value={4}>Calamardo</option>
                </select>

                <figure className='text-center'>
                <p>{textMeme}</p>
                <img src={`./img/memes/${imgMeme}.jpg`} alt='meme' />
                </figure>

                <button onClick={downloadMeme} type='button' className='btn btn-primary'>Decargar</button>
            </div>
        </div>
    )
}

export default ImgMemes