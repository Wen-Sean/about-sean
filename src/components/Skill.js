import { Container } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './css/Skill.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPhp,
  FaVuejs,
  FaReact as FaReactNative,
} from 'react-icons/fa';
import {
  SiDjango,
  SiLumen,
  SiFlask,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

function Skill() {
  const categories = [
    {
      title: 'Frontend',
      skills: [
        { label: 'HTML5', icon: <FaHtml5 size={40} color="#e44d26" /> },
        { label: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" /> },
        { label: 'JavaScript', icon: <FaJs size={40} color="#f0db4f" /> },
        { label: 'React', icon: <FaReact size={40} color="#61dafb" /> },
        { label: 'React Native', icon: <FaReactNative size={40} color="#61dafb" /> },
        { label: 'Vue.js', icon: <FaVuejs size={40} color="#42b883" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { label: 'Node.js', icon: <FaNodeJs size={40} color="#3c873a" /> },
        { label: 'PHP', icon: <FaPhp size={40} color="#8993be" /> },
        { label: 'Django', icon: <SiDjango size={40} color="#092e20" /> },
        { label: 'Lumen', icon: <SiLumen size={40} color="#e535ab" /> },
        { label: 'Flask', icon: <SiFlask size={40} color="#000000" /> },
        { label: 'Python', icon: <FaPython size={40} color="#306998" /> },
      ],
    },
    {
      title: 'Database',
      skills: [
        { label: 'MySQL', icon: <FaDatabase size={40} color="#00758f" /> },
        { label: 'MongoDB', icon: <SiMongodb size={40} color="#47a248" /> },
        { label: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" /> },
      ],
    },
    {
      title: 'Tools',
      skills: [{ label: 'Git', icon: <FaGitAlt size={40} color="#f1502f" /> }],
    },
  ];

  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // 控制展開的卡片

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

  const handleCardClick = (idx) => {
    // 如果點到的是同一張卡片，則取消展開
    setExpandedCardIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="skill" className="section-skill">
      <Container className="section-container" style={{ paddingBottom: '50px'}}>
        <h1
          ref={titleRef}
          className={`skill-title ${animate ? 'animate' : ''}`}
        >
          Skill
        </h1>

        <Box
          sx={{
            display: 'flex',
            gap: 1, // 加大卡片間距
            flexWrap: 'wrap',
            justifyContent: 'center',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {categories.map((category, idx) => {
            const isExpanded = expandedCardIndex === idx;
            const shouldMarquee = category.skills.length > 3 && !isExpanded;

            // 如果有卡片被展開，其他卡片就隱藏
            if (expandedCardIndex !== null && !isExpanded) {
              return null;
            }

            return (
              <Card
                key={idx}
                onClick={() => handleCardClick(idx)}
                sx={{
                  minWidth: 300,
                  bgcolor: 'white',
                  color: 'black',
                  p: 2,
                  cursor: 'pointer',
                  width: isExpanded ? '360px' : '300px',
                  transition: 'width 0.3s ease-in-out',
                  boxShadow: isExpanded ? 6 : 1,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                    {category.title}
                  </Typography>

                  {shouldMarquee ? (
                    <Box className="marqueeWrapper">
                      <Box className="marqueeAnimation">
                        {[...category.skills, ...category.skills].map((skill, i) => (
                          <Box
                            key={i}
                            sx={{
                              textAlign: 'center',
                              minWidth: 10,
                              display: 'inline-flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            {skill.icon}
                            <Typography variant="subtitle2" sx={{ mt: 1 }}>
                              {skill.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2, // 圖示間距
                        justifyContent: 'center',
                      }}
                    >
                      {category.skills.map((skill, i) => (
                        <Box
                          key={i}
                          sx={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          {skill.icon}
                          <Typography variant="subtitle2" sx={{ mt: 1 }}>
                            {skill.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </section>
  );
}

export default Skill;
