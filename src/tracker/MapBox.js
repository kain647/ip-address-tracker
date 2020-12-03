import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { SiGooglemaps } from "react-icons/si";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiazZhNGk3biIsImEiOiJja2k3amFyN2swMGsxMnFtYjcyOGoxb2pwIn0.nCSEywIWpPpUl_M_EWF2uw"
});

const Map = ({ center }) => {
  return (
    <MapBox
      center={center}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "300px",
        width: "100%"
      }}
      movingMethod={"flyTo"}
    >
      <Marker coordinates={[center[0], center[1]]}>
        <SiGooglemaps style={{color: "red", fontSize: "26px"}} />
      </Marker>
    </MapBox>
  );
};

export default Map;
