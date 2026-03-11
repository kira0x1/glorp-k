import Konva from "konva";

import { Component, useEffect } from "react";
import { Rect } from "react-konva";
import { ColorTranslator } from "colortranslator";

interface Vector2d {
  x: number;
  y: number;
}

export class ColoredRect extends Component {
  override state = {
    x: 20,
    y: 40,
    color: "green",
    shadowColor: "green",
  };

  handleClick = () => {
    const nextColor = Konva.Util.getRandomColor();
    const hla = ColorTranslator.toHSLObject(nextColor, { decimals: 0 });
    hla.L = 35;

    this.setState({
      color: nextColor,
      shadowColor: ColorTranslator.toHEX(hla),
    });
  };

  override render() {
    return (
      <Rect
        x={this.state.x}
        y={this.state.y}
        width={50}
        height={50}
        fill={this.state.color}
        shadowColor={this.state.shadowColor}
        shadowBlur={6}
        onClick={this.handleClick}
      />
    );
  }
}
