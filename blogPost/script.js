const gridContainer = document.querySelector("#grid-container");

// create empty container for adding our html
let blogPosts = ``;

function addBlogPost(item, index){
    console.log(item);
    console.log(index);
    blogPostHolder += `
    <article id= "box${item.id}">
    <h3> ${item.title} </h3>
    <p>${item.content}</p>
    </article>`;

}

// run addBlogPost on each item of array
console.log(blogPosts);
blogPosts.forEach(addBlogPost);

