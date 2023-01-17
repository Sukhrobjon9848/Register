import newsDto from "../news/news-dto/news-dto";
import createNews from "../news/news.service";

export default async function news(data: newsDto, userId: string) {
    const newsInfo = createNews(data, userId)
    return newsInfo
}