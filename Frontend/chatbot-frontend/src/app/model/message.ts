export class Message {
    content: string;
    own: boolean;
    constructor(content: string, own: boolean) {
        this.content = content;
        this.own = own;
    }
}