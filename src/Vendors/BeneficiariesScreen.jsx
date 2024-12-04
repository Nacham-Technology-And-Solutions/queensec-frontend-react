import React from 'react';
import styled from 'styled-components';
import searchIcon from '../Assets/searchicon.png';
import starCIcon from '../Assets/star_C.png';
import starNIcon from '../Assets/star_N.png';
import u1Icon from '../Assets/u1.png';
import LeftIcon from '../Assets/left.png';
import { useNavigate } from 'react-router-dom';
const BeneficiariesListScreen = () => {
    const beneficiaries = [
        { name: 'User one', starred: true },
        { name: 'User two', starred: false },
        { name: 'User three', starred: false },
        { name: 'User four', starred: false },
        { name: 'User five', starred: false },
    ];
    const navigate = useNavigate();
    return (
        <Container>
             <BackButton src={LeftIcon} alt="Back" onClick={() => navigate(-1)} />
            <Header>Beneficiaries</Header>
            <SearchContainerWrapper>
        <SearchContainer>
          <SearchIcon src={searchIcon} alt="Search" />
          <SearchInput placeholder="Search" />
        </SearchContainer>
            </SearchContainerWrapper>
            <Text>
            List of beneficiaries
                </Text>
            <List>
                {beneficiaries.map((beneficiary, index) => (
                    <ListItem key={index}>
                        <Icon src={u1Icon} alt="User Icon" />
                        <Name>{beneficiary.name}</Name>
                        <StarIcon
                            src={beneficiary.starred ? starCIcon : starNIcon}
                            alt={beneficiary.starred ? 'Starred' : 'Unstarred'}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #F7F9FA;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 30px;
  font-family: 'Ubuntu', sans-serif;
`;
const BackButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Header = styled.h1`
    font-family: Ubuntu, sans-serif;
    font-size: 24px;
    color: #6c3ecf;
    margin-top: -27.5px;
    margin-left:50px;
    margin-bottom: 35px;
`;

const SearchContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 18px;
  flex-grow: 1;
  border: 2px #666;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding-left: 10px;
  color: #D9D9D9;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const Text = styled.div`
width: 121px;
height: 20px;
gap: 0px;
opacity: 0px;
color: #414D63;
//styleName: Paragraph/Normal;
font-family: Ubuntu;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.15399999916553497px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
margin-bottom: 15px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 23px;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    margin-right: 12px;
`;

const Name = styled.p`
   
    color: #414D63;
    flex: 1;
    //styleName: Paragraph/Normal;
font-family: Ubuntu;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.15399999916553497px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
width: 62px;
height: 20px;
gap: 0px;
opacity: 0px;


`;

const StarIcon = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
`;

export default BeneficiariesListScreen;
