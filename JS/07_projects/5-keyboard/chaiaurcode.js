const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
        <div class="color">
            <table>
                <thead>
                <tr>
                <th>Key</th>
                <th>code</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>${e.key === " " ? "space": e.key}</td>
                <td>${e.code}</td>
                </tr>
                </tbody>
            </table>
        <div>
    `;
});
