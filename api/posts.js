import GhostContentAPI from "@tryghost/content-api";
//const GhostAdminAPI = require('@tryghost/admin-api');


const api = new GhostContentAPI({
    url: 'http://localhost:2368', 
    key: '5b7b711cf01f2292b8e6a66363', 
    version: "v2"
});

// const adminApi = new GhostAdminAPI({
//     url: 'http://localhost:2368',
//     // Admin API key goes here
//     key: '626ebbcea3cd1c1a21a53b13:f3c066f76f26993126f6bd0c766328130ad2948863a4d2a9e28cfa39d355cf88',
//     version: 'v2'
// });

// export async function createPost(post) {
//     adminApi.posts.add({title: 'Hello world'})
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
// }

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getPage(pageSlug) {
    return await api.pages
        .read({
            slug: pageSlug
        })
        .catch(err => {
            console.error(err);
        })
}