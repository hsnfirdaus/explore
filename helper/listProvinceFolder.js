import CONFIG from "../const/config";
import fs from "fs";
import path from "path";

export default function listProvinceFolder(){
    let province  = [];
    function ThroughDirectory(dir) {
      fs.readdirSync(dir).forEach(filename => {
        const absolute = path.join(dir, filename);
        if (fs.statSync(absolute).isDirectory()){
          return province.push(filename);
        }
      });
      return province;
    }
    var sorted=ThroughDirectory(CONFIG.CULTURE_DIR);
    return sorted;
}