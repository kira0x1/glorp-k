import React from "react";
import { Layer, Stage, Text } from "react-konva";
import { ColoredRect } from "./ColoredRect";

export class Game extends React.Component {
  override render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="click uwu" />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}
