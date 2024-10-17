import React from 'react';
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 15px 0;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

const Dot = styled.div`
  font-size: 20px;
  color: ${props => (props.active ? '#000' : '#ccc')};
`;

const Indicator = ({ totalStep, currentStep }) => {
    return (
        <IndicatorWrapper>
            {Array.from({length: totalStep}).map((_, index) => (
                <Dot key={index} active={index === currentStep}>
                    {index === currentStep ? '–' : '•' }
                </Dot>
            ))}
        </IndicatorWrapper>
    );
};

export default Indicator;