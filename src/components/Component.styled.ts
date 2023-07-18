import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #87a7ff;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCard = styled.div`
  background-color: ${(props) => {
    if (props.status === "active") return "#87A7FF";
    if (props.status === "pending") return "#FFB144";
    if (props.status === "finished") return "#69F46A";
  }};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 250px;
  max-width: 550px;
  min-height: 100px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Status = styled.p`
  font-size: 14px;
  color: #333333;
`;

export const StyledDate = styled.p`
  font-size: 14px;
  color: #333333;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin: 12px 0;
`;

export const ModalDivButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModalHeader = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NavigationComponent = styled.div`
  background-color: #87a7ff;
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  gap: 15px;
`;

export const SearchTask = styled.input`
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 10px;
`;

export const SelectStyled = styled.select`
  border: none;
  border-radius: 3px;
  padding: 10px;
  overflow: hidden;
`;

export const OptionStyled = styled.option`
  background: transparent;
  font-size: 18px;
  padding: 10px;
  border: 0;
  border-radius: 3px;
`;
