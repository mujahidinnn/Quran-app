import React, { useEffect, useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import "./MainQuran.css";

const MainQuran = ({ number }) => {
  const [quran, setQuran] = useState([]);
  const [nameAr, setNameAr] = useState({});
  const [nameId, setNameId] = useState({});
  const [type, setType] = useState({});
  const [ayat, setAyat] = useState({});
  const [translate, setTranslate] = useState({});
  const [loading, setLoading] = useState(false);

  const getQuranAPI = () => {
    setLoading(true);

    fetch(`https://quran-endpoint.vercel.app/quran/${number}`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setQuran(result.data.ayahs);
        setNameAr(result.data.asma.ar);
        setNameId(result.data.asma.id);
        setType(result.data.type);
        setAyat(result.data);
        setTranslate(result.data.asma.translation);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getQuranAPI();
  }, [number]);
  return (
    <div className="main-quran-wrapper">
      {loading === true ? (
        <div></div>
      ) : number === 0 || number === 1 || number === 9 ? (
        <div className="wrap-head-surah" id="top">
          <p className="arabic">{nameAr.long}</p>
          <p>{nameId.short}</p>
          <div className="wrap-detail-surah">
            <p>{type.id}</p>
            <p>| {translate.id} |</p>
            <p>{ayat.ayahCount} ayat</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="wrap-head-surah" id="top">
            <p className="arabic">{nameAr.long}</p>
            <p>{nameId.short}</p>
            <div className="wrap-detail-surah">
              <p>{type.id}</p>
              <p>| {translate.id} |</p>
              <p>{ayat.ayahCount} ayat</p>
            </div>
          </div>
          <div>
            <p className="basmallah">
              ۞ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۞
            </p>
          </div>
        </div>
      )}
      {loading === true ? (
        <div className="display-loading">
          <GiBookmarklet className="book" />
          <p className="text-arabic-loading">
            عَنْ عَبْد اللَّهِ بْنَ مَسْعُودٍ رضى الله عنه يَقُولُ قَالَ رَسُولُ
            اللَّهِ -صلى الله عليه وسلم- مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ
            اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا لاَ
            أَقُولُ الم حرْفٌ وَلَكِنْ أَلِفٌ حَرْفٌ وَلاَمٌ حَرْفٌ وَمِيمٌ
            حَرْفٌ
          </p>
          <p>
            “Dari Abdullah bin Mas'ud radhiyallahu 'anhu berkata: “Rasulullah
            shallallahu 'alaihi wasallam bersabda: “Siapa yang membaca satu
            huruf dari Al Quran maka baginya satu kebaikan dengan bacaan
            tersebut, satu kebaikan dilipatkan menjadi 10 kebaikan semisalnya
            dan aku tidak mengatakan الم satu huruf akan tetapi Alif satu huruf,
            Laam satu huruf dan Miim satu huruf.”
          </p>
          <p>
            <small>
              ( HR.Tirmidzi dan dishahihkan di dalam kitab Shahih Al Jami', no.
              6469 )
            </small>
          </p>
        </div>
      ) : (
        quran.map((element, index) => {
          return (
            <div key={index} className="wrap-main-list">
              <p className="number-ayah">{element.number.insurah}</p>
              <div>
                <p className="text-arabic">{element.text.ar}</p>
                <p>{element.translation.id}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MainQuran;
