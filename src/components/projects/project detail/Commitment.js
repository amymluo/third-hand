import React from "react";
import { Typography } from "@material-ui/core";

function CommitmentSection(props) {
  const { icon, title, description, color } = props;

  return (
    <div className={`planet-commitment__section ${color}`}>
      <img src={icon} alt="section icon" />
      <div className="planet-commitment__section__text">
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </div>
  );
}

export function Commitment(props) {
  return (
    <div className="planet-commitment">
      <div className="planet-commitment__header">
        <Typography variant="h3">Our Happy Planet Commitment</Typography>
        <img
          style={{ verticalAlign: "middle" }}
          src="/assets/icons/global/smiley-face.png"
          width="40px"
          alt="smiley face"
        />
      </div>
      <CommitmentSection
        icon="/assets/icons/project detail/fabric.png"
        title="Keeping Fabric out of the landfill"
        description="The fabrics in this kit are recovered from high-end designers in New York City, and sold as a sustainable alternative to destruction and discard in the landfill."
        color="gray"
      />
      <CommitmentSection
        icon="/assets/icons/project detail/thread.png"
        title="organic cotton thread"
        description="The thread in this kit is made with cotton grown without harmful chemicals, leaving the soil, air and water free from contaminates that cause harm."
        color="white"
      />
      <CommitmentSection
        icon="/assets/icons/project detail/idea.png"
        title="fashion fixes & upcycling inspiration"
        description="You will learn ways that you can use some of the techniques from this project to reinvent, embellish, or repair the items in your closet or local thrift shop."
        color="gray"
      />
      <CommitmentSection
        icon="/assets/icons/project detail/heart.png"
        title="we don’t want disposable clothing"
        description="With high-quality materials and flexible personalization options, we are helping people return to a more personal connection with the clothes that they wear."
        color="white"
      />
    </div>
  );
}
