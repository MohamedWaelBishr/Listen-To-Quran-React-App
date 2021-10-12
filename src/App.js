import Player from "./components/Player";
import Surahs from "./components/Surahs";
import axios from "axios";
import { useState } from "react";
import { Form, Container, Row, Col, Badge } from "react-bootstrap";
import "./App.css";

function App() {
  const Result = [];
  const [selected, setSelected] = useState({
    name: "al-Fātihah",
    url: "001.mp3",
  });
  const [background, setBackground] = useState(
    "https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  );
  const GetDocument = async () => {
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

    // console.log(l);

    for (let i = 0; i < l.length; i++) {
      Result.push({
        name: Surahs[i].name,
        eName: Surahs[i].transliteration,
        url: l[i],
      });
    }
  };

  GetDocument();
  // console.log(Result);

  const BG = async () => {
    await axios
      .get("https://source.unsplash.com/1600x900/?quran,islam")
      .then((res) => {
        setBackground(`${res.request.responseURL}`);
        console.log(background);
      })
      .catch((err) => console.error(err));
  };

  const HandleSelectChange = (e) => {
    // selected = Result[e.target.value];
    setSelected(Result[e.target.value]);
    console.log(`Selected Is => `, selected);
    BG();
  };

  return (
    <div
      className="parent"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            <Row>
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
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Player
                url={
                  "https://download.quranicaudio.com/quran/abdulbaset_mujawwad/" +
                  `${selected.url}`
                }
              />
            </Row>
            <Row>
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
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default App;
