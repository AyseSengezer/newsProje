import Vuex from "vuex"
import axios from "axios"

const createStore = ()=> {
    return new Vuex.Store({

        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state, posts){
                state.fetchedPosts = posts
            },
            addPost(state, post){
                state.fetchedPosts.push(post)
            },
            updatePost(state, editedPost){
                // console.log('mutations =>'+editedPost)
                let post_index= state.fetchedPosts.findIndex(post => post.id == editedPost.id)
                // console.log('mutations | post_index =>'+post_index)      
                    state.fetchedPosts[post_index] = editedPost      
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                return axios.get("https://znews-realtime.firebaseio.com/ayarlar.json")
                    .then(response => {
                        // console.log(response)
                        let data = response.data
                        let postArray =  []
                        for(let key in data){
                            postArray.push({ id : key, ...data[key]})
                        }
                        vuexContext.commit("setPosts", postArray)
                    })                   
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post){
                return axios.post("https://znews-realtime.firebaseio.com/ayarlar.json", post)
                 .then(response => {     
                    //  console.log({id : response.data.name}) 

                     vuexContext.commit("addPost", { ...post, id : response.data.name})
                 })                
             },
            updatePost(vuexContext, editedPost){
                return axios.put("https://znews-realtime.firebaseio.com/ayarlar/" + editedPost.id + ".json", editedPost)
                    .then(response => {
                        // console.log('actions =>' + editedPost)
                        vuexContext.commit("updatePost", editedPost)
                    })
                    .catch(e => console.log(e))
            }
        }, 
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }
    })
}
export default createStore