function toggleAccordion() {
    const faqItems = document.querySelectorAll('.faq-list__item');
    faqItems.forEach(item => {
        let itemIcon = item.querySelector('.faq-list__item-icon')
        itemIcon.addEventListener('click', function () {
            let itemBody = this.closest('.faq-list__item').querySelector('.faq-list__item-body')
            let faqList = item.parentNode.closest('.faq-list').querySelectorAll('.faq-list__item-body')
            faqList.forEach(element => {
                element.classList.remove('faq-list__item-body_active')
                let itemIcons = element.closest('.faq-list__item').querySelector('.faq-list__item-icon')
                itemIcons.textContent = '+'
            })
            if (!itemBody.classList.contains('faq-list__item-body_active')) {
                itemIcon.textContent = '-'
            } else {
                itemIcon.textContent = '+'
            }
            itemBody.classList.toggle('faq-list__item-body_active')
        })
    })
}

export { toggleAccordion }