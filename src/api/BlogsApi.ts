import axios from "axios";


const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})
const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE2Nzc4NjQ2ODMsImV4cCI6MTY3NzkwMDY4M30.vkUASfR5bVMIyFzIijDT20s7NraDXU3E0yAcMfBZ8B0` }
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