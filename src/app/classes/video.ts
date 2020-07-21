// Class to represent the element we use in the application 

export class Video {
    
    id: number;
    link: string;

    constructor(id: number, link:string){
        this.id = id;
        this.link = link;
    }

    public getId(): number {
        return this.id;
    }

    public getLink(): string {
        return this.link;
    }
    
}
