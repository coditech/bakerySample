import app from "./app";
import initializeDatabase from "./controllers";
/* import multer from "multer";
const multerStorage = multer.diskStorage({
  destination: "public/images",
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file;
    const date = Date.now();
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  },
}); */

//const upload = multer({ storage: multerStorage });
//db.test();
const start = async () => {
  const controller = await initializeDatabase();
  app.get("/", (req, res) => res.send("ok"));
  app.get("/products", async (req, res) => {
    const products = await controller.getProductsList();
    res.send({
      success: true,
      products,
    });
  });

  app.listen(8000, () => console.log("server listening on port 8000"));
};
start();
