import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
