import CONFIG from "../const/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const sortOrder = (a, z) => {
    return new Date(z.frontmatter.published) - new Date(a.frontmatter.published)
}
export default function listCulture(start,end,provSlug,category){
    let files  = [];
    let addProv='/culture/'+(provSlug?provSlug+'/':'');
    function ThroughDirectory(dir,addSlug="") {
      fs.readdirSync(dir).forEach(filename => {
        const absolute = path.join(dir, filename);
        if (fs.statSync(absolute).isDirectory()){
          return ThroughDirectory(absolute,addSlug+filename+"/");
        } else {
          if(path.extname(filename).toLowerCase()!=='.md'){
            return false;
          }
          const slug = addProv+addSlug+filename.replace(".md", "");
          const markdown = fs.readFileSync(
            absolute,
            "utf-8"
          );
          const { data: frontmatter } = matter(markdown);
          if(category){
            if(frontmatter.category==category){
              return files.push({
                slug,
                baseSlug:filename.replace(".md", ""),
                folder:provSlug?provSlug:addSlug,
                frontmatter,
              });
            }
          }else{
            return files.push({
              slug,
              baseSlug:filename.replace(".md", ""),
              folder:provSlug?provSlug:addSlug,
              frontmatter,
            });
          }
        }
      });
      return files;
    }
    var sorted=ThroughDirectory(provSlug?CONFIG.CULTURE_DIR+'/'+provSlug:CONFIG.CULTURE_DIR).sort(sortOrder);
    if(!start){
      return sorted;
    }
    return sorted.slice(start,end);
}