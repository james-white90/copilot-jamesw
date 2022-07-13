export type StudyData = {
    categories: Category[]
}

export type Category = {
    name: string,
    topics: Topic[]
}

type Topic = {
    name: string,
    entries: Entry[]
}

type Entry = {
    data: string,
    createdBy: string,
    created: string,
    updated: string
}
