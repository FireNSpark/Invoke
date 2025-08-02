// config.js
let CONFIG = {};

async function loadConfig() {
  const res = await fetch('/env.json');
  const data = await res.json();
  CONFIG = {
    OPENAI_KEY: data.OPENAI_KEY,
    GITHUB_TOKEN: data.GITHUB_TOKEN,
    GIST_ID: data.GIST_ID
  };
}

