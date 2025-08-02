import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    align-items: flex-start;
    padding-top: 100px;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    padding: 2rem 1rem;
    justify-content: center;
  }
`;

const StudentCard = styled.div`
  width: 600px;
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 0 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 8px;
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-right: 20px;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    width: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #007bff;
  margin: 0;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  text-align: left;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InfoTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 5px 0;
  line-height: 1.5;

  strong {
    color: #007bff;
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  border-top: 2px solid #007bff;
  padding-top: 10px;

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    margin-top: 15px;
    padding-top: 8px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #777;
  margin: 5px 0;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          <StudentCard>
            <Header>
              <Logo
                src="https://ttnnth-tinhoc.sgu.edu.vn/wp-content/uploads/2018/11/SGU-LOGO.png"
                alt="SGU Logo"
              />
              <Title>TRƯỜNG ĐẠI HỌC SÀI GÒN</Title>
            </Header>
            <Content>
              <Info>
                <InfoTitle>THÔNG TIN SINH VIÊN</InfoTitle>
                <InfoText>
                  <strong>Họ và tên:</strong> Huỳnh Nhựt Dương
                </InfoText>
                <InfoText>
                  <strong>MSSV:</strong> 3121410024
                </InfoText>
                <InfoText>
                  <strong>Ngành học:</strong> Công nghệ Thông tin
                </InfoText>
                <InfoText>
                  <strong>Năm học:</strong> Năm cuối
                </InfoText>
                <InfoText>
                  <strong>Email:</strong> nguyenvana@sgu.edu.vn
                </InfoText>
                <InfoText>
                  <strong>Mô tả:</strong> Sinh viên năm cuối ngành Công nghệ thông tin tại Đại học Sài Gòn, định hướng Front-end. Tư duy UI/UX, đam mê xây dựng sản phẩm đẹp, mượt, dễ dùng. Luôn học hỏi và mong muốn đóng góp vào những dự án có giá trị cho cộng đồng.
                </InfoText>
              </Info>
            </Content>
            <Footer>
              <FooterText>Địa chỉ: 273 An Dương Vương, Quận 5, TP. Hồ Chí Minh</FooterText>
              <FooterText>
                Website: <a href="https://sgu.edu.vn" target="_blank">sgu.edu.vn</a>
              </FooterText>
            </Footer>
          </StudentCard>
        </Main>
        {/* <BigTitlte text="LOVE SGU" top="10%" right="20%" /> */}
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;