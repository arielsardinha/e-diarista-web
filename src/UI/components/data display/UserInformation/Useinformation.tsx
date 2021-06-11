import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UseinformationStyle";
interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
const UseInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};
export default UseInformation;
