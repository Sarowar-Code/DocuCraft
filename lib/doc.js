import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
// node js code, making purcer
const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
    // reading postDirectory
    const fileNames = fs.readdirSync(postsDirectory);

    // reding each item from postDicrectory
    const allDocuments = fileNames.map((fileName) => {
        const id = fileName.replace(".md", "");

        // making path, where i can find the files
        const fullPath = path.join(postsDirectory, fileName);

        // getting file contents
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allDocuments.sort((a, b) => {
        if (a.order > b.order) {
            return -1;
        }

        if (a.order > b.order) {
            return 1;
        }

        return 0;
    });
}

export async function getDocumentContent(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
