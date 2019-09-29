import React from 'react';
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav'

const NyAbout = (props) => {
  return (
    <div className={styles.aboutBox}>
      <BreadNav props = {props} />
    <div className={styles.tinyBorder}></div>
    <div className={`${styles.nyAboutBox} ${styles.nyAboutUsBox}`}>
    <p>武汉齐翔通用航空股份有限公司成立于2010年12月16日，于2012年11月1日取得运行合格证，是由国家民航局批准成立的甲类通用航空公司，注册资本2亿元。公司总部现设于山东济南，将雪野通用机场作为主运行基地。公司目前拥有R44、运动类轻型自转旋翼机等不同型号的飞机15架。公司主要经营范围涉及空中游览、航空摄影、空中广告、私用、商用飞行驾驶执照培训、航空器代管、航空器销售、防治农林业病虫害，防治雾霾等业务。</p>

    <p>2013年我公司与莱芜雪野政府联手成功举办了“2013全国直升机锦标赛暨中国国际航空运动器材装备展览会”。</p>

    <p>公司自2014年5月至2017年11月主营MTO旋翼机飞行员执照培训业务。齐翔作为国内首家MTO旋翼机飞行员执照培训单位，自获得培训资质以来按照公司的运行手册和训练大纲等相关手册先后举办了8期培训班，共计72名学员，所有学员均合格毕业，取得执照。齐翔通航在飞行学员培训过程中，不断总结经验，精益求精，取得了优异的成绩。</p>

    <p>联系电话：400-117-0038</p>

    <p>传<span className={styles.spanHide}>无无</span>真：400-117-0038</p>

    <p>联系地址：江汉路宝丽金中央荣御C1-1708</p>

    <p>项目主要是培训MTO运动类驾驶员执照。</p>

    <p>培训使用机型：MTOsport是德国AutoGryro公司设计生产的轻型运动类自转旋翼机。主要用于飞行员培训、警用巡航、俱乐部娱乐飞行等飞行活动。武汉齐翔通用航空股份有限公司共投入8架此型飞机用于培训。</p>
    </div>
  </div>
  );
};

NyAbout.propTypes = {
};


export default NyAbout;
