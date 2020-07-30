import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { Slider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { VictoryChart, VictoryLine } from "victory";

interface Props {
  values: State;
  handleXSlider: (value: number) => void;
  handleYSlider: (value: number) => void;
}

interface ChartData {
  x: number;
  y: number;
}

interface State {
  data: Array<ChartData>;
  dataY: Array<ChartData>;
  dataX: Array<ChartData>;
}

const useTrigonometric = (): Props => {
  const [values, setValues] = useState<State>({
    data: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 100,
        y: 100,
      },
    ],
    dataY: [
      {
        x: 100,
        y: 0,
      },
      {
        x: 100,
        y: 100,
      },
    ],
    dataX: [
      {
        x: 0,
        y: 100,
      },
      {
        x: 100,
        y: 100,
      },
    ],
  });

  const handleXSlider = useCallback(
    (value: number) => {
      values.data[1].x = value;
      values.dataY[0].x = value;
      values.dataY[1].x = value;
      values.dataX[1].x = value;
      setValues((values) => ({ ...values }));
    },
    [values]
  );

  const handleYSlider = useCallback(
    (value: number) => {
      values.data[1].y = value;
      values.dataX[0].y = value;
      values.dataX[1].y = value;
      values.dataY[1].y = value;
      setValues((values) => ({ ...values }));
    },
    [values.data, values.dataX, values.dataY]
  );

  return {
    values,
    handleXSlider,
    handleYSlider,
  };
};

const Wrapper = styled.div`
  padding: 5rem;
`;

const InlineBlock = styled.div`
  height: 500px;
  display: inline-block;
`;

const Container: React.FC = () => {
  const { values, handleXSlider, handleYSlider } = useTrigonometric();
  return (
    <Wrapper>
      <InlineBlock>
        <Slider
          min={-100}
          max={100}
          defaultValue={-50}
          onChange={handleYSlider}
          vertical
        />
      </InlineBlock>
      <InlineBlock>
        <VictoryChart height={400} width={400} domain={[-100, 100]}>
          <VictoryLine data={values.data} />
          <VictoryLine data={values.dataY} />
          <VictoryLine data={values.dataX} />
        </VictoryChart>
      </InlineBlock>
      <Slider min={-100} max={100} defaultValue={50} onChange={handleXSlider} />
    </Wrapper>
  );
};

export default Container;
