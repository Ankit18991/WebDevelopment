let paragraph = document.getElementById('para');
let container = document.getElementsByClassName('container');

paragraph.addEventListener('mouseover', function run(){
    console.log('Mouse Inside');
    paragraph.style.scale = '0.95';
    paragraph.style.transition = 'all ease 2s';
    paragraph.style.backgroundColor = 'azure';
    paragraph.style.color = 'darkblue';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.lineHeight = '3.5vh';
    paragraph.style.borderRadius = '12px';
    container[0].style.borderRadius = '20px';
});

paragraph.addEventListener('mouseout', function run(){
     console.log(`Mouse outside`);
     paragraph.style.scale = '1';
     paragraph.style.transition = 'all ease 1s';
     paragraph.style.backgroundColor = 'whitesmoke';
     paragraph.style.color = 'black';
     paragraph.style.fontWeight = 'bold';
     paragraph.style.lineHeight = '3.5vh';
     paragraph.style.borderRadius = '12px';
     container[0].style.borderRadius = '20px';
});

function toggleHide(){
    let para = document.getElementById('para');
    let button = document.getElementById('btn');
    let container  = document.getElementsByClassName('container');

    if(para.style.display != 'none')
    {
        para.style.display = 'none';
        // This is to change the CSS Of the element :)
        // button.style.width = '50%';
        container[0].style.display = 'flex';
        container[0].style.flexDirection = 'column';
        container[0].style.fontFamily = 'Sans-serif';
        container[0].style.fontWeight = 'bold';

        // On click button Styling :-
        button.style.justifySelf = 'flex-end';
        button.style.alignSelf = 'flex-start';
        button.style.boxShadow  = '10px 8px 6px 2px lightgreen';
    }
    
    else{
        // alert("PARAGRAPH OMITTED"); 
        para.style.display  = 'block';
        button.style.width = '30%';
    }
}