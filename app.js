let listA = document.querySelectorAll('a');
let active = 'intro';
let zIndex = 2;

listA.forEach(a => {
    a.addEventListener('click', function(event){
        let valueTab = a.dataset.tab;
        if(valueTab && valueTab != active){
            let tabactive = document.getElementById(valueTab);
            zIndex++;
            tabactive.style.zIndex = zIndex;
            active = valueTab;
            tabactive.classList.add('active');
        }
    })
})