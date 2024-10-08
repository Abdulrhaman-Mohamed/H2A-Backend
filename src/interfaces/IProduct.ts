export interface IProduct {
    name: string,
    subName: string | null,
    pros: string[] | null,
    images: object[] | null,
    description: {
        describe: string,
        benefits: string[] | null,
    },
    feature?:string[],
    specifications:object[],
    clinicalSegments: {
        segments?: string[],
        fieldOfApplication?: string[]
    },
    document: IDocument[] | null
}

interface IDocument {
    pdfUrl?: string,
    size?: string,
    title?: string
}