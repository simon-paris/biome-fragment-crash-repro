import React from "react";

function fn(member) {
  fn(<>{member.expression}</>);
  (<>{1}</>).toString();
}

