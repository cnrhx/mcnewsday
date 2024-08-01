<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CORS Proxy</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        input[type="text"] { width: 300px; }
        button { padding: 10px; }
    </style>
</head>
<body>
    <h1>CORS Proxy</h1>
    <input type="text" id="url" placeholder="Enter URL to fetch">
    <button id="fetchButton">Fetch</button>
    <pre id="result"></pre>

    <script>
        document.getElementById('fetchButton').onclick = function() {
            const url = document.getElementById('url').value;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById('result').textContent = data;
                })
                .catch(error => {
                    document.getElementById('result').textContent = 'Error: ' + error;
                });
        };
    </script>
</body>
</html>
