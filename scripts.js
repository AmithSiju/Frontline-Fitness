document.addEventListener('DOMContentLoaded', function() {
    // Select the elements
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');

    // Create Intersection Observer
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to elements when they appear in the viewport
                if (entry.target === aboutLeft) {
                    aboutLeft.classList.add('visible');
                } else if (entry.target === aboutRight) {
                    aboutRight.classList.add('visible');
                }
            }
        });
    }, 
    { threshold: 0.1 }); // Adjust threshold for when animation should trigger
    
    // Observe the elements
    observer.observe(aboutLeft);
    observer.observe(aboutRight);
});
document.addEventListener("DOMContentLoaded", function() {
    const mottoSection = document.querySelector('.motto-section');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class when visible
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe the motto section
    observer.observe(mottoSection);
});
let l = document.getElementById('l');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten');
let eleven = document.getElementById('eleven');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    l.style.marginTop = value * 1 + 'px';
    one.style.left = value * -1.5 + 'px';
    two.style.bottom = value * -1.5 + 'px';
    three.style.bottom = value * 1.5 + 'px';
    four.style.bottom = value * -1.5 + 'px';
    five.style.right = value * -1.5 + 'px';
    six.style.right = value * 1.5 + 'px';
    seven.style.top = value * -1.5 + 'px';
    eight.style.top = value * -1.5 + 'px';
    nine.style.top = value * -1.5 + 'px';
    ten.style.left = value * -1.5 + 'px';
    eleven.style.left = value * -1.5 + 'px';
});

