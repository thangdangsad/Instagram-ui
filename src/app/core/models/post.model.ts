export interface Post {
    id?: number;
    title: string;
    content: string;
    authorId: number;
    likes?: number;
    isLiked?: boolean;
}
