import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/work";
import "./scripts/reviews";
import "./scripts/parallax-budda";
import "./scripts/burger";
