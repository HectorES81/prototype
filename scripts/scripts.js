document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.hero-container');
    const boxes = container.querySelectorAll('.slider');
    let zIndex = 1;
  
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const container = document.querySelector('.hero-container');
            const boxes = container.querySelectorAll('.slider');

            boxes.forEach(function(box) {
                box.style.zIndex = 0;
            })

            if(i > boxes.length) {
                console.log(i);
                boxes[0].style.zIndex = 1;
            } else {
                if(i != 0 ) {
                    console.log(i);
                    boxes[i - 1].style.zIndex = 1;
                }
            }
        }
    )};

});

function nextSlide() {
    const container = document.querySelector('.hero-container');
    const boxes = container.querySelectorAll('.slider');
    boxes.forEach(function(box) {
        if(box.style.zIndex === "") {
            box.style.zIndex = 0;
        }
    });
    let zIndexOneExist = false;
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].style.zIndex == 1) {
            boxes[i].style.zIndex = 0;
            if(i > 0) {
                
                boxes[i - 1].style.zIndex = 1;
            }             
            zIndexOneExist = true;
        } else {
            if(i === boxes.length - 1 && !zIndexOneExist) {
                boxes[i-1].style.zIndex = 1;
            }
            
        }
    }
    console.log('running...');
}

setInterval(nextSlide, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const family = document.getElementById('family');
    const adults = document.getElementById('adults');
    const relax = document.getElementById('relax');
    const thrill = document.getElementById('thrill');

    const familyPeek = document.getElementById('family-peek');
    const adultsPeek = document.getElementById('adults-peek');
    const relaxPeek = document.getElementById('relax-peek');
    const thrillPeek = document.getElementById('thrill-peek');

    familyPeek.style.zIndex = 1;

    const labels= [family, adults,relax,thrill];
    const peeks = [familyPeek, adultsPeek, relaxPeek, thrillPeek];
      
    for (let i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function(event) {
            event.preventDefault();
            peeks.forEach(function(peek) {
                peek.style.zIndex = 0;
            })
           
            peeks[i].style.zIndex = 1;
        }
    )};
});

document.addEventListener('DOMContentLoaded', function() {
    const people = document.getElementById('know-people');
    const food = document.getElementById('know-food');
    const geo = document.getElementById('know-geo');
    const culture = document.getElementById('know-culture');
    const customs = document.getElementById('know-customs');
    const law = document.getElementById('know-law');

    const peopleText = document.getElementById('people-text');
    const foodText = document.getElementById('food-text');
    const geoText = document.getElementById('geo-text');
    const cultureText = document.getElementById('culture-text');
    const customsText = document.getElementById('customs-text');
    const lawText = document.getElementById('law-text');

    peopleText.style.display = 'block';
    peopleText.style.backgroundColor = "#19CEEB"; //turquoise
    people.style.backgroundColor = "#19CEEB";
    people.style.borderBottomColor = "#19CEEB";
    
    foodText.style.backgroundColor = "#28acea";
    geoText.style.backgroundColor = "#388ee9";
    cultureText.style.backgroundColor = "#3d76e0";
    customsText.style.backgroundColor = "#5abcd8";
    lawText.style.backgroundColor = " 	#74ccf4";



    const labels= [people, food, geo, culture, customs, law];
    const texts = [peopleText, foodText, geoText, cultureText, customsText, lawText];
      
    for (let i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function(event) {
            event.preventDefault();
            texts.forEach(function(text) {
                text.style.display = 'none';
            })
            labels.forEach(function(label) {
                label.style.backgroundColor = 'white';
                label.style.borderBottomColor = '#388ee9';
                label.style.color = 'black';
            })
           
            texts[i].style.display = 'block';
            labels[i].style.backgroundColor = texts[i].style.backgroundColor;
            labels[i].style.borderBottomColor = texts[i].style.backgroundColor;
            if(i==3) {
                texts[i].style.color = 'white';
                labels[i].style.color = 'white';
            }
        }
    )};
});