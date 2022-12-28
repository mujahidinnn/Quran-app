import React, { Fragment, useEffect, useState } from "react";
import "./SidebarQuran.css";

function SidebarQuran ({ setNumber }) {
  const [quran, setQuran] = useState([]);

  const getQuranAPI = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://quran-endpoint.vercel.app/quran", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setQuran(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getQuranAPI();
  }, []);
  return (
    <Fragment>
      {quran.map((element, index) => {
        return (
          <div
            key={index}
            className="wrapper-list-surah"
            onClick={() => {
              setNumber(element.number);
            }}
          >
            <div className="wrap-card-name-surah">
              <p className="nomor-list-surah">{element.number}</p>
              <div className="wrap-name-surah">
                <p className="name-surah-arabic">{element.asma.ar.short}</p>
                <p className="name-surah-indo">{element.asma.id.short}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default SidebarQuran;
