import { StyleSheet, Font } from "@react-pdf/renderer";
import AllerRegular from "./fonts/Aller/Aller_Rg.ttf";
import AllerBold from "./fonts/Aller/Aller_Bd.ttf";
import AllerItalic from "./fonts/Aller/Aller_It.ttf";
import AllerLight from "./fonts/Aller/Aller_Lt.ttf";

// Fonts Register
Font.register({
  family: "AllerRegular",
  src: AllerRegular,
});
Font.register({
  family: "AllerBold",
  src: AllerBold,
});
Font.register({
  family: "AllerItalic",
  src: AllerItalic,
});
Font.register({
  family: "AllerLight",
  src: AllerLight,
});

// Images

// Colors
const colors = {
  dark: "#232323",
  darkSecondary: "#000000",
  primary: "#FF204E",
  light: "#848487",
};

// Font-sizes
const fonts = {
  display: {
    size: 30,
    family: "AllerBold",
  },
  paragraph: {
    size: 9,
    family: "AllerLight",
    lineHeight: 1.5,
  },
  title: {
    size: 11,
    family: "AllerRegular",
  },
  subtitle: {
    size: 10,
    family: "AllerRegular",
  },
};

// Typography
const topInfoStyle = {
  contactTitle: {
    fontSize: fonts.subtitle.size,
    fontFamily: fonts.subtitle.family,
    color: colors.primary,
    alignSelf: "flex-start",
  },
  contactText: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.subtitle.family,
    color: colors.darkSecondary,
    alignSelf: "flex-start",
  },
  topInfo: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 70,
  },
  topInfoImage: {
    display: "flex",
    height: 100,
    flexGrow: 23,
    maxWidth: "23%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  avatarImage: {
    width: "33mm",
    height: "33mm",
    borderRadius: 1000,
    border: 1,
    borderColor: colors.primary,
    //@ts-ignore
    overflow: "hidden",
  },

  topInfoText: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "77%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    flexGrow: 77,
    marginLeft: 20,
  },
  titleArea: {
    width: "100%",
  },
  contactArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  contactAreaItem: {
    flexGrow: 1,
    height: 20,
    flexDirection: "row",
  },
  contactAreaText: {
    marginLeft: 10,
  },
  websiteIcon: {
    marginTop: 3,
    width: 14,
    height: 12,
  },
  phoneIcon: {
    marginTop: 3,
    width: 10.5,
    height: 13.5,
  },
  mailIcon: {
    marginTop: 3,
    width: 13,
    height: 13,
  },
  bio: {
    marginTop: 30,
    marginBottom: 10,
  },
};

const textStyle = {
  display: {
    fontSize: fonts.display.size,
    fontFamily: fonts.display.family,
    color: colors.dark,
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  displaySubtitle: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.paragraph.family,
    color: colors.light,
    marginTop: 3,
    letterSpacing: 1,
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "AllerRegular",
    alignSelf: "flex-start",
  },
  paragraph: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.paragraph.family,
    lineHeight: fonts.paragraph.lineHeight,
    color: colors.dark,
    alignSelf: "flex-start",
  },
};

const pageStyle = {
  body: {
    paddingHorizontal: 35,
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: "#232323",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: "#FF204E",
  },
};

export const styles = StyleSheet.create({
  ...topInfoStyle,
  ...textStyle,
  ...pageStyle,
  workingExperience: {
    marginTop: 20,
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    backgroundColor: "green",
  },
  education: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    backgroundColor: "green",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "25%",
  },
  educationTitle: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    backgroundColor: "green",
    flexDirection: "column",
    marginTop: 60,
  },
  blockTitle: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  blockDescription: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
  },
  blockDescriptionHalf: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
    width: "50%",
  },
  blockTitleTitle: {
    marginLeft: 10,
    flexGrow: 1,
    paddingBottom: 5,
    borderBottom: 1,
  },
  blockTitleIcon: {
    width: 10,
    paddingBottom: 5,
  },
  blockTitleIconCircle: {
    width: 10,
    marginTop: 5,
  },
  blockTitleDate: {
    marginLeft: 10,
    width: "20%",
  },
  blockTitleDescription: {
    marginLeft: 20,
    maxWidth: "70%",
    alignSelf: "flex-end",
  },
  blockTitleIconHalf: {
    width: 10,
    paddingBottom: 5,
  },
  blockTitleIconCircleHalf: {
    width: 10,
    marginTop: 5,
  },
  blockTitleDateHalf: {
    marginLeft: 10,
  },
  blockTitleDescriptionHalf: {
    marginLeft: 20,
    alignSelf: "flex-end",
  },

  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },

  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
