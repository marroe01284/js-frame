//forEach methods
//length
//sort
//filter
//map
//pop, push, splice, slice, join

const numbers = [1,2,3,4,5,6];
 
const evenNumber = numbers.filter((number) => {
    if ("something"){
        return true;
    } else{
        return false;
    }
})
console.log(evenNumber);

const arrayOfObjects = [{
    title: "Hello",
    content: "some content",
},{
    title: "World last",
    content: "another content",
},{
    title: "Goodbye",
    content: "last content",
}
];
//objects with last in their title
const fileterdObjects = arrayOfObjects.filter((item)=>{
    if (item.title.includes("last")){
        return true;
    } else {
        return false;
    }
});


//create a new array with the titles of objects that has an id 
const taksArray = [
    {
        id: 1,
        title: "Task 1",
    },
    {
        title: "Task 2",
    },
    {
        id: 3,
        title: "Task 3",
    }
]
const titles = arrayOfObjects.filter((item)=>{
    if (item.id){
        return true;
    } else {
        return false;
    }
});
