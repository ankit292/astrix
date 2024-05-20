import "./App.css";
import React, { useState } from "react";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { IoLocationOutline } from "react-icons/io5";
import { GoStopwatch } from "react-icons/go";

function App() {
  const [classActive, setClassActive] = useState("active");
  const pill = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.name === "events") {
      setClassActive("active");
      console.log("active");
    } else if (e.target.name === "collections") {
      setClassActive("deactive");
      console.log("de active");
    }
  };

  return (
    <>
      {/* <Router>
      <Routes>
        <Route path='/'/>
      </Routes>
    </Router> */}

      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="lft">
                <header className="App-header">
                  <a className="App-link" href="/" target="_blank">
                    <img src="img/logo.png" className="App-logo" alt="logo" />
                  </a>
                </header>
                <div className="banner">
                  <div className="container-fluid">
                    <div className="text">
                      <div className="textTp">
                        <span>Astr</span>
                        <span>ix</span>
                      </div>
                      <div className="textTp">
                        <span>eve</span>
                        <span>nts</span>
                      </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                      >
                        <div className="slider">
                          <Swiper
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            spaceBetween={30}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                                <div className="brnCnt">
                                  <h2>Event Name</h2>
                                  <span className="location d-flex">
                                    <IoLocationOutline className="mr-2" />
                                    Vanue
                                  </span>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                                <div className="brnCnt">
                                  <h2>Event Name</h2>
                                  <span className="location d-flex">
                                    <IoLocationOutline className="mr-2" />
                                    Vanue
                                  </span>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                                <div className="brnCnt">
                                  <h2>Event Name</h2>
                                  <span className="location d-flex">
                                    <IoLocationOutline className="mr-2" />
                                    Vanue
                                  </span>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                                <div className="brnCnt">
                                  <h2>Event Name</h2>
                                  <span className="location d-flex">
                                    <IoLocationOutline className="mr-2" />
                                    Vanue
                                  </span>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex="0"
                      >
                        <div className="slider">
                          <Swiper
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            spaceBetween={30}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="imgs">
                                <img
                                  src="img/bannerImg1.png"
                                  alt="bannerImg1"
                                />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabSec">
                    <ul
                      className={`nav nav-pills ${classActive}`}
                      name="tabPill"
                      id="pills-tab"
                      role="tablist"
                      onClick={pill}
                    >
                      <div className="active-area"></div>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                          name="events"
                        >
                          Events
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                          name="collections"
                        >
                          Collections
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="artical">
                  <article className="main-container__marquee">
                    <div className="main-container__marquee-track">
                      <div className="main-container__marquee-items">
                        <span className="main-container__marquee-item">
                          Дело помощи утопающим — дело рук самих утопающих!
                        </span>
                        <span className="main-container__marquee-item">
                          Шахматы двигают вперёд не только культуру, но и
                          экономику!
                        </span>
                        <span className="main-container__marquee-item">
                          Лёд тронулся, господа присяжные заседатели!
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        className="main-container__marquee-items"
                      >
                        <span className="main-container__marquee-item">
                          Дело помощи утопающим — дело рук самих утопающих!
                        </span>
                        <span className="main-container__marquee-item">
                          Шахматы двигают вперёд не только культуру, но и
                          экономику!
                        </span>
                        <span className="main-container__marquee-item">
                          Лёд тронулся, господа присяжные заседатели!
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="eventSec">
                <strong>
                  explore your first <br /> event
                </strong>
                <div className="eventDetail">
                  <h1>Event Name</h1>
                  <div className="flex loc">
                    <span className="location d-flex">
                      <IoLocationOutline className="mr-2" />
                      Vanue
                    </span>
                    <span className="time d-flex">
                      <GoStopwatch className="mr-2" />
                      04/03/2024
                      <span className="ml-1">@19:00</span>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime optio voluptas amet unde corrupti voluptatibus porro
                    omnis excepturi, dolorem suscipit modi ipsa voluptate
                    facere, nam itaque facilis consequuntur, nisi eos?
                  </p>
                  <div className="artist">
                    <h3>Artist Lineup</h3>
                    <div className="artistSlider">
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination,Autoplay]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src="img/event1.png" alt="event1" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="img/event1.png" alt="event1" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="img/event1.png" alt="event1" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="img/event1.png" alt="event1" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="img/event1.png" alt="event1" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="scanner">
                      <span className="qrCode">
                        <img src="img/barCode.png" alt="barCode" />{" "}
                      </span>
                      <button className="waitList">Join Waitlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
