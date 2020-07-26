import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Slider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

interface ChartData {
  name: string;
  price: number;
}

const data: Array<ChartData> = [
  {
    name: "Tier 100",
    price: 0,
  },
  {
    name: "Tier 100",
    price: -100,
  },
  {
    name: "Tier 200",
    price: 200,
  },
  {
    name: "Tier 300",
    price: 300,
  },
  {
    name: "Tier 400",
    price: 400,
  },
  {
    name: "Tier 500",
    price: 500,
  },
  {
    name: "Tier 600",
    price: 500,
  },
];

const Wrapper = styled.div``;

const onHandlerSlider = (value: number) => {
  console.log(value);
};

export default class Trigonometric extends PureComponent {
  render() {
    return (
      <Wrapper>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        <Slider onChange={onHandlerSlider} />
      </Wrapper>
    );
  }
}
