import newMadel from "../user/model/model.news";
import newsDto from "./news-dto/news-dto";

export default function createNews(data: newsDto, userId: string): Promise<Object> {
    const newsInfo = newMadel.create({
        userId,
        title: data.about,
        about: data.about
    })
    return newsInfo
}