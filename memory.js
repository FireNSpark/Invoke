// memory.js
async function loadMemory() {
  const res = await fetch(`https://api.github.com/gists/${CONFIG.GIST_ID}`, {
    headers: { Authorization: `Bearer ${CONFIG.GITHUB_TOKEN}` }
  });
  const data = await res.json();
  return JSON.parse(data.files["memory.json"].content);
}

async function saveMemory(memoryObj) {
  await fetch(`https://api.github.com/gists/${CONFIG.GIST_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONFIG.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      files: {
        "memory.json": {
          content: JSON.stringify(memoryObj, null, 2)
        }
      }
    })
  });
}


