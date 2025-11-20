

const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// grandParent.addEventListener('click', ()=>{
//     alert('grandParent par kaam hua');
// },false)

// grandParent.addEventListener('click', ()=>{
//     alert('grandParent par kaam hua');
// },true)

// parent.addEventListener('click', ()=>{
//     alert('parent par kaam hua');
// },true)

// child.addEventListener('click', ()=>{
//     alert('child par kaam hua');
// },true)

grandParent.addEventListener('click', (e)=>{
    console.log(`GrandParent`)
    console.log(e.target)
})

parent.addEventListener('click', (e)=>{
    console.log(`Parent`)
    console.log(e.target)
})

child.addEventListener('click', (e)=>{
    console.log(`Child`)
    console.log(e.target)
})


