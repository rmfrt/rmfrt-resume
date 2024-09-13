import { marked } from "marked";

export const createMarkup = (markdown) => {
    const html = marked(markdown);
    const cleanedHtml = html.replace(/^<p>/, "").replace(/<\/p>/, "");
    return { __html: cleanedHtml };
};
