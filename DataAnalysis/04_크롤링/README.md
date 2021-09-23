# Web Crawling

___



### 개요 

- 사전적의미 : "기어다니다"
- Web상을 돌아다니면서 정보를 수집하는 행위
- 크롤링(Crawling), 스크랩핑(Scraping) 또는 데이터 긁기 등 다양한 단어로 불린다 



### 대상❓

- 웹 상의 자원 
- 정적인 문서 또는 API와 같은 서비스 
- 구글과 같은 검색엔진
  - 웹 사이트의 정적인 데이터를 긁어다가 필요한 정보를 추출해서 검색 인덱스를 생성 
- 가격 정보 비교 사이트
  -  상품과 가격정보등을 긁어다가 서로 다른 쇼핑몰의 가격을 비교 



### Tool ⚙️

* 라이브러리

  * Beautiful Soup 
    * 일반적, 파이썬에서 사용
  * Selenium 
    * 브라우저를 이용 

* 사전 지식: HTML, CSS, JavaScript 기초 

* Chrome Web Browser 개발자 도구

* 설치 

  ```terminal 
  conda install beautifulsoup4
  ```

  

### 크롤링 과정 👾

1. 크롤링 대상 선정 (API 또는 웹 문서)
2. 데이터 로드
3. 데이터 분석 
4. 수집 

