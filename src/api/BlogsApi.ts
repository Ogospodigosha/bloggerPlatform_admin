import axios from "axios";


const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})
const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU2LCJpYXQiOjE2Nzc5MzE5MjYsImV4cCI6MTY3Nzk2NzkyNn0.ikDL4CJopwMMxLWQm_e0OmNlA1K4p2m0I-P_V7TLBiU` }
};

export const BlogsApi = {
    getBlogs(){
        return instance.get<BlogsResponseType>('blogs')
    },
    getBlog(id: string){
        return instance.get(`blogs/${id}`)
    },
    createBlog(name: string, description: string, websiteUrl: string) {
        return instance.post(`/blogger/blogs`, {name, description, websiteUrl}, config)
    },
    editBlog(name: string, description: string, websiteUrl: string, id:string){
        return instance.put(`/blogger/blogs/${id}`, {name, description, websiteUrl}, config)
    },
    deleteBlog(id: string) {
        return instance.delete(`/blogger/blogs/${id}`, config)
    }
}

export type BlogsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: Array<BlogType>
}
export type BlogType = {
    id: string
    name: string
    description: string
    websiteUrl: string
    createdAt: string
    isMembership: boolean
}