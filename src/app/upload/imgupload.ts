export class Imgupload {
    //category ,name and prdID are used to determine storage location
    category: string;
    prdID:string;
    name: string;
    file: File;

    url: string;
    progress: number;

    constructor(file: File,cate: string, id: string) {
        this.file = file;
        this.category = cate;
        this.prdID = id;
    }
}
