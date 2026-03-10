import Konva from "konva";
import { Component } from "react";
import { Rect } from "react-konva";
import { ColorTranslator } from "colortranslator";

export class ColoredRect extends Component {
  override state = {
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
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowColor={this.state.shadowColor}
        shadowBlur={16}
        onClick={this.handleClick}
      />
    );
  }
}
