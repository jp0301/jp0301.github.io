import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Daily = defineDocumentType(() => ({
    name: "Daily",
    contentType: "mdx",
    filePathPattern: `daily/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        category: { type: "string", required: true },
        thumbnailUrl: { type: "string", required: true },
    },
    computedFields: {
      slug: {
        type: "string",
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
      },
    },
}));


export const Gallery = defineDocumentType(() => ({
    name: "Gallery",
    contentType: "mdx",
    filePathPattern: `gallery/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        category: { type: "string", required: true },
        thumbnailUrl: { type: "string", required: true },
    },
    computedFields: {
        slug: {
          type: "string",
          resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
      },
}));



export const Project = defineDocumentType(() => ({
    name: "Project",
    contentType: "mdx",
    filePathPattern: `project/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        category: { type: "string", required: true },
        thumbnailUrl: { type: "string", required: true },
    },
    computedFields: {
        slug: {
          type: "string",
          resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
      },
}));


export const Work = defineDocumentType(() => ({
    name: "Work",
    contentType: "mdx",
    filePathPattern: `work/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        category: { type: "string", required: true },
        thumbnailUrl: { type: "string", required: true },
    },
    computedFields: {
        slug: {
          type: "string",
          resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
      },
}));



export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Daily, Gallery, Work, Project],
})