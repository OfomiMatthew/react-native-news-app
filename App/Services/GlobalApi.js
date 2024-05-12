import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
  
})

const apiKey='?country=us&apiKey=987a63c01f5d42aabf479c02d492c0a9'
const getTopHeadlines=api.get('/top-headlines'+apiKey)
const getByCategory = (category)=>api.get('/everything?q='+category+"&apiKey=987a63c01f5d42aabf479c02d492c0a9")

// https://newsapi.org/v2/top-headlines?country=us&apiKey=987a63c01f5d42aabf479c02d492c0a9
export default {
    getTopHeadlines,
    getByCategory
}
