#  Deep Learning for text and sequences 📝

___



- 텍스트(단어의 시퀀스 또는 문자의 시퀀스), 시계열 또는 일반적인 시퀀스 데이터 처리에 적합 
  - 문서 분류 나 시계열 분류 
  -  시계열 비교
  - Sequence - to - sequence 학습 
  -  감성분석 
  - 시계열 예측

- 텍스트(text)는 가장 흔한 시퀀스 형태의 데이터 
  - 기초적인 자연어 이해 (Natural Language Understanding)문제를 처리 
  - 원본을 입력으로 사용 할 수 없음 ➡️ 텍스트를 **수치형 텐서**로 변환하는 과정이 필요 
    - 텍스트 벡터화 

___



#### 📍텍스트 벡터화 (Vectorizing Text)

- 텍스트를 단어로 나누고 각 단어를 하나의 벡터로 변환 

- 텍스트를 문자로 나누고 각 문자를 하나의 벡터로 변환 

- 전처리 방법 :  1) 토큰에 고유 인덱스 부여 

  ​					  2) 인코딩을 통해 적절한 형태로 변경 

##### 용어

- 토큰(token) : 텍스트를 나누는 단위, 문법적으로 더 이상 나눌 수 없는 언어 요소 

- 토큰화(tokenization) : 텍스트를 토큰으로 나누는 작업 

- 텍스트 벡터화 : 어떤 종류의 토큰화를 적용하고 결과

  

##### N-gram

문장에서 추출한 n개(또는 그 이하)의 연속된 단어그룹 

- 2-그램 가방(bag of 2-gram) , 3-그램 가방(bag of 3-gram)등으로 표현 

- 가방(bag)이란 용어는 다루고자 하는 것이 리스트나 시퀀스가 아니라 <u>토큰의 집합</u> 이라는 의미

  

##### Bag-of-Words(BoW)

- 특정한 순서가 없는 토큰을 토큰화 하는 방법 

- 문장의 구조(순서)가 사라진 집합으로 간주 

  

