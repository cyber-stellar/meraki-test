document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadButton').addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'abc.zip';  // Change this to 'abc.zip' if you're using the zip file workaround
        link.download = 'abc.zip';  // Change this to 'abc.zip' if you're using the zip file workaround
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
