import Express from "express";
import ShapeRoute
    from "./router/bangunDatarRouter"
import GeometryRoute
    from "./router/bangunRuangRouter"
import ComparationRoute
    from "./router/comparationRoute"
import ANBKRoute
    from "./router/anbkRoute"
const app = Express()
/** allow read data from body request
 * that use JSON type
 */
app.use(Express.json())
/** define address for 
 * route out bangunDatar*/
app.use(`/shape`, ShapeRoute)
// use diatas digunakan untuk menambahkan prefix pada url yang mengarah ke route bangun datar
app.use(`/geometry`, GeometryRoute)
/** define running PORT */
const PORT = 8080
app.use(`/comparation`, ComparationRoute)
app.use(`/anbk`, ANBKRoute)
// run a server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})