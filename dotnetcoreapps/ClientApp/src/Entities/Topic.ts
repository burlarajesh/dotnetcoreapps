export class Topic {
    Id: string;
    Title: string;
    Description: string;
    CreatedDate: Date;
    Category: TopicCategory;
    Tags: string[];
}

export enum TopicCategory {
    Dotnet = 0,
    DotnetCore = 1,
    AspCore = 2,
    TypeScript = 3,
    ReactJs = 4,
    Balzor = 5
}