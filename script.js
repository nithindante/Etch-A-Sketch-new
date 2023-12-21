let grids = document.querySelector('.grids');
let noOfSquares = 16;
let divs=document.createElement('div');
function createGrids(div1,div2){
    for(let i=0;i<noOfSquares;i++)
    {
        let div1 = document.createElement('div');
        div1.classList.add('div1');
        grids.appendChild(div1)
        for(let j=0;j<noOfSquares;j++)
        {
            let div2 = document.createElement('div');
            div2.classList.add('div2');
            div1.appendChild(div2);
            div2.addEventListener('mouseover',function()
        {
            div2.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        });
        } 
        }
    }
createGrids(divs,divs);
let button = document.querySelector('button');
button.addEventListener('click',function()
{
    noOfSquares = prompt("enter the no of squares");
    let gridNew = document.querySelectorAll('.div1');
    gridArray = Array.from(gridNew);
   for(let div of gridArray)
   {
    grids.removeChild(div);
   }
   createGrids(divs,divs);
});
