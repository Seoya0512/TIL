# MarkDown 문법

___

기술 글쓰기 작성시 사용하면 유용한 문법 등을 작성 



#### 1. 텍스트

1. **강조 (Bold)**

   ``` 
   **강조** 
   ```

2. *기울임(Italic)*

   ```
   *기울임*
   ```

3. ~~취소선~~

   ```
   ~~취소선~~ 
   ```

4. <u>밑줄</u>

   ```
   <u> 밑줄 </u>
   ```

5. <span style = 'color : Blue'>글씨 색 </span>

   ```
   <span style ='color : Blue'> 글씨 색 </span>
   ```

   

6. 가운데 정렬 

   ```
   <center> 가운데 </center>
   ```

   <center>가운데</center>





#### 2. LaTex 문법 

* 마크다운에서 수식을 사용하기 ✔️

* 종류가 매우 다양하기 때문에 필요할 때 cheat sheet 사용하기 

* [Cheatsheet](https://wch.github.io/latexsheet/)

  

> Typora 에서 LaTex 수식 불어오기 - $$ 

1. 사칙연산 
   $$
   a + b = c
   $$
   

   

2. 분수 

   ```la
   $$\frac{분자}{분모}$$
   ```

   $$
   \frac{1}{2}
   $$

   

3. 위첨자 지수 (Power)

   ```latex
   # 승, 제곱에 해당하는 표기를 위해서 ^문자를 사용 
   $$2^2 = 4$$
   ```

   
   $$
   2^2 = 4
   $$

4. 아래 첨자 (Indices)

   ```latex
   # 아래첨자는 _문자로 표기한다 
   
   $$a_1, a_2, a_3$$
   ```

   $$
   a_1, a_2, a_3
   $$

   

5. 거듭제곱근(Root)

   ```latex
   # square root의 약자 sqrt 
   
   $$\sqrt{2}$$
   ```

   $$
   \sqrt{2}
   $$

   

6. 팩토리얼 (Factorial)

   ```latex
   $$n!$$
   
   $$n! = 1 \times 2 \times 3 \times \ldots n$$
   ```

   $$
   n! = 1 \times 2 \times 3 \times \ldots n
   $$

   ```latex
   # Product 표기법으로 표현 
   $$n! = \prod_{k=1}^n k$$
   ```

   $$
   \prod_{k=1}^n k
   $$

7. 집합 

   ```latex
   # 합집합 = \cup
   $$\{a,b,c\} \cup \{d,e\} = \{a,b,c,d,e\}$$
   
   # 교집합 = \cap
   $$\{a,b,c\} \cap \{a,b,d\} = \{a,b\}$$
   
   # 포함된다 = \in
   $$x \in [-1,1]$$
   ```

   $$
   \{a,b,c\} \cup \{d,e\} = \{a,b,c,d,e\}
   $$

   $$
   $$x \in [-1,1]$$
   $$

   

8. 삼각함수 3총사 

   ```latex
   # cos, sin
   $$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$
   ```

   $$
   \cos (2\theta) = \cos^2 \theta - \sin^2 \theta
   $$

   

9. 파이 

   ```latex
   $$\pi$$ 			# 소문자 파이
   $$\Pi$$				# 대문자 파이 
   $$\phi$$			# 기호 
   ```

   $$
   \phi
   $$

   

10. 각도

    ```latex
    # 각도 = ^\circ
    $$90^\circ$$
    ```

    $$
    90^\circ
    $$

11. 극한 (limit)

    ```latex
    # 극한 = \lim_{x\to\___}
    $$\lim_{x \to \infty} \exp(-x) = 0$$
    ```

    $$
    \lim_{x \to \infty} \exp(-x) = 0
    $$

    

12. 시그마 (for)

    ```latex
    # \sum_{i= 시작점}^{끝점} t_i
    $$\sum_{i=1}^{10} t_i$$
    $$\displaystyle\sum_{i=1}^{10} t_i$$
    ```

    $$
    \displaystyle\sum_{i=1}^{10} t_i
    $$

    

13. 로그(log)

    ```latex
    # log
    $$\log_b a$$  
    ```

    $$
    \log_b a 
    $$

    

14. 적분

    ```latex
    #\int\
    $$\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x$$
    
    $$\int\limits_a^b$$
    ```

    $$
    \int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
    $$

    

15. 행렬

    ```latex
    $$A_{m,n} =
     \begin{pmatrix}
      a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
      a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
      \vdots  & \vdots  & \ddots & \vdots  \\
      a_{m,1} & a_{m,2} & \cdots & a_{m,n}
     \end{pmatrix}$$
    ```

    $$
    A_{m,n} =
     \begin{pmatrix}
      a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
      a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
      \vdots  & \vdots  & \ddots & \vdots  \\
      a_{m,1} & a_{m,2} & \cdots & a_{m,n}
     \end{pmatrix}
    $$

    





___

###### 참고자료

1. [마크다운 문법정리2_수식](https://huni0318.github.io/blog/blog-etc/2020-12-21-markdown-tutorial2/)







