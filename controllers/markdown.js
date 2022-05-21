import showdown from "showdown";
import showdownKatex from "showdown-katex";

const converter = new showdown.Converter({
  extensions: [
    showdownKatex({
      throwOnError: true
    })
  ]
});

function markdown(text) {
  return converter.makeHtml(text);
}

export default markdown