// JavaScript for CodePen-Like Web App

function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const previewFrame = document.getElementById("previewFrame");
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    previewDocument.open();
    previewDocument.write(`
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `);
    previewDocument.close();
}

function showPreview() {
    const previewSection = document.getElementById("previewSection");
    previewSection.style.display = "block";
}

function hidePreview() {
    const previewSection = document.getElementById("previewSection");
    previewSection.style.display = "none";
}

function exportCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const combinedCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `;

    const blob = new Blob([combinedCode], { type: "text/html" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code.html";
    a.click();
}