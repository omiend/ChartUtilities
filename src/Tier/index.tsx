import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { VictoryChart, VictoryLine } from "victory";
import { Slider } from "@material-ui/core";

interface Props {
  values: State;
  onXSlider: (
    event: React.ChangeEvent<{}>,
    value: number | Array<number>
  ) => void;
  onYSlider: (
    event: React.ChangeEvent<{}>,
    value: number | Array<number>
  ) => void;
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

function useTrigonometric(): Props {
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
    (event: React.ChangeEvent<{}>, value: number | Array<number>) => {
      if (typeof value === "number") {
        values.data[1].x = value;
        values.dataY[0].x = value;
        values.dataY[1].x = value;
        values.dataX[1].x = value;
      } else {
        values.data[1].x = value[0];
        values.dataY[0].x = value[0];
        values.dataY[1].x = value[0];
        values.dataX[1].x = value[0];
      }
      setValues((values) => ({ ...values }));
    },
    [values]
  );

  const handleYSlider = useCallback(
    (event: React.ChangeEvent<{}>, value: number | Array<number>) => {
      if (typeof value === "number") {
        values.data[1].y = value;
        values.dataX[0].y = value;
        values.dataX[1].y = value;
        values.dataY[1].y = value;
      } else {
        values.data[1].y = value[0];
        values.dataX[0].y = value[0];
        values.dataX[1].y = value[0];
        values.dataY[1].y = value[0];
      }
      setValues((values) => ({ ...values }));
    },
    [values.data, values.dataX, values.dataY]
  );

  return {
    values,
    onXSlider: handleXSlider,
    onYSlider: handleYSlider,
  };
}

const Wrapper = styled.div`
  padding: 5rem;
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

const VChart = styled.div`
  border: solid 2px #3f51b5;
  margin: 1rem 5rem;
`;

const YSlider = styled.div`
  height: 500px;
`;

const XSlider = styled.div`
  margin: 5rem 5rem 0 8rem;
`;

const Container: React.FC<{}> = () => {
  const { values, onXSlider, onYSlider } = useTrigonometric();
  return (
    <Wrapper>
      <InlineBlock>
        <InlineBlock>
          <YSlider>
            <Slider
              orientation="vertical"
              min={-100}
              max={100}
              defaultValue={100}
              aria-labelledby="discrete-slider-always"
              step={1}
              valueLabelDisplay="on"
              onChange={onYSlider}
            />
          </YSlider>
        </InlineBlock>
        <InlineBlock>
          <VChart>
            <VictoryChart width={500} height={500} domain={[-100, 100]}>
              <VictoryLine data={values.data} />
              <VictoryLine data={values.dataY} />
              <VictoryLine data={values.dataX} />
            </VictoryChart>
          </VChart>
        </InlineBlock>
        <XSlider>
          <Slider
            min={-100}
            max={100}
            defaultValue={100}
            aria-labelledby="discrete-slider-always"
            step={1}
            valueLabelDisplay="on"
            onChange={onXSlider}
          />
        </XSlider>
      </InlineBlock>
    </Wrapper>
  );
};

export default Container;
