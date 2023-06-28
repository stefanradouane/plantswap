"use client";

import styles from "./swapflow.module.scss";

import { useEffect, useState } from "react";
import Switcher from "../Switcher/Switcher";
import Title from "../Title/Title";
import Text from "../Text/Text";
import SwapFlowReturn from "../SwapFlowReturn/SwapFlowReturn";
import Uploader from "../Uploader/Uploader";
import useStorage from "../../utils/useStorage";
import Results from "../Results/Results";
import Form from "../Forms/Form";
import Button from "../Button/Button";
import SwapFlowCheck from "../SwapFlowCheck/SwapFlowCheck";
import SwapFlowInfo from "../SwapFlowInfo/SwapFlowInfo";
// import UserForm from "../Forms/UserForm";

// const flowdata = {
//   apidata: {},
//   chosenplant: {},
//   myplant: {},
//   plant: {},
//   plantinfo: {},
//   step: 1,
//   swaptype: "swap",
// };
const flowdata = {
  apidata: {
    query: {
      project: "all",
      images: ["e3948b06d7918d7e8078d2a668d0aad2"],
      organs: ["auto"],
      includeRelatedImages: true,
    },
    language: "nl",
    preferedReferential: "the-plant-list",
    bestMatch: "Lilium bulbiferum L.",
    results: [
      {
        score: 0.67703,
        species: {
          scientificNameWithoutAuthor: "Lilium bulbiferum",
          scientificNameAuthorship: "L.",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: ["Roggelelie", "Tijgerlelie"],
          scientificName: "Lilium bulbiferum L.",
        },
        images: [
          {
            organ: "flower",
            author: "Stéphanie Coulon",
            license: "cc-by-sa",
            date: { timestamp: 1561290800525, string: "23 juni 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
              m: "https://bs.plantnet.org/image/m/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
              s: "https://bs.plantnet.org/image/s/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
            },
            citation: "Stéphanie Coulon / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Марина Марина",
            license: "cc-by-sa",
            date: { timestamp: 1593507484063, string: "30 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/c297675a19d9344fe0f68827bf15aaad97f72009",
              m: "https://bs.plantnet.org/image/m/c297675a19d9344fe0f68827bf15aaad97f72009",
              s: "https://bs.plantnet.org/image/s/c297675a19d9344fe0f68827bf15aaad97f72009",
            },
            citation: "Марина Марина / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Alessandro Cappellini",
            license: "cc-by-sa",
            date: { timestamp: 1592570764279, string: "19 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/65aa25c1aaecc831e5e9654b55409af3da5e7168",
              m: "https://bs.plantnet.org/image/m/65aa25c1aaecc831e5e9654b55409af3da5e7168",
              s: "https://bs.plantnet.org/image/s/65aa25c1aaecc831e5e9654b55409af3da5e7168",
            },
            citation: "Alessandro Cappellini / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Beate Liebold",
            license: "cc-by-sa",
            date: { timestamp: 1640598277380, string: "27 december 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
              m: "https://bs.plantnet.org/image/m/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
              s: "https://bs.plantnet.org/image/s/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
            },
            citation: "Beate Liebold / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Alekos",
            license: "cc-by-sa",
            date: { timestamp: 1592678437361, string: "20 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
              m: "https://bs.plantnet.org/image/m/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
              s: "https://bs.plantnet.org/image/s/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
            },
            citation: "Alekos / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Pistol",
            license: "cc-by-sa",
            date: { timestamp: 1594575728525, string: "12 juli 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
              m: "https://bs.plantnet.org/image/m/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
              s: "https://bs.plantnet.org/image/s/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
            },
            citation: "Pistol / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753079" },
      },
      {
        score: 0.24652,
        species: {
          scientificNameWithoutAuthor: "Lilium pensylvanicum",
          scientificNameAuthorship: "Ker Gawl.",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium pensylvanicum Ker Gawl.",
        },
        images: [
          {
            organ: "flower",
            author: "Nikolai Kurzenko",
            license: "cc-by-sa",
            date: { timestamp: 1645389866743, string: "20 februari 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/3b7828bb4418440551e3d8ebe1419662a21caf42",
              m: "https://bs.plantnet.org/image/m/3b7828bb4418440551e3d8ebe1419662a21caf42",
              s: "https://bs.plantnet.org/image/s/3b7828bb4418440551e3d8ebe1419662a21caf42",
            },
            citation: "Nikolai Kurzenko / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Nikolai Kurzenko",
            license: "cc-by-sa",
            date: { timestamp: 1645389866743, string: "20 februari 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/2630bf19998195b6fa23da85e774d089a2729f06",
              m: "https://bs.plantnet.org/image/m/2630bf19998195b6fa23da85e774d089a2729f06",
              s: "https://bs.plantnet.org/image/s/2630bf19998195b6fa23da85e774d089a2729f06",
            },
            citation: "Nikolai Kurzenko / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Nikolai Kurzenko",
            license: "cc-by-sa",
            date: { timestamp: 1645389866743, string: "20 februari 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/6fe1a5dd21b25cf285e3d5722882e9c8b7e89ecb",
              m: "https://bs.plantnet.org/image/m/6fe1a5dd21b25cf285e3d5722882e9c8b7e89ecb",
              s: "https://bs.plantnet.org/image/s/6fe1a5dd21b25cf285e3d5722882e9c8b7e89ecb",
            },
            citation: "Nikolai Kurzenko / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753465" },
      },
      {
        score: 0.01205,
        species: {
          scientificNameWithoutAuthor: "Hemerocallis lilioasphodelus",
          scientificNameAuthorship: "L.",
          genus: {
            scientificNameWithoutAuthor: "Hemerocallis",
            scientificNameAuthorship: "",
            scientificName: "Hemerocallis",
          },
          family: {
            scientificNameWithoutAuthor: "Xanthorrhoeaceae",
            scientificNameAuthorship: "",
            scientificName: "Xanthorrhoeaceae",
          },
          commonNames: ["Gele daglelie"],
          scientificName: "Hemerocallis lilioasphodelus L.",
        },
        images: [
          {
            organ: "flower",
            author: "Beyer Niklas",
            license: "cc-by-sa",
            date: { timestamp: 1591173218267, string: "3 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/fd8157a93187b634142e18fde35161fd58f9b743",
              m: "https://bs.plantnet.org/image/m/fd8157a93187b634142e18fde35161fd58f9b743",
              s: "https://bs.plantnet.org/image/s/fd8157a93187b634142e18fde35161fd58f9b743",
            },
            citation: "Beyer Niklas / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Нина Петровна Бухтоярова",
            license: "cc-by-sa",
            date: { timestamp: 1624814473995, string: "27 juni 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/7557a291fbcf3801e15193693c897030f3520fea",
              m: "https://bs.plantnet.org/image/m/7557a291fbcf3801e15193693c897030f3520fea",
              s: "https://bs.plantnet.org/image/s/7557a291fbcf3801e15193693c897030f3520fea",
            },
            citation: "Нина Петровна Бухтоярова / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Chiara Chiara",
            license: "cc-by-sa",
            date: { timestamp: 1590053378972, string: "21 mei 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/9fbbe4b3304200f75946a3b9bc1b11829c584b4e",
              m: "https://bs.plantnet.org/image/m/9fbbe4b3304200f75946a3b9bc1b11829c584b4e",
              s: "https://bs.plantnet.org/image/s/9fbbe4b3304200f75946a3b9bc1b11829c584b4e",
            },
            citation: "Chiara Chiara / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Bella Isabelle T",
            license: "cc-by-sa",
            date: { timestamp: 1585909704042, string: "3 april 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/31899e143246980ed3d25b064d9d334654d861c9",
              m: "https://bs.plantnet.org/image/m/31899e143246980ed3d25b064d9d334654d861c9",
              s: "https://bs.plantnet.org/image/s/31899e143246980ed3d25b064d9d334654d861c9",
            },
            citation: "Bella Isabelle T / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Jahlil Heckstall",
            license: "cc-by-sa",
            date: { timestamp: 1602447601051, string: "11 oktober 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/2b7ef5b4c45ec733b80e08fcad28d6e8fc73671c",
              m: "https://bs.plantnet.org/image/m/2b7ef5b4c45ec733b80e08fcad28d6e8fc73671c",
              s: "https://bs.plantnet.org/image/s/2b7ef5b4c45ec733b80e08fcad28d6e8fc73671c",
            },
            citation: "Jahlil Heckstall / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Rossu .",
            license: "cc-by-sa",
            date: { timestamp: 1593007972206, string: "24 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/57aa93cee738045e8334040004352974ceb6e3a9",
              m: "https://bs.plantnet.org/image/m/57aa93cee738045e8334040004352974ceb6e3a9",
              s: "https://bs.plantnet.org/image/s/57aa93cee738045e8334040004352974ceb6e3a9",
            },
            citation: "Rossu . / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2781103" },
      },
      {
        score: 0.00948,
        species: {
          scientificNameWithoutAuthor: "Lilium canadense",
          scientificNameAuthorship: "L.",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium canadense L.",
        },
        images: [
          {
            organ: "flower",
            author: "Aline Baron",
            license: "cc-by-sa",
            date: { timestamp: 1626093426066, string: "12 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/e2837d85265983ef4f5c27ec296930d7b3ec207c",
              m: "https://bs.plantnet.org/image/m/e2837d85265983ef4f5c27ec296930d7b3ec207c",
              s: "https://bs.plantnet.org/image/s/e2837d85265983ef4f5c27ec296930d7b3ec207c",
            },
            citation: "Aline Baron / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Lyse Roberge",
            license: "cc-by-sa",
            date: { timestamp: 1658252659345, string: "19 juli 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/77a8851d63750d29068a9ce35873b7f5af1f5864",
              m: "https://bs.plantnet.org/image/m/77a8851d63750d29068a9ce35873b7f5af1f5864",
              s: "https://bs.plantnet.org/image/s/77a8851d63750d29068a9ce35873b7f5af1f5864",
            },
            citation: "Lyse Roberge / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "barichko",
            license: "cc-by-sa",
            date: { timestamp: 1594163356912, string: "7 juli 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/9b4211a0a935e0268927c23a3be14bd66239a0c7",
              m: "https://bs.plantnet.org/image/m/9b4211a0a935e0268927c23a3be14bd66239a0c7",
              s: "https://bs.plantnet.org/image/s/9b4211a0a935e0268927c23a3be14bd66239a0c7",
            },
            citation: "barichko / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Sophie Bourgeois",
            license: "cc-by-sa",
            date: { timestamp: 1563566000395, string: "19 juli 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/634bb0d489161648cbd0a746904e8fb457dbb7b4",
              m: "https://bs.plantnet.org/image/m/634bb0d489161648cbd0a746904e8fb457dbb7b4",
              s: "https://bs.plantnet.org/image/s/634bb0d489161648cbd0a746904e8fb457dbb7b4",
            },
            citation: "Sophie Bourgeois / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753239" },
      },
      {
        score: 0.00826,
        species: {
          scientificNameWithoutAuthor: "Lilium parvum",
          scientificNameAuthorship: "Kellogg",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium parvum Kellogg",
        },
        images: [
          {
            organ: "flower",
            author: "L P",
            license: "cc-by-sa",
            date: { timestamp: 1654713158337, string: "8 juni 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/ecdc5eb466c2b7e6ab88bbcdc5fd86ed9bed3241",
              m: "https://bs.plantnet.org/image/m/ecdc5eb466c2b7e6ab88bbcdc5fd86ed9bed3241",
              s: "https://bs.plantnet.org/image/s/ecdc5eb466c2b7e6ab88bbcdc5fd86ed9bed3241",
            },
            citation: "L P / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "wu iching",
            license: "cc-by-sa",
            date: { timestamp: 1560960484726, string: "19 juni 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/5bd199fbd1d90d6fce831af3649dc125a7d25fd2",
              m: "https://bs.plantnet.org/image/m/5bd199fbd1d90d6fce831af3649dc125a7d25fd2",
              s: "https://bs.plantnet.org/image/s/5bd199fbd1d90d6fce831af3649dc125a7d25fd2",
            },
            citation: "wu iching / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "John John Hardham",
            license: "cc-by-sa",
            date: { timestamp: 1565760959136, string: "14 augustus 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/56abc10a68aa9a4745ddb27dc7da9e4bce81216d",
              m: "https://bs.plantnet.org/image/m/56abc10a68aa9a4745ddb27dc7da9e4bce81216d",
              s: "https://bs.plantnet.org/image/s/56abc10a68aa9a4745ddb27dc7da9e4bce81216d",
            },
            citation: "John John Hardham / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Elise Noillac",
            license: "cc-by-sa",
            date: { timestamp: 1655399465086, string: "16 juni 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/28da66b4a505fa078624e8b6d12311770a2fb591",
              m: "https://bs.plantnet.org/image/m/28da66b4a505fa078624e8b6d12311770a2fb591",
              s: "https://bs.plantnet.org/image/s/28da66b4a505fa078624e8b6d12311770a2fb591",
            },
            citation: "Elise Noillac / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "EOL − Miguel Vieira",
            license: "cc-by",
            date: { timestamp: 1482268091284, string: "20 december 2016" },
            url: {
              o: "https://bs.plantnet.org/image/o/61c8478f28404c0fbbdc447782175a0d1da74005",
              m: "https://bs.plantnet.org/image/m/61c8478f28404c0fbbdc447782175a0d1da74005",
              s: "https://bs.plantnet.org/image/s/61c8478f28404c0fbbdc447782175a0d1da74005",
            },
            citation: "EOL − Miguel Vieira / Pl@ntNet, cc-by",
          },
          {
            organ: "flower",
            author: "Rachel Walker",
            license: "cc-by-sa",
            date: { timestamp: 1595243701650, string: "20 juli 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/bfa80ea725dfb9b4c45be83096e34b96594be148",
              m: "https://bs.plantnet.org/image/m/bfa80ea725dfb9b4c45be83096e34b96594be148",
              s: "https://bs.plantnet.org/image/s/bfa80ea725dfb9b4c45be83096e34b96594be148",
            },
            citation: "Rachel Walker / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753310" },
      },
      {
        score: 0.00805,
        species: {
          scientificNameWithoutAuthor: "Hemerocallis fulva",
          scientificNameAuthorship: "(L.) L.",
          genus: {
            scientificNameWithoutAuthor: "Hemerocallis",
            scientificNameAuthorship: "",
            scientificName: "Hemerocallis",
          },
          family: {
            scientificNameWithoutAuthor: "Xanthorrhoeaceae",
            scientificNameAuthorship: "",
            scientificName: "Xanthorrhoeaceae",
          },
          commonNames: ["Bruine daglelie", "Oranje Daglelie", "Daglelie"],
          scientificName: "Hemerocallis fulva (L.) L.",
        },
        images: [
          {
            organ: "flower",
            author: "Bottalico Clorinda",
            license: "cc-by-sa",
            date: { timestamp: 1591686723985, string: "9 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/2a819694482cae4709222189ad8c38c450b2e2ec",
              m: "https://bs.plantnet.org/image/m/2a819694482cae4709222189ad8c38c450b2e2ec",
              s: "https://bs.plantnet.org/image/s/2a819694482cae4709222189ad8c38c450b2e2ec",
            },
            citation: "Bottalico Clorinda / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Irmgard Groß",
            license: "cc-by-sa",
            date: { timestamp: 1656225227286, string: "26 juni 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/fc12195e3e5c4a46eab8718316898996e4f51dec",
              m: "https://bs.plantnet.org/image/m/fc12195e3e5c4a46eab8718316898996e4f51dec",
              s: "https://bs.plantnet.org/image/s/fc12195e3e5c4a46eab8718316898996e4f51dec",
            },
            citation: "Irmgard Groß / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "luke",
            license: "cc-by-sa",
            date: { timestamp: 1498747149000, string: "29 juni 2017" },
            url: {
              o: "https://bs.plantnet.org/image/o/fa5674f4794e4cac4f3e0f9f072473f71e38474d",
              m: "https://bs.plantnet.org/image/m/fa5674f4794e4cac4f3e0f9f072473f71e38474d",
              s: "https://bs.plantnet.org/image/s/fa5674f4794e4cac4f3e0f9f072473f71e38474d",
            },
            citation: "luke / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "fodydw",
            license: "cc-by-sa",
            date: { timestamp: 1621781774669, string: "23 mei 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/afb967ac4c2df9288af449b6d6cc2b3219fa546e",
              m: "https://bs.plantnet.org/image/m/afb967ac4c2df9288af449b6d6cc2b3219fa546e",
              s: "https://bs.plantnet.org/image/s/afb967ac4c2df9288af449b6d6cc2b3219fa546e",
            },
            citation: "fodydw / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "di donato giulio",
            license: "cc-by-sa",
            date: { timestamp: 1596121395311, string: "30 juli 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/d922683ab3ff1bd8d9aa7e430cf38886f125bfa5",
              m: "https://bs.plantnet.org/image/m/d922683ab3ff1bd8d9aa7e430cf38886f125bfa5",
              s: "https://bs.plantnet.org/image/s/d922683ab3ff1bd8d9aa7e430cf38886f125bfa5",
            },
            citation: "di donato giulio / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Tela Botanica − _",
            license: "cc-by-sa",
            date: { timestamp: 1496678262000, string: "5 juni 2017" },
            url: {
              o: "https://bs.plantnet.org/image/o/75a21a8a83f49943730ad67633b47b78de57c581",
              m: "https://bs.plantnet.org/image/m/75a21a8a83f49943730ad67633b47b78de57c581",
              s: "https://bs.plantnet.org/image/s/75a21a8a83f49943730ad67633b47b78de57c581",
            },
            citation: "Tela Botanica − _ / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2781074" },
      },
      {
        score: 0.00402,
        species: {
          scientificNameWithoutAuthor: "Hemerocallis minor",
          scientificNameAuthorship: "Mill.",
          genus: {
            scientificNameWithoutAuthor: "Hemerocallis",
            scientificNameAuthorship: "",
            scientificName: "Hemerocallis",
          },
          family: {
            scientificNameWithoutAuthor: "Xanthorrhoeaceae",
            scientificNameAuthorship: "",
            scientificName: "Xanthorrhoeaceae",
          },
          commonNames: ["Dwergdaglelie"],
          scientificName: "Hemerocallis minor Mill.",
        },
        images: [
          {
            organ: "flower",
            author: "Guerrero Quitorán Juan Manuel Jesús",
            license: "cc-by-sa",
            date: { timestamp: 1558898435110, string: "26 mei 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/0f396c62ad646cf45ea5800b159e3bf90ec077b1",
              m: "https://bs.plantnet.org/image/m/0f396c62ad646cf45ea5800b159e3bf90ec077b1",
              s: "https://bs.plantnet.org/image/s/0f396c62ad646cf45ea5800b159e3bf90ec077b1",
            },
            citation:
              "Guerrero Quitorán Juan Manuel Jesús / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Mohamed Elshaer",
            license: "cc-by-sa",
            date: { timestamp: 1658340382644, string: "20 juli 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/3cf50f76879bdc178baff0335f03f350644ef703",
              m: "https://bs.plantnet.org/image/m/3cf50f76879bdc178baff0335f03f350644ef703",
              s: "https://bs.plantnet.org/image/s/3cf50f76879bdc178baff0335f03f350644ef703",
            },
            citation: "Mohamed Elshaer / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Elise Deniel",
            license: "cc-by-sa",
            date: { timestamp: 1562447307420, string: "6 juli 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/bac421e34e5c95e5af2071731e37cd073c374f2f",
              m: "https://bs.plantnet.org/image/m/bac421e34e5c95e5af2071731e37cd073c374f2f",
              s: "https://bs.plantnet.org/image/s/bac421e34e5c95e5af2071731e37cd073c374f2f",
            },
            citation: "Elise Deniel / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Marilyne Renou-Garcias",
            license: "cc-by-sa",
            date: { timestamp: 1591204297084, string: "3 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/635c239ea48fdb97a6da4f93ef3ffd1c24b37044",
              m: "https://bs.plantnet.org/image/m/635c239ea48fdb97a6da4f93ef3ffd1c24b37044",
              s: "https://bs.plantnet.org/image/s/635c239ea48fdb97a6da4f93ef3ffd1c24b37044",
            },
            citation: "Marilyne Renou-Garcias / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Chris",
            license: "cc-by-sa",
            date: { timestamp: 1591226678939, string: "3 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/55c9b522c340c5e643203d80705999c4255c6904",
              m: "https://bs.plantnet.org/image/m/55c9b522c340c5e643203d80705999c4255c6904",
              s: "https://bs.plantnet.org/image/s/55c9b522c340c5e643203d80705999c4255c6904",
            },
            citation: "Chris / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Solenn Jacquez",
            license: "cc-by-sa",
            date: { timestamp: 1625260411825, string: "2 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/1b839596f5f74a6fb05b0c5f0fb5c9a74671e68f",
              m: "https://bs.plantnet.org/image/m/1b839596f5f74a6fb05b0c5f0fb5c9a74671e68f",
              s: "https://bs.plantnet.org/image/s/1b839596f5f74a6fb05b0c5f0fb5c9a74671e68f",
            },
            citation: "Solenn Jacquez / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2781064" },
      },
      {
        score: 0.00284,
        species: {
          scientificNameWithoutAuthor: "Lilium philadelphicum",
          scientificNameAuthorship: "L.",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium philadelphicum L.",
        },
        images: [
          {
            organ: "flower",
            author: "Bernard Horaist",
            license: "cc-by-sa",
            date: { timestamp: 1624289500059, string: "21 juni 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/682ffa570b03f3a17272341c058fdd9875bf6864",
              m: "https://bs.plantnet.org/image/m/682ffa570b03f3a17272341c058fdd9875bf6864",
              s: "https://bs.plantnet.org/image/s/682ffa570b03f3a17272341c058fdd9875bf6864",
            },
            citation: "Bernard Horaist / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "leaf",
            author: "Francesca Valotto",
            license: "cc-by-sa",
            date: { timestamp: 1656145664283, string: "25 juni 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/ced283d3f63672b91dfcfa59627ad077c4c9d9b0",
              m: "https://bs.plantnet.org/image/m/ced283d3f63672b91dfcfa59627ad077c4c9d9b0",
              s: "https://bs.plantnet.org/image/s/ced283d3f63672b91dfcfa59627ad077c4c9d9b0",
            },
            citation: "Francesca Valotto / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Eddie Veenstra",
            license: "cc-by-sa",
            date: { timestamp: 1592867271394, string: "22 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/ee6889c16fc11c95b0ba856d4285c24c033e7b2b",
              m: "https://bs.plantnet.org/image/m/ee6889c16fc11c95b0ba856d4285c24c033e7b2b",
              s: "https://bs.plantnet.org/image/s/ee6889c16fc11c95b0ba856d4285c24c033e7b2b",
            },
            citation: "Eddie Veenstra / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Eric Larsen",
            license: "cc-by-sa",
            date: { timestamp: 1657386074288, string: "9 juli 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/76744b238a09ae8b7d3944305248ed50b48fc6aa",
              m: "https://bs.plantnet.org/image/m/76744b238a09ae8b7d3944305248ed50b48fc6aa",
              s: "https://bs.plantnet.org/image/s/76744b238a09ae8b7d3944305248ed50b48fc6aa",
            },
            citation: "Eric Larsen / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "nilsarf erdna",
            license: "cc-by-sa",
            date: { timestamp: 1623618439816, string: "13 juni 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/3ed7c0533cbf9b02fce885a35886e4d85c5f5d52",
              m: "https://bs.plantnet.org/image/m/3ed7c0533cbf9b02fce885a35886e4d85c5f5d52",
              s: "https://bs.plantnet.org/image/s/3ed7c0533cbf9b02fce885a35886e4d85c5f5d52",
            },
            citation: "nilsarf erdna / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Alex W",
            license: "cc-by-sa",
            date: { timestamp: 1648586449277, string: "29 maart 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/a20246bf1407ace732300ffe067d872dc1c87e94",
              m: "https://bs.plantnet.org/image/m/a20246bf1407ace732300ffe067d872dc1c87e94",
              s: "https://bs.plantnet.org/image/s/a20246bf1407ace732300ffe067d872dc1c87e94",
            },
            citation: "Alex W / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753218" },
      },
      {
        score: 0.00252,
        species: {
          scientificNameWithoutAuthor: "Alstroemeria patagonica",
          scientificNameAuthorship: "Phil.",
          genus: {
            scientificNameWithoutAuthor: "Alstroemeria",
            scientificNameAuthorship: "",
            scientificName: "Alstroemeria",
          },
          family: {
            scientificNameWithoutAuthor: "Alstroemeriaceae",
            scientificNameAuthorship: "",
            scientificName: "Alstroemeriaceae",
          },
          commonNames: [],
          scientificName: "Alstroemeria patagonica Phil.",
        },
        images: [
          {
            organ: "flower",
            author: "Juan Francisco Iaconis",
            license: "cc-by-sa",
            date: { timestamp: 1611490256632, string: "24 januari 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/d27f1ae152a6574abaa1cbfd7ca997ebdae7189a",
              m: "https://bs.plantnet.org/image/m/d27f1ae152a6574abaa1cbfd7ca997ebdae7189a",
              s: "https://bs.plantnet.org/image/s/d27f1ae152a6574abaa1cbfd7ca997ebdae7189a",
            },
            citation: "Juan Francisco Iaconis / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753690" },
      },
      {
        score: 0.00191,
        species: {
          scientificNameWithoutAuthor: "Hemerocallis middendorffii",
          scientificNameAuthorship: "Trautv. & C.A.Mey.",
          genus: {
            scientificNameWithoutAuthor: "Hemerocallis",
            scientificNameAuthorship: "",
            scientificName: "Hemerocallis",
          },
          family: {
            scientificNameWithoutAuthor: "Xanthorrhoeaceae",
            scientificNameAuthorship: "",
            scientificName: "Xanthorrhoeaceae",
          },
          commonNames: [],
          scientificName: "Hemerocallis middendorffii Trautv. & C.A.Mey.",
        },
        images: [
          {
            organ: "flower",
            author: "damian dudek",
            license: "cc-by-sa",
            date: { timestamp: 1659783827571, string: "6 augustus 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/314a18125a35f595ed74431bbe48f33b57d22169",
              m: "https://bs.plantnet.org/image/m/314a18125a35f595ed74431bbe48f33b57d22169",
              s: "https://bs.plantnet.org/image/s/314a18125a35f595ed74431bbe48f33b57d22169",
            },
            citation: "damian dudek / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2781057" },
      },
      {
        score: 0.00159,
        species: {
          scientificNameWithoutAuthor: "Campanula elatines",
          scientificNameAuthorship: "L.",
          genus: {
            scientificNameWithoutAuthor: "Campanula",
            scientificNameAuthorship: "",
            scientificName: "Campanula",
          },
          family: {
            scientificNameWithoutAuthor: "Campanulaceae",
            scientificNameAuthorship: "",
            scientificName: "Campanulaceae",
          },
          commonNames: [],
          scientificName: "Campanula elatines L.",
        },
        images: [
          {
            organ: "flower",
            author: "Brett Bissell someguy",
            license: "cc-by-sa",
            date: { timestamp: 1565503194636, string: "11 augustus 2019" },
            url: {
              o: "https://bs.plantnet.org/image/o/f589796bd25394fcba6627a00940f3a5613bc133",
              m: "https://bs.plantnet.org/image/m/f589796bd25394fcba6627a00940f3a5613bc133",
              s: "https://bs.plantnet.org/image/s/f589796bd25394fcba6627a00940f3a5613bc133",
            },
            citation: "Brett Bissell someguy / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "JennyR",
            license: "cc-by-sa",
            date: { timestamp: 1629374578948, string: "19 augustus 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/f416f9e7b8a3325ad058ed10e25073f603979f56",
              m: "https://bs.plantnet.org/image/m/f416f9e7b8a3325ad058ed10e25073f603979f56",
              s: "https://bs.plantnet.org/image/s/f416f9e7b8a3325ad058ed10e25073f603979f56",
            },
            citation: "JennyR / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Hervé Bornat",
            license: "cc-by-sa",
            date: { timestamp: 1655654700784, string: "19 juni 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/de39165651fd51640a5a62aa51257387f1ec43b5",
              m: "https://bs.plantnet.org/image/m/de39165651fd51640a5a62aa51257387f1ec43b5",
              s: "https://bs.plantnet.org/image/s/de39165651fd51640a5a62aa51257387f1ec43b5",
            },
            citation: "Hervé Bornat / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "slipperwoman",
            license: "cc-by-sa",
            date: { timestamp: 1627229094671, string: "25 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/18ef7f049544a13521181583586c17c5d798fc56",
              m: "https://bs.plantnet.org/image/m/18ef7f049544a13521181583586c17c5d798fc56",
              s: "https://bs.plantnet.org/image/s/18ef7f049544a13521181583586c17c5d798fc56",
            },
            citation: "slipperwoman / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "5410361" },
      },
      {
        score: 0.00129,
        species: {
          scientificNameWithoutAuthor: "Lilium maritimum",
          scientificNameAuthorship: "Kellogg",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium maritimum Kellogg",
        },
        images: [
          {
            organ: "flower",
            author: "Keith Solademi",
            license: "cc-by-sa",
            date: { timestamp: 1593004813795, string: "24 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/8fdb0b0fec0498275d28cdf7fe546888ebb16021",
              m: "https://bs.plantnet.org/image/m/8fdb0b0fec0498275d28cdf7fe546888ebb16021",
              s: "https://bs.plantnet.org/image/s/8fdb0b0fec0498275d28cdf7fe546888ebb16021",
            },
            citation: "Keith Solademi / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "kya lyly",
            license: "cc-by-sa",
            date: { timestamp: 1592771782465, string: "21 juni 2020" },
            url: {
              o: "https://bs.plantnet.org/image/o/22f68a07c939cd7a9d0eb90c938779347d1c3fbe",
              m: "https://bs.plantnet.org/image/m/22f68a07c939cd7a9d0eb90c938779347d1c3fbe",
              s: "https://bs.plantnet.org/image/s/22f68a07c939cd7a9d0eb90c938779347d1c3fbe",
            },
            citation: "kya lyly / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753044" },
      },
      {
        score: 0.00113,
        species: {
          scientificNameWithoutAuthor: "Lilium nanum",
          scientificNameAuthorship: "Klotzsch",
          genus: {
            scientificNameWithoutAuthor: "Lilium",
            scientificNameAuthorship: "",
            scientificName: "Lilium",
          },
          family: {
            scientificNameWithoutAuthor: "Liliaceae",
            scientificNameAuthorship: "",
            scientificName: "Liliaceae",
          },
          commonNames: [],
          scientificName: "Lilium nanum Klotzsch",
        },
        images: [
          {
            organ: "flower",
            author: "ben vc",
            license: "cc-by-sa",
            date: { timestamp: 1660862833761, string: "18 augustus 2022" },
            url: {
              o: "https://bs.plantnet.org/image/o/ac1767c0a6aeb2b116718451d1e0db0393510581",
              m: "https://bs.plantnet.org/image/m/ac1767c0a6aeb2b116718451d1e0db0393510581",
              s: "https://bs.plantnet.org/image/s/ac1767c0a6aeb2b116718451d1e0db0393510581",
            },
            citation: "ben vc / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Alan Elliott",
            license: "cc-by-sa",
            date: { timestamp: 1626963996883, string: "22 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/6b3656754085e84eebcf2083f5cea6ab1dd91d87",
              m: "https://bs.plantnet.org/image/m/6b3656754085e84eebcf2083f5cea6ab1dd91d87",
              s: "https://bs.plantnet.org/image/s/6b3656754085e84eebcf2083f5cea6ab1dd91d87",
            },
            citation: "Alan Elliott / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "flower",
            author: "Alan Elliott",
            license: "cc-by-sa",
            date: { timestamp: 1626963996883, string: "22 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/5c2ce1406d28e4aaae6b805bc184a545aa7e72b9",
              m: "https://bs.plantnet.org/image/m/5c2ce1406d28e4aaae6b805bc184a545aa7e72b9",
              s: "https://bs.plantnet.org/image/s/5c2ce1406d28e4aaae6b805bc184a545aa7e72b9",
            },
            citation: "Alan Elliott / Pl@ntNet, cc-by-sa",
          },
          {
            organ: "habit",
            author: "Alan Elliott",
            license: "cc-by-sa",
            date: { timestamp: 1626963996883, string: "22 juli 2021" },
            url: {
              o: "https://bs.plantnet.org/image/o/28d6c9b627254452a30f98d299c11d5d1f3582b8",
              m: "https://bs.plantnet.org/image/m/28d6c9b627254452a30f98d299c11d5d1f3582b8",
              s: "https://bs.plantnet.org/image/s/28d6c9b627254452a30f98d299c11d5d1f3582b8",
            },
            citation: "Alan Elliott / Pl@ntNet, cc-by-sa",
          },
        ],
        gbif: { id: "2753182" },
      },
    ],
    version: "2022-10-24 (7.0)",
    remainingIdentificationRequests: 498,
  },
  chosenplant: {
    additionalWaterInfo: "",
    latinName: "Roselium bulbiferum",
    maintenance: "2",
    origin: "SouthAmerica",
    plantName: "Roos",
    poisonous: "idk",
    poisonousFor: "",
    fertilizer: "",
    fertilizerDisclosure: "",
    waterFrequency: 1,
    waterFrequencyCheckbox: false,
    waterInterval: "Monthly",
    id: "clducoort5cgq0bw4ky24kef8",
    fotos: [{ url: "https://media.graphassets.com/59Zr7yKpTQhby52jNfgs" }],
  },
  myplant: {
    score: 0.67703,
    species: {
      scientificNameWithoutAuthor: "Lilium bulbiferum",
      scientificNameAuthorship: "L.",
      genus: {
        scientificNameWithoutAuthor: "Lilium",
        scientificNameAuthorship: "",
        scientificName: "Lilium",
      },
      family: {
        scientificNameWithoutAuthor: "Liliaceae",
        scientificNameAuthorship: "",
        scientificName: "Liliaceae",
      },
      commonNames: ["Roggelelie", "Tijgerlelie"],
      scientificName: "Lilium bulbiferum L.",
    },
    images: [
      {
        organ: "flower",
        author: "Stéphanie Coulon",
        license: "cc-by-sa",
        date: { timestamp: 1561290800525, string: "23 juni 2019" },
        url: {
          o: "https://bs.plantnet.org/image/o/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
          m: "https://bs.plantnet.org/image/m/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
          s: "https://bs.plantnet.org/image/s/b3e06bd65b4f1548a5c9fb00628af9c5df3bf82b",
        },
        citation: "Stéphanie Coulon / Pl@ntNet, cc-by-sa",
      },
      {
        organ: "flower",
        author: "Марина Марина",
        license: "cc-by-sa",
        date: { timestamp: 1593507484063, string: "30 juni 2020" },
        url: {
          o: "https://bs.plantnet.org/image/o/c297675a19d9344fe0f68827bf15aaad97f72009",
          m: "https://bs.plantnet.org/image/m/c297675a19d9344fe0f68827bf15aaad97f72009",
          s: "https://bs.plantnet.org/image/s/c297675a19d9344fe0f68827bf15aaad97f72009",
        },
        citation: "Марина Марина / Pl@ntNet, cc-by-sa",
      },
      {
        organ: "flower",
        author: "Alessandro Cappellini",
        license: "cc-by-sa",
        date: { timestamp: 1592570764279, string: "19 juni 2020" },
        url: {
          o: "https://bs.plantnet.org/image/o/65aa25c1aaecc831e5e9654b55409af3da5e7168",
          m: "https://bs.plantnet.org/image/m/65aa25c1aaecc831e5e9654b55409af3da5e7168",
          s: "https://bs.plantnet.org/image/s/65aa25c1aaecc831e5e9654b55409af3da5e7168",
        },
        citation: "Alessandro Cappellini / Pl@ntNet, cc-by-sa",
      },
      {
        organ: "flower",
        author: "Beate Liebold",
        license: "cc-by-sa",
        date: { timestamp: 1640598277380, string: "27 december 2021" },
        url: {
          o: "https://bs.plantnet.org/image/o/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
          m: "https://bs.plantnet.org/image/m/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
          s: "https://bs.plantnet.org/image/s/0a9ac14a56c4462dc942e4f503797ddb4cb8b2d6",
        },
        citation: "Beate Liebold / Pl@ntNet, cc-by-sa",
      },
      {
        organ: "flower",
        author: "Alekos",
        license: "cc-by-sa",
        date: { timestamp: 1592678437361, string: "20 juni 2020" },
        url: {
          o: "https://bs.plantnet.org/image/o/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
          m: "https://bs.plantnet.org/image/m/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
          s: "https://bs.plantnet.org/image/s/8705b3ad63ba630bb2ec9c0ca7df62a42809d872",
        },
        citation: "Alekos / Pl@ntNet, cc-by-sa",
      },
      {
        organ: "flower",
        author: "Pistol",
        license: "cc-by-sa",
        date: { timestamp: 1594575728525, string: "12 juli 2020" },
        url: {
          o: "https://bs.plantnet.org/image/o/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
          m: "https://bs.plantnet.org/image/m/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
          s: "https://bs.plantnet.org/image/s/8e9aeae04b4dd04b5a4d8ba2148c3ecd56c1b9fa",
        },
        citation: "Pistol / Pl@ntNet, cc-by-sa",
      },
    ],
    gbif: { id: "2753079" },
  },
  plant: {
    url: "data:image/jpeg;base64,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",
    name: "download-1.jpg",
    type: "image/jpeg",
    size: 7212,
  },
  plantinfo: {},
  step: 3,
  swaptype: "swap",
  plantforms: {
    plantName: "Roggelelie",
    latinName: "Lilium bulbiferum",
    origin: "Oceania",
    maintenance: "3",
    waterInterval: "Daily",
    waterFrequency: 2,
    waterFrequencyCheckbox: false,
    additionalWaterInfo: "",
    fertilizer: "spring",
    fertilizerDisclosure: "asd",
    poisonous: "yes",
    poisonousFor: "asdasf",
  },
  userForms: {
    fullName: "asfsafasf",
    email: "asfasf@afsasf.nl",
    date: "2023-06-28",
    time: "17:55",
  },
};

const SwapFlow = ({ formData, dictionary, locale }) => {
  const { getItem } = useStorage();
  const [flowData, setFlowData] = useState(flowdata);
  const totalSteps = flowData.swaptype === "donate" ? 6 : 7;

  useEffect(() => {
    console.log("render");
    setFlowData(
      getItem("flowData") ? JSON.parse(getItem("flowData")) : flowData
    );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("flowData", JSON.stringify(flowData));
  }, [flowData]);

  return (
    <section className={styles.swapflow}>
      <SwapFlowReturn
        className={styles.swapflow__return}
        flowData={flowData}
        setFlowData={setFlowData}
        totalSteps={totalSteps}
      />
      {/* <Header /> */}
      <Title
        title={"h1"}
        className={styles.swapflow__title}
        modifier={"gentle-appear"}>
        {dictionary.swapflow.steptitle[`step-${flowData.step}`]}
      </Title>
      <Text className={styles.swapflow__surtitle} modifier={["italic"]}>
        {dictionary.swapflow.stepsurtitle[flowData.swaptype]}
      </Text>
      <Text modifier={"small"} className={styles.swapflow__description}>
        {dictionary.swapflow.stepdescription[`step-${flowData.step}`]}
      </Text>
      <FlowBase />
    </section>
  );

  function FlowBase() {
    const data = {
      flowdata: { flowData, setFlowData },
      locale,
      dictionary,
    };
    switch (flowData.step) {
      case 1:
        return <Uploader data={data} />; // identifier
      case 2:
        return (
          <Results
            mydata={data}
            flowdata={{ flowData, setFlowData }}
            data={flowData.apidata}
          />
        );
      case 3:
        return <SwapFlowInfo flowdata={{ flowData, setFlowData }} />;
      case 4:
        return <Form formData={formData} data={data} form={"plantforms"} />;
      case 5:
        if (flowData.swaptype === "donate")
          return <Form formData={formData} data={data} form={"userForms"} />;

        return (
          <Switcher
            formData={formData}
            flowdata={{ flowData, setFlowData }}
            data={data}
          />
        );
      case 6:
        if (flowData.swaptype === "donate")
          return <SwapFlowCheck data={data} />;

        return <Form formData={formData} data={data} form={"userForms"} />;
      default:
        return <SwapFlowCheck data={data} />;
    }
  }
};

export default SwapFlow;
