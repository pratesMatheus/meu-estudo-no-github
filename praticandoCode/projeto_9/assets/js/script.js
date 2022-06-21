const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    catImg.src =  await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

/*ou poderia ser feito dessa forma:

const getCats = async () => {
    
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((error) => console.log(error));

    return data.webpurl;
};

const loadImg = async () => {
    catImg.src =  await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

*/