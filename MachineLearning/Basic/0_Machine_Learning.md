# Machine Learning 

___



1. **인공지능 (Artificial Intelligence)**

   기계가 학습과 추리 등의 인간의 지능과 비슷한 작업을 수행하는 것 

   - 정확성 테스트 (Turning Test)

     - 벽을 사이에 두고 인간  vs 인간, 컴퓨터가 채팅을 하게 된다. 

       이때 인간이 누구와 대화를 하고 있는지 판단할 수 있는 여부에 따라 정확성이 판단된다 

       

2. **기계학습 (Machine Learning)**

   데이터에 대한 수학적 모델 기반 인공지능 기법 

   - 기계 학습의 범주 

     - **지도학습 (Supervised Learning)**

       - Task Driven (predict next value)

       - 특징(feature)과 결과(label, target) 사이의 관계를 모델링

       - 새 데이터에 대해 학습된 레이블로 결과로 냄 

       - <span style="color:blue"> 분류, 회귀</span>

         

     - **비지도학습 (Unsupervised Learning)**

       - Data Driven (Identify Clusters)

       - 특징(feature)만 주어짐 

       - 데이터의 특징을 모델링 (*데이터 스스로가 말하게 하는 것* )

       - 새로 주어진 데이터에 대해 기존 자료 중 비슷한 군(class, category)에 배치 

       - <span style="color:blue"> 군집화 </span>

         - 레이블이 없는 데이터에 대한 레이블을 추론하는 분야
         - Label을 정하지 않음, 비슷한 class 끼리 분류

       - <span style="color:blue"> 차원 축소 </span>

         - 특별한 특징을 조합하여 한 차원 높은 것으로 

         - (예)  data = x1, x2, x3, x4 

           x2 = 2x1 + 3x3 이라면,  x2값은 굳이 필요 없으므로 삭제,  data는 한 차원 축소

           

     - **강화학습(Reinforment Learning)**

       - Learn from Mistakes

         

3. **딥러닝 (Deep Learning)**

   Artificial Neural Network 기반 인공지능 기법 

   

<center>🤖 관계 표시 : 인공지능 >> 머신러닝(기계학습) >> 딥러닝 </center>



#### 인공지능 용어 

- 학습 데이터 (Training set)
  - 기계 학습의 모델을 검증하며 학습 (파라메터 조정)에 사용 되는 데이터 
- 테스트 데이터 (Test set, recall data set)
  - 이미 '학습된' 모델에 적용

- 성능 평가 
  - 데이터 집합을 얼마나 **정확하게** 예측했는지 판단 



#### 통계와 기계 학습 

- 머신러닝과 통계학과의 관계
  - 데이터를 수집하고 분석해 컴퓨터에게 학습 시크는 과정 
  - 새로운 입력값에 대해 <u>결과를 예측하는 과정에 확률 이론</u> 활용



- 머신러닝에서 통계적인 방법 
  - 상관관계분석 
  - 회귀분석
  - 확률분석 