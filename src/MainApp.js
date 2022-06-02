/* eslint-disable react/jsx-no-undef */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ComponenteAddMatch from "./ComponenteAddMatch";
import ComponenteListPartidos from "./ComponenteListPartidos";
import Footer from "./Footer";
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
  crossorigin="anonymous"
></script>;

const MainApp = (props) => {
  console.log("props", props);
  const [partidos, setPartidos] = useState([]);
  console.log("partidos", partidos);
  const partidosCollectionRef = collection(db, "partidos");

  // const updateMatch = async (id, organizador) => {
  //   console.log('id', id);
  //   console.log('organizador', organizador);
  //   const matchDoc = doc(db, 'partidos', id)
  //   //const newFields = { organizador: "organizador" }
  //   await updateMatch(matchDoc, {
  //     organizador: 'organizador'
  //   })
  // }
  // const deleteUser = async (id) => {
  //   const matchDoc = doc(db, "partidos", id);
  //   await deleteDoc(matchDoc);
  // };

  useEffect(() => {
    const getPartidos = async () => {
      const data = await getDocs(partidosCollectionRef);
      setPartidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPartidos();
  }, []);
  const [visualizacion, setVisualizacion] = useState({
    componenteAddMatch: true,
    // componenteTodos: true,
    // componenteFiltro: false,
  });

  return (
    <div className="App">
      <div className="row">
        <h1 className="mt-3">SPORT-MENTS</h1>
        <div className="col-1"></div>
        <div className="col-8 mt-2 ">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/20/14/06/sport-6480830_960_720.jpg"
            class="foto w-100"
          />
          <hr></hr>
          <div className="row mt-4">
            <div className="col-12">
              <ComponenteListPartidos />
            </div>
          </div>
          <hr></hr>
          <div className="row mt-4">
            <div className="col-12">
              <ComponenteAddMatch />
            </div>
          </div>
        </div>
        <div className="col-3">
          <img
            src="https://www.antevenio.com/wp-content/uploads/2015/12/redes-facebook-2.jpg"
            className="w-100  "
          />
          <img
            src="https://www.antevenio.com/wp-content/uploads/2015/12/email-amazon.jpg"
            className="w-100"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
