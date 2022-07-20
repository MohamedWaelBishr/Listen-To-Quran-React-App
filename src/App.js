import Player from "./components/Player";
import Surahs from "./components/Surahs";
import axios from "axios";
import { useState } from "react";
import { Form, Container, Row, Col, Badge } from "react-bootstrap";
import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { useEffect } from "react";

function App() {
  const Result = [];
  const [audioLists, setAudioList] = useState([]);
  const [selectedReader, setSelectedReader] = useState("abdulbaset_mujawwad");
  const [background, setBackground] = useState(
    "https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  );
  const GetDocument = async (readerEN) => {
    let tmpArr = [];
    let l = [];
    for (let i = 1; i < 10; i++) {
      l.push(`00${i}.mp3`);
    }
    for (let i = 10; i < 100; i++) {
      l.push(`0${i}.mp3`);
    }
    for (let i = 100; i < 115; i++) {
      l.push(`${i}.mp3`);
    }

    let readerAR =
      readerEN == "abdulbaset_mujawwad"
        ? "عبد الباسط عبد الصمد"
        : readerEN == "mahmood_khaleel_al-husaree_iza3a"
        ? "محمود خليل الحصري"
        : "محمد صديق المنشاوي";

    for (let i = 0; i < l.length; i++) {
      tmpArr.push({
        name: Surahs[i].name,
        singer: readerAR || "عبد الباسط عبد الصمد",
        cover:
          "https://media.istockphoto.com/vectors/vector-islam-kuran-ramadan-islamic-arabic-symbolism-vector-id1169856943?k=20&m=1169856943&s=612x612&w=0&h=2nEEXOJpwZwfkaTz7t1qLTPWAJtazmJjkEmYK4K-svs=",
        musicSrc: `https://download.quranicaudio.com/quran/${
          readerEN || "abdulbaset_mujawwad"
        }/${l[i]}`,
      });
    }
    console.log(audioLists);
    setAudioList(tmpArr);
  };

  useEffect(() => {
    // setAudioList([]);
    GetDocument(selectedReader);
  }, [selectedReader]);

  // console.log(Result);

  // const BG = async () => {
  //   await axios
  //     .get("https://source.unsplash.com/1600x900/?quran,islam")
  //     .then((res) => {
  //       setBackground(`${res.request.responseURL}`);
  //       console.log(background);
  //     })
  //     .catch((err) => console.error(err));
  // };

  const HandleSelectChange = (e) => {
    setAudioList([]);
    // console.log(audioLists);
    setSelectedReader(e.target.value);
  };

  // GetDocument();

  return (
    <div
      className="parent"
      style={{
        // backgroundColor: "#2d3436",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://64.media.tumblr.com/fb2c31390368aafebd5f2386d0bc713a/tumblr_o1zhz7mR3B1uuzayro1_1280.gifv")`,
      }}
    >
      <div className="child">
        <Container>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {/* <button onClick={HandleSelectChange}>change</button> */}
            {/* <Row>
              <h1 style={{ marginBottom: "60px" }}>
                <Badge bg="dark" style={{ marginTop: "20px" }}>
                  القرآن الكريم
                </Badge>
              </h1>
            </Row>
            <Row>
              {
                <Form.Select
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  aria-label="Default select example"
                  onChange={(e) => HandleSelectChange(e)}
                >
                  {Result.map((item, index) => {
                    return (
                      <option value={index} key={index}>
                        {item.name} - {item.eName}
                      </option>
                    );
                  })}
                </Form.Select>
              }
            </Row> */}
            {/* <Row style={{ marginTop: "30px" }}>
              <Player
                url={
                  "https://download.quranicaudio.com/quran/abdulbaset_mujawwad/" +
                  `${selected.url}`
                }
              />
            </Row> */}
            <Row>
              <ReactJkMusicPlayer
                audioLists={audioLists}
                showMediaSession
                autoPlay={false}
                remove={false}
                mode={"full"}
                toggleMode={false}
                showThemeSwitch={false}
                clearPriorAudioLists={true}
                extendsContent={
                  <Form.Select
                    style={{
                      margin: "20px",
                      minWidth: "100px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                    aria-label="Default select example"
                    onChange={(e) => HandleSelectChange(e)}
                  >
                    <option
                      value={"abdulbaset_mujawwad"}
                      key={"عبد الباسط عبد الصمد"}
                    >
                      عبد الباسط عبد الصمد
                    </option>
                    <option
                      value={"mahmood_khaleel_al-husaree_iza3a"}
                      key={"محمود خليل الحصري"}
                    >
                      محمود خليل الحصري
                    </option>
                    <option
                      value={"minshawi_mujawwad"}
                      key={"محمد صديق المنشاوي"}
                    >
                      محمد صديق المنشاوي
                    </option>
                  </Form.Select>
                }
              />
            </Row>
            {/* <Row>
              <h4 style={{ marginTop: "20px" }}></h4>
              <Badge bg="dark" style={{ marginTop: "20px" }}>
                اللهم علمنا ما ينفعنا و انفعنا بما علمتنا و زدنا علمًا
              </Badge>
              <Badge bg="dark" style={{ marginTop: "20px" }}>
                تمت البرمجة من قبل مهندس / محمد وائل بشر
              </Badge>
              <Badge bg="dark" style={{ marginTop: "20px" }}>
                نسألكم الدعاء لنا و لوالدينا
              </Badge>
            </Row> */}
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default App;
