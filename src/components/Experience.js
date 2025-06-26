import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './css/Experience.css'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';

const experiences = [
  {
    year: '2018 - 2021',
    title: '臺北市立松山高級工農職業學校',
    company: '資訊科.',
    description: '升上高中時，我對資訊科技產生了濃厚興趣，因此選擇就讀資訊科。 正式課程內容與電子科相同，但額外加入了程式設計課程，學習了 Visual Basic 與 C# 等語言，逐步打下程式設計的基礎。在小專題實作中，我們以 Arduino 開發板為核心進行開發，透過實際操作進一步提升了邏輯思維與問題解決能力， 也更加確立我未來朝向程式設計領域發展的目標。',
    dotColor: '#2196f3'
  },
  {
    year: '2021 - Now',
    title: '國立高雄科技大學',
    company: '智慧商務系',
    description: '大學我選擇就讀智慧商務學系，雖然課程涵蓋許多商業應用相關內容，但我更專注於程式設計的學習與實際應用。 我深入了解了 MVC架構 ，學習 JavaScript PHP 與 MySQL ， 並使用 React.js 、 Lumen 前後端框架進行開發與團隊協作。 在課程與專題中，我也接觸到物聯網相關應用， 曾使用 樹莓派 製作一個可自動監控環境的蝸牛溫室系統。',
    dotColor: '#4caf50'
  },
  {
    year: '2024 - Now',
    title: '台郡科技股份有限公司',
    company: '資訊部 應用系統課',
    description: '我目前在台郡科技的資訊部應用系統課擔任實習生。部門主要是在處理客戶以及廠內的資訊需求，其中包括了表單處理、 公司網頁開發與維護、 ERP 系統運維(公司使用 SAP )、異常處理等。我的工作主要是SAP程式開發與處理User需求，包括使用 ABAP 撰寫程式，根據User需求處理並開發客製化程式。',
    dotColor: '#ff9800'
  }
];

function Experience() {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false)
  console.log(animate)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {threshold: 0.5}
    )
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [])

  return (
    <section id="experience" className="section-experience py-5">
      <Container className="section-container" style={{ paddingTop: '50px', paddingBottom: '50px'}}>
        <h1
          ref={titleRef}
          className={`experience-title ${animate ? 'animate' : ''}`}
        >
          EXPERIENCE
        </h1>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                {exp.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: exp.dotColor }} />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="span" style={{ fontWeight: 'bold'}}>
                    {exp.title}
                  </Typography>
                  <Typography color="text.secondary">{exp.company}</Typography>
                  <Typography variant="body2">{exp.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}

export default Experience;
