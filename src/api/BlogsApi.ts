import axios from "axios";


const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})
const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUwNSwiaWF0IjoxNjc3Njc1NDIyLCJleHAiOjE2Nzc3MTE0MjJ9.9oIO6p3UXCIzdv1mFW2M1yMlUUJGYOVQ1J9OSiLjDqY` }
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