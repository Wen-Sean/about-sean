import { Container, Carousel } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import './css/Project.css';

const projects = [
  { title: 'AboutMe', description: '個人介紹網站', image: require('../assets/proj_about.png') },
  { title: '惡靈是吧', description: '萬聖節風格2048遊戲', image: require('../assets/proj_2048.png') },
  { title: '虛擬鋼琴演奏系統', description: '專題作品', image: require('../assets/proj_piano.png') },
  { title: 'CRM專案', description: '主要為業務紀錄客戶相關資料使用。 負責項目: 相關後端API開發 前端API串接與畫面調整', image: require('../assets/bg.png') },
  { title: '問卷系統', description: '為公司內部與客戶的問卷調查與管理 。 負責項目: 相關後端API開發 前端API串接與畫面調整', image: require('../assets/bg.jpg') },
];

function chunkArray(arr, size) {
  const chunks = [];
  for(let i = 0; i < arr.length; i += size){
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function Project() {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const groupedProjects = chunkArray(projects, 3);

  return (
    <section id="project" className="section-project">
      <Container className="section-container" style={{ paddingBottom: '50px'}}>
        <h1
          ref={titleRef}
          className={`project-title ${animate ? 'animate' : ''}`}
        >
          Project
        </h1>

        <Carousel indicators={true} interval={3000} fade={false}>
          {groupedProjects.map((group, groupIdx) => (
            <Carousel.Item key={groupIdx}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                {group.map((project, i) => {
                const index = groupIdx * 3 + i;
                const isExpanded = expandedCardIndex === index;

                return (
                    <div
                    key={index}
                    style={{
                        position: 'relative',
                        width: isExpanded ? '350px' : '300px',
                        height: isExpanded ? '280px' : '200px',
                        borderRadius: '5px',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                        padding: '15px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        transition: 'all 0.3s ease',
                        // opacity: expandedCardIndex === null || isExpanded ? 1 : 0,
                        // pointerEvents: expandedCardIndex === null || isExpanded ? 'auto' : 'none',
                        overflow: 'hidden',
                    }}
                    onClick={() => {
                        if (isExpanded) {
                        setExpandedCardIndex(null);
                        } else {
                        setExpandedCardIndex(index);
                        }
                    }}
                    >
                    <div
                        style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.7)', 
                        zIndex: 0,
                        borderRadius: '5px',
                        }}
                    />

                    <div
                        style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 1,
                        borderRadius: '5px',
                        }}
                    />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div
                        style={{
                            fontWeight: '700',
                            fontSize: '1.3rem',
                            textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                            marginBottom: '10px',
                        }}
                        >
                        {project.title}
                        </div>
                        {isExpanded && (
                        <div
                            style={{
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            borderRadius: '8px',
                            padding: '10px',
                            fontSize: '1rem',
                            lineHeight: '1.4',
                            }}
                        >
                            {project.description}
                        </div>
                        )}
                    </div>
                    </div>
                );
                })}

              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Project;
