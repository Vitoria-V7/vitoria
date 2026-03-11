const demoId = document.getElementById('demo');
demonId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
for (i=0;i<demoClass.length;i++){
demoClass[i].style.border = '2px dotted orage';

}

const articleTag = document.getElementsByTagName('article');
for (i = 0; i < articleTag.length; i++) {
    articleTag[i].style.border = '3px dashed blue'
}

const demoQuery= document.querySelector('#demo-query');
    demoQuery.style.border = '1px solid red';

    const demoQueryAII = 
    document.querySelectorAll('.demo-query-all')
    demoQueryAII.forEach(caixa => {
        caixa.style.border = '1px solid green';
        caixa.style.backgroundColor = 'MediumSpringGreen';
        caixa.style.color = 'gray';
    
    }); 