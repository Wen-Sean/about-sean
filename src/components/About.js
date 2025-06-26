import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './css/About.css';

function About() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="about" className="section-about relative overflow-hidden bg-slate-800">
      <Container
        className="section-container"
        style={{
          height: '500px',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            fontSize: '5rem',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: 'white',
          }}
        >
          Hello! This is Sean.
        </p>
        <p style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', color: 'white' }}>
          Welcome To My Website.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            style={{
              marginTop: '20px',
              backgroundColor: '#facc15',
              color: 'white',
              width: '100px',
              height: '40px',
              fontWeight: 'bold'
            }}
          >
            About
          </Button>
        </div>


        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              borderRadius: '10px',         // 圓角
              padding: '5px',              // 內距
              backgroundColor: '#fefce8',   // 淡黃色背景（Tailwind 的 yellow-50）
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)', // 陰影
            },
          }}
        >
          <DialogTitle
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              color: '#b45309', // 深黃褐色字
            }}
          >
            個人簡介
          </DialogTitle>

          <DialogContent style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', color: '#444' }}>
            <h6 className="mt-3">
              我是文紹祥，國立高雄科技大學智慧商務系應屆畢業生<br />
              擅長 SAP ABAP 程式開發、網頁前後端開發<br />
              2024 年 9 月就任台郡科技資訊部實習生
            </h6>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} style={{ color: '#b45309', fontWeight: 'bold' }}>
              關閉
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </section>
  );
}

export default About;
