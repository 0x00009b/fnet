function renderPage(data){
  let tableRows = `<tr>
    <td>Status</td>
    <td>Live</td>
  </tr>`;
  data.forEach((d) => {
    tableRows += `<tr>
    <td>${d.title}</td>
    <td>${d.content}</td>
  </tr>`;
  });

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Status</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/table.min.css">
    <style>
    body{
      font-family: 'Open Sans', sans-serif;
      color: #333;
      background-image: linear-gradient(90deg, #d7fbe8, #62d2a2);
    }
    .container {
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }
    .ui.table{
      border: 0px !important;
      border-radius: 4px;
      -webkit-box-shadow: 0 4px 8px -8px #444;
      box-shadow: 0 4px 8px -8px #444;
      transition: 0.5s box-shadow ease-in-out;
    }
    .ui.table:hover{
      -webkit-box-shadow: 0 10px 8px -8px #AAA;
      box-shadow: 0 10px 8px -8px #AAA;
    }
    .ui.table tr,
    .ui.table td{
      border: none !important;
    }
    .ui.table tr:nth-child(2n){
      background-color: #f4f4f4;
    }

  </style>
  </head>
  <body>
    <div class="container">
      <table class="ui small table">
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  </body>
  </html>`;
}

module.exports = {
  renderPage
};