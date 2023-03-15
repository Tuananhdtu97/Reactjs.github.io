// 1. Tại sao phải sử dụng React-DOM 
// Để render được react element ra trình duyệt

// 2. React-DOM là gì 
// Là cầu nối giữa React và DOM

// 3. Tại sao lại tách React-DOM 



// 4.Render UI

//Bai tap
/* 
<div class="post-item">
    <h2 title="Học React tại F8">Học ReactJS</h2>
    <p> Học ReactJS từ cơ bản tới nâng cao </p>
</div>
*/

// DOM
// const render = document.createElement('div')
// render.className = 'post-item'
// const h2 = document.createElement('h2')
// const p = document.createElement('p')

// h2.innerText = "Hoc React"
// h2.title = "Học React tại F8"

// p.innerText = "Học Reactjs từ cơ bản tới nâng cao"

// render.appendChild(h2)
// render.appendChild(p)

// document.body.appendChild(render)
// console.log(render)

//React
const postItem = React.createElement(
    'div',{
        className : 'post-item'
},
React.createElement(
    'h2',
    {
        title: 'Học reactJS tại F8'
    },
    'Học Reactjs'),
React.createElement('p',{},'Học ReactJS từ cơ bản tới nâng cao')
)
// Get root element
const root = document.getElementById('root')
// React-DOM -> Render UI
ReactDOM.render(postItem, root)