import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { css } from "@stitches/react"

import img from "@/public/static/img/background/back.png";
import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$grey1",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "repeat",
  backgroundPosition: "left",
  //backdropFilter: "opacity(10%)",
  //backgroundAttachment: "fixed",
  padding: "12rem 0 8rem 0",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    //backgroundPosition: "right -30% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    //backgroundImage: `none`,
  },
});

export const HeaderContent = styled("div", {
  width: "80%",
  maxWidth: "90%",
  padding: "5px",
  borderRadius: "10px",
  position: "relative",
  backgroundColor: "rgba(239, 195, 234)",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "600px",
  },
  "@mobile": {
    alignSelf: "center",
  }
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  [`& ${Button}`]: {
    marginRight: "$2",
  },
  "@mobile": {},
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  },
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "flex",
  justifyContent: "center",
  maxWidth: "100%",
  //height: '50%',
  //overflow: 'scroll',
  //maxHeight: '500px',
  padding: "2rem 0",
  gap:"5rem",
  flexWrap: "wrap"

});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 11rem",
  "@mobile": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  //height: '70vh',
  //overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '3px',
    height: '3px'
  },
  '&::-webkit-scrollbar-track': {
    background:'#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  },
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "4rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
