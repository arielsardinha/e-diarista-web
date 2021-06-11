import { styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(5) + " " + "0"};
`;
export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-style: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + "0"};
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: normal;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-style: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
