data = [{
    'img1': 'ayam.jpg',
    'img2':'ayam.jpg',
    'title':'Web E-commerce',
    'subtitle':'Zenit',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolores quis expedita obcaecati! Blanditiis, labore!',
},{
    'img1': 'ayam.jpg',
    'img2':'ayam.jpg',
    'title':'Web E-commerce',
    'subtitle':'Zenit',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolores quis expedita obcaecati! Blanditiis, labore!',
}]

var container = document.querySelector('.container project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+elemet.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>="`+elemet.title+`" alt=""</h1>
        <h2>="${element.subtitle}" alt=""</h2>
        <p>="${element.desc}" alt=""</p>
    </div>
<button class="read-more">Read More</button>    
</div>`

});