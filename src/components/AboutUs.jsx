import NavBar from "../partials/Navbar";
import ProductList from "../partials/ProductList";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import members from "../membersdb";
import "./ProductInfo.css";

function AboutUs() {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <div
        className="p-5 text-center bg-image mt-5"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "20rem",
        }}
      ></div>
      <div>
        <h2>About this project</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque saepe
          fugit consequatur, debitis ratione corrupti ut sapiente unde tenetur
          ab iure rerum, illum animi explicabo repellat, ipsa delectus aliquam
          dolorum! Sunt cumque illum voluptatum vel facere sapiente dignissimos,
          provident consequatur quo architecto recusandae ipsum cupiditate
          obcaecati? Quia et optio in aliquam nobis illum doloribus eligendi
          perferendis? Voluptate rerum velit officiis. Itaque quis provident
          laudantium sapiente cumque distinctio quos fugit esse optio at
          voluptates quas amet, asperiores possimus dolores expedita tempora,
          minima voluptatibus rem praesentium nobis? Vel ipsam earum nesciunt
          tempora? Unde eius laborum, repudiandae aperiam, animi sunt neque
          ullam tempora vel fuga sapiente aliquam rem sequi mollitia nisi
          excepturi corporis exercitationem voluptates voluptas suscipit
          voluptatibus pariatur ut quas? Quidem, ullam. Neque nobis velit
          delectus quisquam nisi recusandae dolores, aspernatur assumenda
          architecto repellendus molestias eos error, asperiores doloremque
          quasi, corrupti cum repudiandae nulla voluptatum? Sapiente eos
          quisquam necessitatibus minima corporis est. Natus ad accusantium,
          atque repudiandae dolorum repellendus quibusdam ullam quod consectetur
          blanditiis mollitia magni magnam, possimus voluptatibus animi maiores
          accusamus voluptatum illum at veniam. Qui dicta sunt ad perspiciatis
          beatae! Aut doloribus qui officiis unde ex velit adipisci fugit
          cupiditate, blanditiis atque, rem eius numquam. Placeat, corrupti qui
          ea commodi facere dolor quasi cumque aut, accusantium tempora id
          repudiandae quas! Tenetur necessitatibus labore autem reiciendis
          doloremque qui et accusantium, quo error eos alias asperiores iste
          fugit sit dicta sequi molestiae! Eos est id perferendis illum iure
          ipsa velit natus dolor! Sequi excepturi ea culpa aut voluptatibus
          labore tempora voluptatum necessitatibus? Facilis beatae perspiciatis
          fugiat quo iste. Impedit ullam a, quod assumenda quaerat asperiores
          deleniti, odio rem eveniet doloremque maxime ipsa. Totam illum
          repellendus inventore esse facere delectus reiciendis praesentium
          similique neque deleniti, culpa quas saepe expedita reprehenderit
          quisquam corrupti, debitis doloribus nobis? Illum reiciendis odio
          impedit saepe. Ea, laudantium alias.
        </p>
      </div>
      <div className="my-3">
        <h1>The Dream Team</h1>
        <div className="d-flex m-auto" style={{ height: "50vh" }}>
          {members.map((member) => {
            return (
              <Card
                className="memberImage bg-image hover-zoom hover-shadow m-3"
                style={{ width: "15rem" }}
              >
                <img variant="top" src={member.img} alt={member.name} />
                <div className="mask d-flex justify-content-center align-items-center h-100 mt-5">
                  <Button variant="primary">{member.name}</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Some of the implemented technologies...</h3>
        <div>
          <object
            data="../logos/bootstrap.svg"
            width="80"
            height="80"
            aria-label="bootstrap"
          ></object>
          <object
            data="../logos/express.svg"
            width="100"
            height="100"
            aria-label="express"
          ></object>
          <object
            data="../logos/javascript.svg"
            width="80"
            height="80"
            aria-label="javascript"
          ></object>
          <object
            data="../logos/mysql.svg"
            width="100"
            height="100"
            aria-label="mysql"
          ></object>
          <object
            data="../logos/nodejs.svg"
            width="100"
            height="100"
            aria-label="nodejs"
          ></object>
          <object
            data="../logos/react.svg"
            width="90"
            height="90"
            aria-label="react"
          ></object>
          <object
            data="../logos/sequelize.svg"
            width="100"
            height="100"
            aria-label="sequelize"
          ></object>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
