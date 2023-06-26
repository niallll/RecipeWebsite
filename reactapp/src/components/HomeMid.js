import React from "react";
import {
  Card,
  CardImg,
  Placeholder,
  PlaceholderButton,
  CardBody,
} from "reactstrap";

const HomeMid = () => {
  return (
    <div className="my-3">
      <h3>Popular recipes</h3>{" "}
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
          top
          width="100%"
        />
        <CardBody>
          <Placeholder animation="glow" color="info">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder animation="wave">
            <Placeholder xs={12} />
            <Placeholder xs={7} />
          </Placeholder>
          <PlaceholderButton xs={8} />
        </CardBody>
      </Card>
      <h3>Lastest recipes</h3>{" "}
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
          top
          width="100%"
        />
        <CardBody>
          <Placeholder animation="glow" color="info">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder animation="wave">
            <Placeholder xs={12} />
            <Placeholder xs={7} />
          </Placeholder>
          <PlaceholderButton xs={8} />
        </CardBody>
      </Card>
    </div>
  );
};
export default HomeMid;
