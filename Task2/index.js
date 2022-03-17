let toggler1 = document.querySelector('.link1')
let toggler2 = document.querySelector('.link2')


toggler1.addEventListener('click', function () {
    toggler1.classList.add('activ')
    toggler2.classList.remove('activ')
    let subscription = document.querySelectorAll('.subscription');
    for (let i = 0; i < subscription.length; i++) {
        subscription[i].innerHTML = '/mo';
    }
})

toggler2.addEventListener('click', function () {
    toggler2.classList.add('activ')
    toggler1.classList.remove('activ')
    let subscription = document.querySelectorAll('.subscription');
    for (let i = 0; i < subscription.length; i++) {
        subscription[i].innerHTML = '/yr';
    }
})