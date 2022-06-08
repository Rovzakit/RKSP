import './style.module.css';

function Home() {
    return (
      <html lang="EN">
      <head>
        <title>Книжный склад</title>
        <link rel="shortcut icon" href="https://pngimg.com/uploads/book/book_PNG2114.png" type="image/png"/>
          <link type = "text/css" rel = "stylesheet" href = "style.module.css"/>
        <meta charset="UTF-8"/>
      </head>
      <body>
          <div className="allBlocks">
              <div className="sidePanel">
                  <div className="operationBlock">
                      <input type="text" className="bookName" placeholder="Название"/>
                      <input type="text" className="bookCost" placeholder="Стоимость"/>
                      <input type="text" className="bookQuantity" placeholder="Количество"/>  
                      <div className="buttons">
                          <input type="button" className="search" value="Найти" onclick="onFind()"/>
                          <input type="button" className="add" value="Добавить" onclick="onAdd()"/>
                          <input type="button" className="remove" value="Убрать" onclick="onRemove()"/>
                      </div>
                      <div className="labelInfo"></div>
                  </div>
                  <div className="historyLabel">История</div>
                  <div className="history">
                      {/*<div class="hLabels"></div>*/}
                  </div>
              </div>
              <div className="bookCollection">
                  <div class="bLabels"></div>
              </div>
          </div>
          <script src="script.js"></script>
      </body>
      </html>
      
        
      
      
      
      
      
    );
}

export default Home;