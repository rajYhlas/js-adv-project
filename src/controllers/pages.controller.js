class PagesController{

    mainPage(req, res) { 
        console.log('im here')
      res.render('index'); 
    }

    
}


export const pagesController = new PagesController()