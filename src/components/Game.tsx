import { Layer, Rect, Stage, Text } from "react-konva";
import { ColoredRect } from "./ColoredRect";
import { Component, useRef, useState, useEffect } from "react";

interface Furniture {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  id: string;
  rotation: 0;
}

const chair: Furniture = {
  name: "chair",
  id: "chair_01",
  x: 60,
  y: 100,
  width: 100,
  height: 90,
  rotation: 0,
  fill: "beige",
};

const initialFurniture: Furniture[] = [chair];

const getCorner = (pivotX: number, pivotY: number, diffX: number, diffY: number, angle: number) => {
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);
  angle += Math.atan2(diffY, diffX);
  const x = pivotX + distance * Math.cos(angle);
  const y = pivotY + distance * Math.sin(angle);
  return { x, y };
};

export function Game() {
  const [furniture, setFurniture] = useState(initialFurniture);
  const [selectedIds, setSelectedIds] = useState([]);

  const isSelecting = useRef(false);
  const furnitureRefs = useRef(new Map());

  const handleDragEnd = () => {};
  const handleTransformEnd = () => {};

  return (
    <Stage width={600} height={400}>
      <Layer>
        {/* <Text x={16} y={4} fontSize={18} fill="white" text="click uwu" /> */}
        {/* <ColoredRect /> */}

        {furniture.map((f) => (
          <Rect
            key={f.id}
            id={f.id}
            x={f.x}
            y={f.y}
            width={f.width}
            height={f.height}
            fill={f.fill}
            name={f.name}
            rotation={f.rotation}
            draggable
            ref={(node) => {
              if (node) {
                furnitureRefs.current.set(f.id, node);
              }
            }}
            onDragEnd={handleDragEnd}
            onTransformEnd={handleTransformEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
}
