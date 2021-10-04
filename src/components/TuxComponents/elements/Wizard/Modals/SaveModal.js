import styled from 'styled-components';
import { pop_reg, pop_thick, pop_bolder, modal_grey, tux_blue, primary_text, tux_primart, true_white} from '../../../utilities';

export const SaveModalWrapper = styled.div`
  position: relative;
  top: 85px;
  width: 426px;
  height: 453px;
  border: 1px solid ${modal_grey};
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const SaveHeader = styled.p`
  position: absolute;
  top: 56.94px;
  left: 55px;
  margin: 0;
  padding: 0;
  width: 327px;
  height: 54px;
  font: ${pop_thick};
  font-size: 36px;
  line-height: 54px;
  text-align: center;
`

export const SaveSubHeader = styled.p`
  position: absolute; 
  top: 112px;
  left: 48px;
  margin: 0;
  padding: 0;
  width: 339px;
  height: 80px;
  font: ${pop_reg} ;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`

export const SaveButton = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 242px;
  left: 82px;
  width: 280px;
  height: 50px;
  font: ${pop_bolder};
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: none;
  color: ${primary_text};
  background: ${tux_blue};
  border-radius:5px;
  cursor: pointer;
`
export const DontSaveButton = styled.button`
  position: absolute;
  top: 312px;
  left: 73px;
  width: 280px;
  height: 50px;
  font: ${pop_bolder};
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  border: none;
  background: ${tux_primart};
  color: ${true_white};
  border-radius: 5px;
  cursor: pointer;
`

export const X_Button = styled.button`
  position: absolute;
  right: 22px;
  top: 22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  
`

export const X_Image = styled.img`

`

export const TuxFlower = styled.img`
	width: 132px;
	z-index: 1;
  position: absolute;
  top: -95px;
  left: 150px;
	border-radius: 50%;
  background: ${true_white};
  box-sizing: border-box;
`;


