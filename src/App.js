import IfElseSample from "./JsxSample/IfElseSample"
import MapSample from "./JsxSample/MapSample"
import ProductPage from "./JsxSample/ProductPage";
import UserDetail from "./PropsSample/UserDetail"
import ArraySample from "./StateSample/ArraySample";
import CounterSample from "./StateSample/CounterSample";
import SupplierPage from "./StateSample/SupplierPage";


function App() {

  let cities = ['Baku', 'İstanbul', 'Atina', 'Ankara', 'İzmir', "Paris", "Havana"];



  return <>
    <SupplierPage />
    {/* <ArraySample /> */}
    {/* <CounterSample/> */}
    {/* <ProductPage/> */}
  </>
}



export default App