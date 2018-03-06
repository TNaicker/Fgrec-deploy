var child = require('child_process');
for (var i = 1; i < 400; i++) {
 fname = (i + "");
 fname = "0".repeat(3- fname.length) + fname;

 child.execSync(`curl http://fate-go.cirnopedia.org/icons/essence_sample/craft_essence_${fname}.png > images/craft_${fname}.png`)
}
