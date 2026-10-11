document.getElementById("go").onclick = async () => {
  const n = document.getElementById("text").value || "5";
  const body = await (await fetch("/api", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({n})})).json();
  document.getElementById("out").textContent = body.ids.join("\n");
};
