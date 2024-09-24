async function fetchUserAndPosts(userId) {
    try {
        // Obtener datos del usuario
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();
        
        // Mostrar los datos del usuario en consola
        console.log("Datos del usuario:", user);

        // Obtener posts del mismo usuario
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();

        // Usar las funciones map, reduce y filter
        mapPostsTitles(posts);  // Usar map para obtener los títulos de los posts
        totalPostCharacters(posts);  // Usar reduce para contar los caracteres totales de todos los posts
        filterShortPosts(posts);  // Usar filter para encontrar posts con menos de 150 caracteres

    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función para obtener los datos del usuario con id 1
fetchUserAndPosts(1);

// Función para usar map()
function mapPostsTitles(posts) {
    const titles = posts.map(post => post.title);
    console.log("Títulos de los posts:", titles);
}

// Función para usar reduce()
function totalPostCharacters(posts) {
    const totalCharacters = posts.reduce((total, post) => total + post.body.length, 0);
    console.log("Total de caracteres en todos los posts:", totalCharacters);
}

// Función para usar filter()
function filterShortPosts(posts) {
    const shortPosts = posts.filter(post => post.body.length < 150);
    console.log("Posts con menos de 150 caracteres:", shortPosts);
}



