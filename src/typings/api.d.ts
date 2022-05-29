export interface FileItem {
    id: string;
    version: number;
    fileInfoId: string;
    name: string;
    ext: string;
    type: FileTypeEnum;
    contentType: string;
    directory: string;
    createdDate: Date;
    lastModifiedDate: Date;
    createdBy: string;
    share: string;
    description: string;
    size: number;
}

export enum FileTypeEnum {
    File = "FILE",
    Directory = "FOLDER",
}