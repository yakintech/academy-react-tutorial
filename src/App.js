import IfElseSample from "./JsxSample/IfElseSample"
import MapSample from "./JsxSample/MapSample"
import ProductPage from "./JsxSample/ProductPage";
import UserDetail from "./PropsSample/UserDetail"


function App() {

  let cities = ['Baku', 'İstanbul', 'Atina', 'Ankara', 'İzmir', "Paris", "Havana"];



  return <>
    <ProductPage />
    <MapSample />
    <IfElseSample></IfElseSample>
    <UserDetail name='Çağatay' surname='Yıldız' age={18} cities={cities} />
  </>
}



export default App