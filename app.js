const briefs = {
  rumor: {
    title: "A rumor that “everything is collapsing”",
    scores: "Seriousness: unclear · Relevance: low unless a local fact is named · Urgency: low · Certainty: low",
    body: "The language is total and sourceless. A calm reading treats it as atmosphere until a specific, dated, local fact appears. Next step: write the one fact you would need before the feeling gets to decide.",
  },
  policy: {
    title: "A policy headline with no date and no source",
    scores: "Seriousness: possible · Relevance: unknown · Urgency: unknown · Certainty: low",
    body: "Headlines without a date or a named source often travel faster than the document. Next step: find the original text and the effective date before deciding what it means for you.",
  },
  personal: {
    title: "A story that feels personal but names no local fact",
    scores: "Seriousness: unknown · Relevance: felt high, evidenced low · Urgency: not established · Certainty: low",
    body: "Feeling close to a story is not the same as being in it. Next step: name one local, checkable detail. If none exists, the brief stays at “watch, do not spiral.”",
  },
};

document.getElementById("brief-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const item = briefs[new FormData(event.target).get("item")];
  const node = document.getElementById("brief-out");
  node.hidden = false;
  node.innerHTML = `<h3>${item.title}</h3><p>${item.scores}</p><p>${item.body}</p><p>Sample brief. Not therapy. Not a live news product.</p>`;
});

document.getElementById("request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent("DataTherapy walkthrough request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`,
  );
  const status = document.getElementById("request-status");
  status.hidden = false;
  status.textContent =
    "This page does not send mail. Your mail client will open with a draft.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
