import CONFIG from "../const/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const sortOrder = (a, z) => {
    return new Date(z.frontmatter.published) - new Date(a.frontmatter.published)
}
export default function listCulture(start,end){
    let files  = [];

    function ThroughDirectory(dir,addSlug="") {
      fs.readdirSync(dir).forEach(filename => {
          const absolute = path.join(dir, filename);
          if (fs.statSync(absolute).isDirectory()) return ThroughDirectory(absolute,addSlug+filename+"/");
          else {
            const slug = addSlug+filename.replace(".md", "");
            const markdown = fs.readFileSync(
              absolute,
              "utf-8"
            );
            const { data: frontmatter } = matter(markdown);
            return files.push({
              slug,
              frontmatter,
            });
          }
      });
      return files;
    }
    var sorted=ThroughDirectory(CONFIG.CULTURE_DIR).sort(sortOrder);
    return sorted.slice(start,end);
}