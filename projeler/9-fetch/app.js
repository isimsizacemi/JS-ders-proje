// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((response) => response.json())
//       .then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then( data => {
//             console.log(data);
//       })
//       .catch(err => {
//             console.log(err);
//       })


 const getTodos = async () => {
      
     let  response =     await  fetch('https://jsonplaceholder.typicode.com/todos');

     const data = await response.json();

      return data ;
 }

 getTodos().then(response => )


