import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";

const StoreMap: React.FC = () => {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([34.78057, 32.0853]), // המיקום של החנות
        zoom: 15, // רמת הזום
      }),
    });

    // הוספת שכבת נקודות למיקום החנות עם אייקון
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat([34.78057, 32.0853])),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          src: "https://images.rawpixel.com/image_png_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLWxvY2F0aW9uLTAwMl8xLnBuZw.png", // כתובת התמונה של האייקון
          scale: 0.06, // גודל האייקון
        }),
      }),
    });

    map.addLayer(vectorLayer);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: "600px", height: "300px", marginBottom: "20px" }}
      ></div>
    </div>
  );
};

export default StoreMap;
