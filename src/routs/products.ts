import {Router} from "express"
import ProductService from "../services/ProductService";
import { generateFakeProducts } from "../utils/fakeData";
import ProductController from "../controllers/productController";


const fakeProductsData = generateFakeProducts();
const productService = new ProductService(fakeProductsData);
const {updateProduct ,deleteProduct , getProductById } = new ProductController(productService);


let router = Router()

// we prefix and re designd 

//  every method you call will return the same obj this make you make the indit of 3 rout in one line of one rout with diffrent methods 
// router.route("/api/products/:id").patch(updateProduct);
// router.route("/api/products/:id").delete(deleteProduct);
// router.route("/api/product/:id").get(getProductById);
// arrrow function method will not work bec this keyword the address of main obj will delete you can solve it by bynd the methods in constructore bedfore descrete it bind it when we make new obj from the class 
// this.updataProduct = this.updateProduct.bind(this)
// or make the methods like property and functions like arrow 
// like 
// updateProduct = ()=>{...}
// now we save a clean code 
router.route("/:id").get(getProductById).delete(deleteProduct).patch(updateProduct);
router.route("/").get((req ,res )=>res.render("componants/main"));
export default router ; 