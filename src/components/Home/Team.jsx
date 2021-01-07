import React from "react";
import Contributor from "./Contributor";
import corey from "../../media/team/corey.svg";
import amir from "../../media/team/amir.svg";
import chris from "../../media/team/chris.svg";
import sean from "../../media/team/sean.svg";

function Team() {
  return (
    <div>
      <p id="meet">Meet The Team</p>
      <div className="team">
        <Contributor
          name="Sean Arseneault"
          image={sean}
          github="https://github.com/itsmesean"
          linkedIn="https://www.linkedin.com/in/itsmesean/"
        />
        <Contributor
          name="Amir Marcel"
          image={amir}
          github="https://github.com/amirmarcel"
          linkedIn="https://linkedin.com/in/amir-marcel"
        />
        <Contributor
          name="Christopher Johnson"
          image={chris}
          github="https://github.com/CJLA"
          linkedIn="https://linkedin.com/in/thecjjohnson"
        />
        <Contributor
          name="Corey Van Splinter"
          image={corey}
          github="https://github.com/cvanspl1"
          linkedIn="https://linkedin.com/in/corey-van-splinter"
        />
      </div>
    </div>
  );
}

export default Team;
