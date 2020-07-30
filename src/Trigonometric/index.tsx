import React, { useState, useCallback } from "react";
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

interface Props {
  values: State,
  handleXSlider: (value: number) => void,
  handleYSlider: (value: number) => void,
}

interface ChartData {
  x: number;
  y: number;
}

interface State {
  data: Array<ChartData>;
}

const useTrigonometric = (): Props => {

  const [values, setValues] = useState<State>({
    data: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 90,
        y: 50,
      },
      {
        x: 100,
        y: 100,
      }
    ]
  });

  const handleXSlider = useCallback((value: number) => {
    console.log('handleXSlider');
    // 暫定対応ｗ
    values.data[1].x = value;
    setValues((values) => ({ ...values }));
  }, [values]);

  const handleYSlider = useCallback((value: number) => {
    console.log('handleYSlider');
    setValues((values) => ({ ...values, y: value }));
  }, []);

  return {
    values,
    handleXSlider,
    handleYSlider,
  };
};

const Wrapper = styled.div``;
const Container: React.FC = () => {
  const {
    values,
    handleXSlider,
    // handleYSlider
  } = useTrigonometric();

  console.log(values);
  return (
    <Wrapper>
      <LineChart width={500} height={300} data={values.data}>
        <CartesianGrid />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Tooltip />
        <Legend />
        <Line dataKey="x" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      <Slider onChange={handleXSlider} />
    </Wrapper>
  );
}

export default Container;