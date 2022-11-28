// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Daily = defineDocumentType(() => ({
  name: "Daily",
  contentType: "mdx",
  filePathPattern: `daily/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var Gallery = defineDocumentType(() => ({
  name: "Gallery",
  contentType: "mdx",
  filePathPattern: `gallery/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: `project/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var Work = defineDocumentType(() => ({
  name: "Work",
  contentType: "mdx",
  filePathPattern: `work/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Daily, Gallery, Work, Project]
});
export {
  Daily,
  Gallery,
  Project,
  Work,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2AZDFT3B.mjs.map
