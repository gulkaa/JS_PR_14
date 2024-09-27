'use strict';

const tabs = document.querySelectorAll('.tab__btn');
const tabTexts = document.querySelectorAll('.tab__text');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabTexts.forEach(t => {
            t.classList.remove('active');
            t.style.transition = 'opacity 0.5s ease-in-out'; 
        });

        tab.classList.add('active');

        const activeTabText = tabTexts[index];
        activeTabText.classList.add('active');
        activeTabText.style.transition = 'opacity 0.5s ease-in-out'; 
    });
});