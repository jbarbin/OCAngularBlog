export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string) {
        this.created_at = new Date();
        this.loveIts = 0;
        this.title = title;
        this.content = content;
    }
}
