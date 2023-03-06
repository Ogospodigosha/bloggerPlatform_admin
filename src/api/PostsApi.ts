import axios from "axios"

const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3ODExNDE5NCwiZXhwIjoxNjc4MTUwMTk0fQ.vN0FGhHR5ZHwdkIPidPlUGQekFmYo7FOpM7MKbeiFIo` }
};
const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})
export const PostsApi = {
    getPostsById(id: string) {
        return instance.get<PostsResponseType>(`blogs/${id}/posts`)
    },
    getAllPosts(){
        return instance.get<PostsResponseType>('posts')
    },
    getPost(id: string){
        return instance.get(`posts/${id}`)
    },
    removePost(blogId: string, postId: string) {
        return instance.delete(`/blogger/blogs/${blogId}/posts/${postId}`, config)
    },
    addPost(blogId: string, title: string, shortDescription: string, content: string){
        return instance.post(`/blogger/blogs/${blogId}/posts`, {title, shortDescription, content, blogId}, config)
    }
}
export type ExtendedLikesInfoType = {
    likesCount: number
    dislikesCount: number
    myStatus: string
    newestLikes: Array<any>
}
export type PostType = {
    id: string
    shortDescription: string
    title: string
    blogName: string
    createdAt: string
    blogId: string
    content: string
    extendedLikesInfo: ExtendedLikesInfoType
}

export type PostsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: Array<PostType>
}