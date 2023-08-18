const accordians = document.querySelectorAll('.accordian')

accordians.forEach(element => {
    const icon = element.querySelector('.icons');
    const answer = element.querySelector('.answer')

    element.addEventListener('click', () => {
        icon.classList.toggle('active')
        answer.classList.toggle('active')
    })

});