import ProductService from "../services/ProductService";

class ProductViewController{ 

    productService : ProductService
    constructor(productService: ProductService){
        this.productService =productService;

}
 getProducts(req: any, res: any) {

    const filterQuery = req.query.filter as string;

    if (filterQuery) {
      res.send(this.productService.filterByQuery(filterQuery));
    }
    res.render("products.pug",{products:this.productService.findAll()});


  }

    getProductById(req: any, res: any ) {
      const productId = +req.params.id;
      if (isNaN(productId)) {
        res.status(404).send({ message: "Invalid product ID" });
        return ;

      }
  
    //   need render the return of servece edit on it pleat
      res.send(this.productService.getProductById(productId));

      
    }

}
export default ProductViewController; 
