let term = '';

term = document.querySelector('#textInput').value;

const searchBtn = document.querySelector('button');


const getdata = async () =>{
    const url = `https://itunes.apple.com/search?term=${term}`;
    const res  = await fetch(url);
    const data = await res.json();

    console.log(data);
}
searchBtn.addEventListener('click',getdata());