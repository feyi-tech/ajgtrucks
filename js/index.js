document.addEventListener("DOMContentLoaded", () => {
    const eid = `${(new URLSearchParams(
        (new URL(document.location)).searchParams
    )).get("eid") || 11}`

    localStorage.setItem("eid", eid)
})