import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import React from "react";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import PlusIcon from "./images/jpg/plusIcon.jpg";
const DefaultTemplate = () => (
  <Document>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <TopInfo />
      <View style={styles.workingExperience}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleTitle}>
            <Text style={styles.subtitle}>WORKING EXPERIENCES</Text>
          </View>
        </View>
        <View style={styles.blockDescription}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDate}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescription}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
            <Text style={styles.subtitle}>
              Come Ui / Ux Designer e Front-End Developer mi occupo di capire i
              requisiti, gli obiettivi, i vincoli e interagire con i progetti in
              modo da realizzare siti e applicazioni in linea con il brand del
              cliente, prendendo parte al processo di design, prototipazione e
              sviluppo con tecnologie come PHP e JavaScript.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.blockDescription}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDate}>
            <Text style={styles.subtitle}>Mag 2015 - Ago 2015</Text>
          </View>
          <View style={styles.blockTitleDescription}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
            <Text style={styles.subtitle}>
              Mediaset Premium Ui / Ux Designer, Consulente Run Design In
              collaborazione con il team interno all’azienda, ho preso parte
              alla realizzazione dell’esperienza utente e allo sviluppo della
              User Interface del sito web di Mediaset Premium fino al deploy
              della sua versione finale.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.blockDescription}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDate}>
            <Text style={styles.subtitle}>Mar 2013 - Adesso</Text>
          </View>
          <View style={styles.blockTitleDescription}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
            <Text style={styles.subtitle}>
              In sede presso la DCCI (Direzione Creativa Coordinamento
              Immagine), ho preso parte alla realizzazione di campagne stampa e
              web dei brand Mediaset.{" "}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer} />
    </Page>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <View style={styles.educationTitle}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleTitle}>
            <Text style={styles.subtitle}>EDUCATION</Text>
          </View>
        </View>
      </View>
      <View style={styles.education}>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
